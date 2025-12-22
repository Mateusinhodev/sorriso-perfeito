import Header from "../components/Header.jsx";
import ServiceCard from "@/components/ServiceCard.jsx";
import { Button } from "@/components/ui/button.jsx";
import { NavLink } from "react-router-dom";
import { Sparkles, Shield, Clock, Award } from "lucide-react";
import Footer from "@/components/Footer.jsx";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 z-10" />
          <img
            src="https://i.imgur.com/iCJwwbx.png"
            alt="Consultório odontológico"
            className="absolute inset-0 h-full w-full object-cover z-0"
          />

          <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 py-24 md:py-32">
            <div className="max-w-2xl text-primary-foreground drop-shadow-[0_3px_6px_rgba(0,0,0,0.45)]">
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
                Seu Sorriso Merece o Melhor Cuidado.
              </h1>
              <p className="mb-8 text-lg md:text-xl">
                Tratamentos odontológicos modernos e personalizados para toda a
                família. Experiência, tecnologia e carinho em cada atendimento.
              </p>
              <NavLink to="/agendamento">
                <Button size="lg" variant="secondary" className="shadow-xl">
                  Agende sua Consulta
                </Button>
              </NavLink>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-background py-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-secondary/10 p-4">
                  <Sparkles className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  Tecnologia Avançada
                </h3>
                <p className="text-sm text-muted-foreground">
                  Equipamentos modernos para diagnósticos precisos e tratamentos
                  confortáveis.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-secondary/10 p-4">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  Profissionais Qualificados
                </h3>
                <p className="text-sm text-muted-foreground">
                  Equipe experiente e dedicada ao seu bem-estar.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-accent/10 p-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  Horários Flexíveis
                </h3>
                <p className="text-sm text-muted-foreground">
                  Atendimento de segunda a sábado para sua comodidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dentist Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="grid gap-12 lg:gap-20 md:grid-cols-2 items-center">
              <img
                src="https://i.imgur.com/4nprgXg.png"
                alt="Dr. Ricardo Silva"
                className="rounded-lg shadow-lg w-full h-auto"
              />

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="h-6 w-6 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase">
                    Dentista Responsável
                  </span>
                </div>

                <h2 className="mb-2 text-3xl font-bold md:text-4xl">
                  Dr. Ricardo Silva
                </h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  CRO-SP 12345
                </p>

                <div className="space-y-4">
                  <p>
                    Com mais de 15 anos de experiência em odontologia, especialista
                    em implantodontia e estética dental, formado pela USP.
                  </p>
                  <p>
                    Sua missão é proporcionar sorrisos saudáveis e bonitos,
                    priorizando conforto e bem-estar.
                  </p>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold mb-2">Especializações:</h4>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span> Implantodontia
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span> Estética Dental
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span> Harmonização
                        Orofacial
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-background py-16 md:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Nossos Serviços
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Oferecemos uma ampla gama de tratamentos odontológicos com
                excelência e cuidado personalizado.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-12">
              <ServiceCard
                title="Limpeza e Prevenção"
                description="Profilaxia profissional, aplicação de flúor e orientação para saúde bucal."
                image="https://i.imgur.com/uDDar2k.png"
              />
              <ServiceCard
                title="Ortodontia"
                description="Aparelhos fixos e móveis com acompanhamento especializado."
                image="https://i.imgur.com/jTApsDn.png"
              />
              <ServiceCard
                title="Clareamento Dental"
                description="Técnicas modernas para um sorriso mais branco e seguro."
                image="https://i.imgur.com/wZclXEZ.png"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border bg-muted py-16">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Pronto para transformar seu sorriso?
            </h2>
            <p className="mb-8 mx-auto max-w-2xl text-lg text-muted-foreground">
              Entre em contato conosco e agende uma avaliação.
            </p>
            <NavLink to="/contato">
              <Button size="lg">Entrar em Contato</Button>
            </NavLink>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
