import { CheckCircle, ArrowRight, Award, TrendingUp, Target } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Sebraetec = () => {
  const benefits = [
    "Redução de custos operacionais",
    "Melhoria da qualidade dos produtos",
    "Aumento da competitividade",
    "Conformidade com normas técnicas",
    "Otimização de processos",
    "Redução de desperdícios"
  ];

  const services = [
    {
      icon: Award,
      title: "Calibração de Instrumentos",
      description: "Calibração de instrumentos de medição com padrões rastreáveis",
      subsidy: "Até 70% de subsídio"
    },
    {
      icon: TrendingUp,
      title: "Implementação de SGQ",
      description: "Sistema de Gestão da Qualidade ISO 9001",
      subsidy: "Até 70% de subsídio"
    },
    {
      icon: Target,
      title: "Consultoria Especializada",
      description: "Assessoria técnica em metrologia e qualidade",
      subsidy: "Até 70% de subsídio"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Consulta Inicial",
      description: "Identifique as necessidades da sua empresa e escolha o serviço ideal"
    },
    {
      number: "02",
      title: "Proposta Técnica",
      description: "Receba uma proposta detalhada com valores e cronograma"
    },
    {
      number: "03",
      title: "Aprovação Sebrae",
      description: "Aguarde a aprovação do subsídio pelo Sebrae"
    },
    {
      number: "04",
      title: "Execução",
      description: "Implementação do serviço com acompanhamento técnico especializado"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="bg-white text-rmmg-red text-lg px-4 py-2">
                Programa Sebraetec
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold">
                Modernize sua Empresa com o Sebraetec
              </h1>
              <p className="text-xl lg:text-2xl opacity-90">
                Acesso a serviços tecnológicos especializados com subsídio de até 70% do Sebrae. 
                Aumente a competitividade da sua empresa com soluções em metrologia e qualidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-rmmg-red hover:bg-gray-100">
                  Solicitar Consultoria Gratuita
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-rmmg-red">
                  Baixar Catálogo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Por que Escolher o Sebraetec?
                </h2>
                <p className="text-xl text-muted-foreground">
                  O Programa Sebraetec oferece acesso facilitado a tecnologias e conhecimentos 
                  especializados, permitindo que sua empresa se torne mais competitiva no mercado.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-secondary rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Subsídio Disponível</h3>
                <div className="space-y-4">
                  <div className="bg-background rounded-lg p-4">
                    <div className="text-3xl font-bold text-primary mb-2">Até 70%</div>
                    <div className="text-muted-foreground">de subsídio em serviços tecnológicos</div>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <div className="text-3xl font-bold text-primary mb-2">R$ 40.000</div>
                    <div className="text-muted-foreground">valor máximo de subsídio por empresa/ano</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Serviços Disponíveis
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Conheça os principais serviços da RMMG disponíveis através do Programa Sebraetec
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-background hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <Badge variant="secondary" className="mx-auto">
                      {service.subsidy}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center mb-6">{service.description}</p>
                    <Button className="w-full">Saiba Mais</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Como Funciona
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Processo simples e transparente para acessar os benefícios do Sebraetec
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Pronto para Transformar sua Empresa?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como o Sebraetec pode impulsionar 
              o crescimento e a competitividade do seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-rmmg-red hover:bg-gray-100">
                Falar com Especialista
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-rmmg-red">
                (31) 2512-4800
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sebraetec;