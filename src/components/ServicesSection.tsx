import { Settings, Award, BookOpen, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: "Calibração de Instrumentos",
      description: "Serviços de calibração com padrões rastreáveis e certificados reconhecidos nacionalmente.",
      features: ["Instrumentos dimensionais", "Equipamentos elétricos", "Instrumentos térmicos"],
      link: "/servicos/calibracao"
    },
    {
      icon: Award,
      title: "Ensaios de Proficiência",
      description: "Programas de comparação interlaboratorial para validação de competência técnica.",
      features: ["PEP Ruído Ambiental", "Ensaios físico-químicos", "Validação de métodos"],
      link: "/servicos/ensaios"
    },
    {
      icon: BookOpen,
      title: "Treinamentos Técnicos",
      description: "Capacitação especializada em metrologia e qualidade para profissionais do setor.",
      features: ["Cursos presenciais", "Treinamentos EAD", "Certificações técnicas"],
      link: "/treinamentos"
    },
    {
      icon: Users,
      title: "Consultoria Especializada",
      description: "Assessoria técnica para implementação de sistemas de gestão da qualidade.",
      features: ["ISO 9001", "ISO 17025", "Auditorias técnicas"],
      link: "/servicos/consultoria"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em metrologia e qualidade, 
            com expertise técnica e reconhecimento nacional e internacional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  asChild
                >
                  <a href={service.link} className="flex items-center justify-center">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-elegant">
            Ver Todos os Serviços
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;