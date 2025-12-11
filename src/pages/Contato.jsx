import { useState } from "react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const contactSchema = z.object({
    name: z.string().trim().min(1, { message: "Nome é obrigatório" }).max(100, { message: "Nome muito longo" }),
    email: z.string().trim().email({ message: "E-mail inválido" }).max(255, { message: "Nome muito longo" }),
    message: z.string().trim().min(1, { message: "Nome é obrigatório" }).max(1000, { message: "Nome muito longo" }),
})

function Contato() {
    const [ isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async () => {
        setIsSubmitting(true);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        toast.success("Mensagem enviada!", {
            description: "Entraremos em contato em breve.",
        });

        reset();
        setIsSubmitting(false);
    };

    return (
        <div className="flex min-h-screen flex-col">
            <Header/>
            
            <main className="flex-1 bg-background text-foreground py-12 md:py-16">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Entre em Contato</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Estamos prontos para atender você. Envie sua mensagem ou utilize nossos canais de contato.</p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                        {/* Formulário */}
                        <div className="rounded-lg border border-faint bg-card p-6 md:p-8 shadow-sm">
                            <h2 className="mb-6 text-2xl font-semibold">Envie sua Mensagem</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                {/* Nome */}
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nome completo</Label>
                                    <Input
                                        id="name"
                                        placeholder="Seu nome"
                                        // className="bg-background border-border"
                                        {...register("name")}
                                        className={cn(
                                            "bg-background border-border",           // classes fixas
                                            errors.message && "border-destructive"   // classe condicional
                                        )}
                                    />
                                    {errors.name && (
                                        <p className="text-sm text-destructive">{errors.name.message}</p>
                                    )}
                                </div>
                                
                                {/* Email */}
                                <div className="space-y-2">
                                    <Label htmlFor="email">E-mail</Label>
                                    <Input
                                        id="email"
                                        placeholder="seu@email.com"
                                        // className="bg-background border-border"
                                        {...register("email")}
                                        className={cn(
                                            "bg-background border-border",           // classes fixas
                                            errors.message && "border-destructive"   // classe condicional
                                        )}
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-destructive">{errors.email.message}</p>
                                    )}
                                </div>

                                {/* Mensagem */}
                                <div className="space-y-2">
                                    <Label htmlFor="message">Mensagem</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Como podemos ajudar?"
                                        rows={8}
                                        // className="bg-background border-border"
                                        {...register("message")}
                                        className={cn(
                                            "bg-background border-border h-32 resize-y", // classes adicionais
                                            errors.message && "border-destructive"
                                        )}
                                    />
                                    {errors.message && (
                                        <p className="text-sm text-destructive">{errors.message.message}</p>
                                    )}
                                </div>

                                <Button type="submit" className="w-full bg-primary:hover" disabled={isSubmitting}>
                                    {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                                </Button>
                            </form>
                        </div>

                        {/* Informações Adicionais */}
                        <div className="space-y-6">
                            {/* Informações de contato */}
                            <div className="rounded-lg border-faint bg-card p-6 shadow-sm">
                                <h2 className="mb-6 text-2xl font-semibold">Informações de Contato</h2>
                                <div className="space-y-4">
                                    {/* Telefone */}
                                    <div className="flex gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                                            <Phone className="h-6 w-6 text-primary"/>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Telefone</h3>
                                            <p className="text-sm text-muted-foreground">(11) 3456-7890</p>
                                            <p className="text-sm text-muted-foreground">(11) 987654321</p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                                            <Mail className="h-6 w-6 text-primary"/>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">E-mail</h3>
                                            <p className="text-sm text-muted-foreground">contato@sorrisoperfeito.com.br</p>
                                        </div>
                                    </div>

                                    {/* Endereço */}
                                    <div className="flex gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                                            <MapPin className="h-6 w-6 text-primary"/>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">Endereço</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Av. Paulista, 1000 - Conjunto 45<br/>
                                                Bela Vista, São Paulo - SP<br/>
                                                CEP: 01310-100
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Horário */}
                            <div className="rounded-lg border-faint bg-card p-6 shadow-sm">
                                <h3 className="mb-4 font-semibold">Horário de Atendimento</h3>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Segunda a Sexta:</span>
                                        <span className="font-medium">8h às 18h</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Sábado:</span>
                                        <span className="font-medium">8h às 12h</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Domingo:</span>
                                        <span className="font-medium">Fechado</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
            
        </div>
    );
}

export default Contato;