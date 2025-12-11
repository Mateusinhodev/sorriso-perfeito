import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="border-t border-border bg-muted">
            <div className="container px-20 py-12">
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-foreground">Contato</h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Phone className="h-4 w-4"/>
                                <span>(11) 3456-7890</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Mail className="h-4 w-4"/>
                                <span>contato@sorrisoperfeito.com.br</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <MapPin className="h-4 w-4"/>
                                <span>Av. Paulista, 100 - São Paulo, SP</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-foreground">Horário de Atendimento</h3>
                        <div className="space-y-2 text-sm text-muted-foreground">
                           <p>Segunda a Sexta: 8h às 18h</p>
                           <p>Sábado: 8h às 12h</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-lg font-semibold text-foreground">Sobre nós</h3>
                        <p className="text-sm text-muted-foreground">Clínica ododntológica com mais de 15 anos de experiência, oferecendo tratamentos modernos e personalizados.</p>
                    </div>
                </div>

                <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; 2025 Sorriso Perfeito. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;