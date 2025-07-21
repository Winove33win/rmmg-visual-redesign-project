import { Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <Card className="bg-white/95 backdrop-blur border-0 shadow-elegant">
          <CardContent className="p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Pronto para Elevar a Qualidade do seu Negócio?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Entre em contato conosco e descubra como nossas soluções em metrologia 
                  podem transformar seus processos e resultados.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Atendimento Rápido</p>
                      <p className="text-sm text-muted-foreground">(31) 2512-4800</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Orçamento Online</p>
                      <p className="text-sm text-muted-foreground">Resposta em 24h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Falar com Especialista
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Consultoria gratuita • Atendimento personalizado • Suporte técnico especializado
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;