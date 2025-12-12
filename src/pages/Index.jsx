import Header from "../components/Header.jsx";
import ServiceCard from "@/components/ServiceCard.jsx";
import { Button } from "@/components/ui/button.jsx";
import { NavLink } from "react-router-dom";
import heroImage from "../assets/hero-dental.png";
import dentistImage from "../assets/dentist-profile.png"
import cleaningImage from "../assets/service-cleaning.png"
import orthodonticsImage from "../assets/service-orthodontics.png"
import whiteningImage from "../assets/service-whitening.png"
import { Sparkles, Shield, Clock, Award } from "lucide-react";
import Footer from "@/components/Footer.jsx";

const Index = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <Header/>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative h-screen overflow-hidden flex items-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 opacity-90 z-10"/>
                    <img 
                        src={"https://i.imgur.com/iCJwwbx.png"} 
                        alt="Consultório odontológico" 
                        className="absolute inset-0 h-full w-full object-cover z-0" 
                    />
                    <div className="relative z-20 container px-25 mx-auto py-24 md:py-32">
                        <div className="max-w-2xl text-primary-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.45)]">
                            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl text-primary-foreground">
                                Seu Sorriso Merece o Melhor Cuidado.
                            </h1>
                            <p className="mb-8 text-lg md:text-xl text-primary-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.45)]">
                                Tratamentos odontológicos modernos e personalizados para toda a família. Experiência, tecnologia e carinho em cada atendimento.
                            </p>
                            <NavLink to="/contato">
                                <Button size="lg" variant="secondary" className="shadow-xl hover:shadow-2xl">
                                    Agende sua Consulta
                                </Button>
                            </NavLink>
                        </div>
                    </div>
                </section>

                {/* Beneficts Section */}
                <section className="border-border bg-background py-16">
                    <div className="container">
                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 rounded-full bg-secondary/10 p-4">
                                    <Sparkles className="h-8 w-8 text-secondary"/>
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">Tecnologia Avançada</h3>
                                <p className="text-sm text-muted-foreground">
                                    Equipamentos modernos para diagnósticos precisos e tratamentos confortáveis.
                                </p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 rounded-full bg-secondary/10 p-4">
                                    <Shield className="h-8 w-8 text-secondary"/>
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">Profissionais Qualificados</h3>
                                <p className="text-sm text-muted-foreground">
                                    Equipe experiente e dedicada ao seu bem-estar.
                                </p>
                            </div>
                            
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 rounded-full bg-accent/10 p-4">
                                    <Clock className="h-8 w-8 text-accent"/>
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">Horários Flexíveis</h3>
                                <p className="text-sm text-muted-foreground">
                                    Atendimento de segunda a sábado para sua comodidade.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dentist Section */}
                <section className="py-16 md:py-24 bg-muted">
                    <div className="container px-20 md:px-20">
                        <div className="grid gap-12 md:grid-cols-2 items-center">
                            <div className="relative">
                                <img 
                                    src={"https://i.imgur.com/4nprgXg.png"} 
                                    alt="Dr. Ricardo Silva - Dentista responsável" 
                                    className="rounded-lg shadow-lg w-full h-auto"
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <Award className="h-6 w-6 text-primary"/>
                                    <span className="text-sm font-semibold text-primary uppercase">Dentista Responsável</span>
                                </div>
                                <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Dr. Ricardo Silva</h2>
                                <p className="text-lg text-muted-foreground mb-6">CRO-SP 12345</p>
                                <div className="space-y-4 text-foreground">
                                    <p>
                                        Com mais de 15 anos de experiência em odontologia, o Dr. Ricardo é especialista em implantodontia e estética dental, formado pela USP com pós graduação em harmonizaão orofacial.
                                    </p>
                                    <p>
                                        Sua missão é proporcionar sorrisos saudáveis e bonitos através de tratamentos modernos, sempre priorizando o conforto e bem estar dos pacientes.
                                    </p>
                                    <div className="pt-4 border-t border-border">
                                        <h4 className="font-semibold mb-2">Especializações:</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">&#8226;</span>
                                                <span>Implantodontia</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">&#8226;</span>
                                                <span>Estética Dental</span>
                                            </li><li className="flex items-start gap-2">
                                                <span className="text-primary mt-1">&#8226;</span>
                                                <span>Harmonização Orofacial</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-16 md:py-24 bg-background">
                    <div className="container px-20 md:px-20">
                        <div className="mb-12 text-center">
                            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Nossos Serviços</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Oferecemos uma ampla gama de tratamentos odontológicos com excelência e cuidado personalizado.</p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-3">
                            <ServiceCard 
                                title="Limpeza e Prevenção"
                                description="Profilaxia profissional, aplicação de flúor e orientação para manter sua saúde bucal em dia."
                                image={"https://i.imgur.com/uDDar2k.png"}
                            />

                            <ServiceCard 
                                title="Ortodontia"
                                description="Aparelhos fixos e móveis para correção e alinhamento dental, com acompanhamento expecializado."
                                image={"https://i.imgur.com/jTApsDn.png"}
                            />

                            <ServiceCard 
                                title="Clareamento Dental"
                                description="Técnicas modernas para deixar seu sorriso mais branco e radiante de forma segura."
                                image={"https://i.imgur.com/wZclXEZ.png"}
                            />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="border-t border-border bg-muted py-16">
                    <div className="container text-center">
                        <h2 className="mb-4 text-3xl font-bold">Pronto para transformar seu sorriso?</h2>
                        <p className="mb-8 text-lg text-muted-foreground max-w02xl mx-auto">Entre em contato conosco e agende uma avaliação. Estamos pronto para cuidar de você!</p>
                        <NavLink to="/contato">
                            <Button size="lg">
                                Entrar em Contato
                            </Button>
                        </NavLink>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}

export default Index;