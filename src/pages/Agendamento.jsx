import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, Calendar as CalendarIcon, Check, Clock, User } from "lucide-react";
import { format, isBefore, startOfToday, addDays } from "date-fns";
import { ptBR } from "date-fns/locale";

const services = [
    {id: "limpeza", icon: "🦷", title: "Limpeza e Profilaxia", duration: "45min", price: "R$150"},
    {id: "avaliação", icon: "🔍", title: "Avaliação Completa", duration: "30min", price: "R$100"},
    {id: "clareamento", icon: "✨", title: "Clareamento Dental", duration: "60min", price: "R$500"},
    {id: "ortodontia", icon: "😬", title: "Ortodontia", duration: "45min", price: "Consultar"},
    {id: "implante", icon: "🔧", title: "Implantes Dentários", duration: "90min", price: "Consultar"},
    {id: "estetica", icon: "💎", title: "Estética Dental", duration: "60min", price: "Consultar"},
];

const profissional = [
    {id: "1", name: "Dr. Ricardo Silva", especialidade: "Implantodontia e Estética dental", avatar: "👨‍⚕️"},
];

const timeSlots = [
    "08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00"
];

const Agendamento = () => {
    const [searchParams] = useSearchParams();
    const initialService = searchParams.get("servico") || "";

    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState(initialService);
    const [selectedProfissional, setSelectedProfissional] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [step]);

    const canProceed = () => {
        switch(step) {
            case 1:
                return selectedService !== "";
            case 2:
                return selectedDate !== undefined && selectedTime !== "";
            case 3:
                return formData.name && formData.email && formData.phone;
            default:
                return true;
        }
    }

    const handleNext = () => {
        if(canProceed() && step < 4) {
            setStep(step + 1);
        }
    }

    const handleBack = () => {
        if(step > 1) {
            setStep(step - 1);
        }
    }

    const handleSubmit = async () => {
        setIsSubmitting(true);

        //Simule API call 
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setStep(4);

        toast("Consulta agendada!", {
            description: "Você receberá uma confirmação por e-mail.",
        });
    }

    const selectedServiceData = services.find(s => s.id === selectedService);

    const formatPhone = (value) => {
        if(!value) return "";

        // Remove tudo que não for número
        const digits = value.replace(/\D/g, "");

        // Limita a 11 dígitos (DDD + 9 números)
        const limitedDigits = digits.slice(0,11);

        // Aplica a formatação progressivamente
        if(limitedDigits.length <= 2) {
            return limitedDigits.replace(/^(\d{0,2})/, "($1");
        }
        if(limitedDigits.length <= 7) {
            return limitedDigits.replace(/^(\d{2})(\d{0,5})/, "($1) $2")
        } 

        return limitedDigits.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }

    return(
        <div className="min-h-screen bg-background">
            <Header/>

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Progresso */}
                    <div className="mb-8">
                        <div className="flex items-center justify-between mb-4">
                            {[1,2,3,4].map((s) => (
                                <div key={s} className="flex items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                                        step >= s
                                        ? "gradient-hero text-primary-foreground"
                                        : "bg-muted text-muted-foreground"
                                    }`}>
                                        {step > s ? <Check className="w-5 h5"/> : s}
                                    </div>
                                    {s < 4 && (
                                        <div className={`hidden sm:block w-16 md:w-24 lg:w-32 h-1 mx-2 rounded ${
                                            step > s ? "bg-primary" : "bg-muted"
                                            }`}>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className={step >= 1 ? "text-primary font-medium" : "text-muted-foreground"}>Serviço</span>
                            <span className={step >= 2 ? "text-primary font-medium" : "text-muted-foreground"}>Data e Hora</span>
                            <span className={step >= 3 ? "text-primary font-medium" : "text-muted-foreground"}>Seus Dados</span>
                            <span className={step >= 4 ? "text-primary font-medium" : "text-muted-foreground"}>Confirmação</span>
                        </div>
                    </div>

                    {/* Step 1: Selecionar Serviço */}
                    {step === 1 && (
                        <div className="animate-fade-up">
                            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Escolha o serviço</h1>
                            <p className="text-muted-foreground mb-8">Selecione o tipo de atendimento desejado</p>

                            <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                {services.map((service) =>(
                                    <button
                                        key={service.id}
                                        onClick={() => setSelectedService(service.id)}
                                        className={`p-6 rounded-2xl border-2 text-left transition-all ${
                                            selectedService === service.id
                                            ? "border-primary bg-primary/5 shadow-card"
                                            : "border-border hover:border-primary/30 hover:shadow-card"
                                        }`}
                                    >
                                        <div className="text-3xl mb-3">{service.icon}</div>
                                        <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <span>⏱ {service.duration}</span>
                                            <span className="text-primary font-medium">{service.price}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Profissional Selection */}
                            <h2 className="text-xl font-semi-bold text-foreground mb-4">
                                Escolha o profissional <span className="text-muted-foreground font-normal">(opcional)</span>
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {profissional.map((prof) => (
                                    <button
                                        key={prof.id}
                                        onClick={() => setSelectedProfissional(prof.id)}
                                        className={`p-4 rounded-xl border-2 flex items-center gap-4 text-left transition-all ${
                                            selectedProfissional === prof.id
                                            ? "border-primary bg-primary/5"
                                            : "border-border hover:border-primary/30"
                                        }`}
                                    >
                                        <div className="text-3xl">{prof.avatar}</div>
                                        <div>
                                            <p className="font-medium text-foreground">{prof.name}</p>
                                            <p className="text-sm text-muted-foreground">{prof.especialidade}</p>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 2: Data e Horário */}
                    {step === 2 && (
                        <div className="animate-fade-up">
                            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Escolha data e horário</h1>
                            <p className="text-muted-foreground mb-8">Selecione o melhor momento para sua consulta</p>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                                        <CalendarIcon className="w-5 h-5 text-primary"/>
                                        Data
                                    </h3>
                                    <div className="bg-card rounded-2xl p-4 border border-border">
                                        <Calendar
                                            mode="single"
                                            selected={selectedDate}
                                            onSelect={setSelectedDate}
                                            disabled={(date) =>
                                                isBefore(date, startOfToday()) ||
                                                date.getDay() === 0 ||
                                                isBefore(addDays(new Date(), 60), date)
                                            }
                                            locale={ptBR}
                                            className="w-full"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-primary"/>
                                        Horário
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {timeSlots.map((time) => (
                                            <button
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                disabled={!selectedDate}
                                                className={`p-4 rounded-xl border-2 font-medium transition-all ${
                                                    selectedTime === time
                                                    ? "border-primary bg-primary text-primary-foreground"
                                                    : "border-border hover:border-primary/30 text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                                                }`}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {selectedDate && selectedTime && (
                                <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                                    <p className="text-foreground">
                                        <strong>Selecionado:</strong> {format(selectedDate, "dd 'de' MMMM 'de' yyyy", {locale:ptBR})} às {selectedTime}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Step 3: Personal Data */}
                    {step === 3 && (
                        <div className="animate-fade-up">
                            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                                Seu dados
                            </h1>
                            <p className="text-muted-foreground mb-8">
                                Preencha suas informações para confirmar o agendamento.
                            </p>

                            <div className="max-w-md space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nome completo</Label>
                                    <Input 
                                        id="name"
                                        placeholder="Digite seu nome"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="h-12"    
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">E-mail</Label>
                                    <Input 
                                        id="email"
                                        type="email"
                                        placeholder="seu@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="h-12"    
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">Telefone</Label>
                                    <Input 
                                        id="phone"
                                        type="tel"
                                        placeholder="(11) 99999-9999"
                                        value={formData.phone}
                                        maxLength={15}
                                        onChange={(e) => {
                                            const formattedValue = formatPhone(e.target.value);
                                            setFormData({ ...formData, phone: formattedValue });
                                        }}
                                        className="h-12"    
                                    />
                                </div>
                            </div>

                            {/* Sumary */}
                            <div className="mt-8 p-6 bg-card rounded-2xl border border-border">
                                <h3 className="font-semibold text-foreground mb-4">Resumo do agendamento</h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Serviço</span>
                                        <span className="font-medium text-foreground">{selectedServiceData?.title}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Data:</span>
                                        <span className="font-medium text-foreground">
                                            {selectedDate && format (selectedDate, "dd/MM/yyyy")}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Horário:</span>
                                        <span className="font-medium text-foreground">{selectedTime}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Duração:</span>
                                        <span className="font-medium text-foreground">{selectedServiceData?.duration}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Confirmation */}
                    {step === 4 && (
                        <div className="animate-scale-in text-center py-12">
                            <div className="w-20 h-20 mx-auto gradient-hero rounded-full flex items-center justify-center mb-6">
                                <Check className="w-10 h-10 text-primary-foreground"/>
                            </div>
                            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Consulta agendada com sucesso!</h1>
                            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                                Enviamos um e-mail de confirmação para <strong>{formData.email}</strong>.
                                Em caso de dúvidas, entre em contato conosco.
                            </p>

                            <div className="bg-card p-6 rounded-2xl border border-border max-w-md mx-auto mb-8">
                                <div className="space-y-4 text-left">
                                    <div className="flex items-start gap-3">
                                        <div className="text-2xl">{selectedServiceData?.icon}</div>
                                        <div>
                                            <p className="font-semibold text-foreground">{selectedServiceData?.title}</p>
                                            <p className="text-sm text-muted-foreground">{selectedServiceData?.duration}</p>
                                        </div>
                                    </div>
                                    <div className="h-px bg-border"/>
                                    <div className="flex items-center gap-3">
                                        <CalendarIcon className="w-5 h-5 text-primary" />
                                        <span className="text-foreground">
                                            {selectedDate && format(selectedDate, "dd 'de' MMMM 'de' yyyy", { locale: ptBR})}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-primary" />
                                        <span className="text-foreground">{selectedTime}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <User className="w-5 h-5 text-primary"/>
                                        <span className="text-foreground">{formData.name}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/">
                                    <Button variant="outline" size="lg">Volta ao início</Button>
                                </Link>
                                <a 
                                    href={`https://wa.me/5563984522091?text=${encodeURIComponent(
                                        `Olá! Me chamo ${formData.name}.\n\n` +
                                        `Gostaria de confirmar meu agendamento realizado pelo site:\n` +
                                        `*Procedimento:* ${selectedServiceData?.title}\n` +
                                        `*Data:* ${selectedDate && format(selectedDate, "dd/MM/yyyy")}\n` +
                                        `*Horário:* ${selectedTime}\n\n` +
                                        `Fico no aguardo da confirmação final. Obrigado(a)!`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button variant="hero" size="lg">💬 Confirmar pelo WhatsApp</Button>
                                </a>
                            </div>
                        </div>
                    )}

                    {/* Navigation Buttons */}
                    {step < 4 && (
                        <div className="flex justify-between mt-12 pt-6 border-t border-border">
                            <Button
                                variant="ghost"
                                onClick={handleBack}
                                disabled={step === 1}
                                className="gap-2"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Voltar
                            </Button>

                            {step < 3 ? (
                                <Button
                                    variant="hero"
                                    onClick={handleNext}
                                    disabled={!canProceed()}
                                    className="gap-2"
                                >
                                    Continuar
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            ) : (
                                <Button
                                    variant="hero"
                                    onClick={handleSubmit}
                                    disabled={!canProceed() || isSubmitting}
                                    className="gap-2"
                                >
                                    {isSubmitting ? "Agendando..." : "Confirmar Agendamento"}
                                    <Check className="w-4 h-4"/>
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </main>

            <Footer/>
        </div>
    )
}

export default Agendamento;