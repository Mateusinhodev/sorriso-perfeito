import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { Check } from "lucide-react";

const services = [
    {id: "limpeza", icon: "🦷", title: "Limpeza e Profilaxia", duration: "45min", price: "R$150"},
    {id: "avaliação", icon: "🔍", title: "Avaliação Completa", duration: "30min", price: "R$100"},
    {id: "clareamento", icon: "✨", title: "Clareamento Dental", duration: "60min", price: "R$500"},
    {id: "ortodontia", icon: "😬", title: "Ortodontia", duration: "45min", price: "Consultar"},
    {id: "implante", icon: "🔧", title: "Limpeza e Profilaxia", duration: "90min", price: "Consultar"},
    {id: "estetica", icon: "💎", title: "Estética Dental", duration: "60min", price: "Consultar"},
];

const profissional = {
    id: "1",
    name: "Dr. Ricardo Silva",
    especialidade: "Implantodontia e Estética dental",
    avatar: "👨‍⚕️"
}

const timeSlots = [
    "08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00"
];

const Agendamento = () => {
    const [searchParams] = useSearchParams();
    const initialService = searchParams.get("servico") || "";

    const [step, setStep] = useState(1);
    const [selectedService, setSelectedService] = useState(initialService);
    const [selectedProfissional, setSelectedProfissional] = useState("");
    const [selectedDate, setSelectedDate] = useState(undefined);
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

        toast({
            title: "Consulta agendada!",
            description: "Você receberá uma confirmação por e-mail.",
        })
    }

    const selectedServiceData = services.find(s => s.id === selectedService);

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
                        </div>
                    )}
                </div>
            </main>

            <Footer/>
        </div>
    )
}

export default Agendamento;