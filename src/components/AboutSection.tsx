import { Shield, Target, Lightbulb, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const values = [
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Certificações e acreditações que garantem a qualidade dos nossos serviços."
    },
    {
      icon: Target,
      title: "Precisão",
      description: "Resultados exatos e rastreáveis, seguindo os mais rigorosos padrões técnicos."
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Constante atualização tecnológica e metodológica para oferecer as melhores soluções."
    },
    {
      icon: Globe,
      title: "Alcance Nacional",
      description: "Atendimento em todo território brasileiro com a mesma qualidade e eficiência."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Sobre a RMMG
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  A Rede Metrológica de Minas Gerais (RMMG) é uma organização consolidada 
                  no mercado brasileiro, especializada em serviços de metrologia e qualidade.
                </p>
                <p>
                  Com mais de 25 anos de experiência, somos certificados pela ISO 9001 
                  e acreditados pela CGCRE para ISO/IEC 17043, garantindo a excelência 
                  e confiabilidade dos nossos serviços.
                </p>
                <p>
                  Nossa missão é contribuir para o desenvolvimento da qualidade e 
                  competitividade das empresas brasileiras através de soluções 
                  metrológicas inovadoras e confiáveis.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Nossa História
              </Button>
              <Button size="lg" variant="outline">
                Certificações
              </Button>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="bg-background hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;