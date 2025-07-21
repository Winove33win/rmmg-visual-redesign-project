import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-rmmg.jpg";

const HeroSection = () => {
  const highlights = [
    "Certificada ISO 9001",
    "Acreditada ISO/IEC 17043",
    "Referência em Metrologia",
    "Atendimento Nacional"
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-black/20" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-white">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Excelência em{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  Metrologia
                </span>
              </h1>
              <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
                A RMMG é referência em serviços de metrologia e qualidade, 
                oferecendo soluções técnicas especializadas para empresas em todo o Brasil.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-sm lg:text-base">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-rmmg-red hover:bg-gray-100 shadow-elegant">
                Nossos Serviços
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-rmmg-red"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6 text-center text-white">
                <div className="text-3xl lg:text-4xl font-bold mb-2">25+</div>
                <div className="text-sm lg:text-base opacity-80">Anos de Experiência</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6 text-center text-white">
                <div className="text-3xl lg:text-4xl font-bold mb-2">1000+</div>
                <div className="text-sm lg:text-base opacity-80">Clientes Atendidos</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6 text-center text-white">
                <div className="text-3xl lg:text-4xl font-bold mb-2">50+</div>
                <div className="text-sm lg:text-base opacity-80">Tipos de Ensaios</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-white/20">
              <CardContent className="p-6 text-center text-white">
                <div className="text-3xl lg:text-4xl font-bold mb-2">100%</div>
                <div className="text-sm lg:text-base opacity-80">Qualidade Assegurada</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;