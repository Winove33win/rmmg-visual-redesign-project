import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Target, Users } from "lucide-react";

const GestaoQualidadeLaboratorios = () => {
  const beneficios = [
    "Aumento do mercado de atuação, por meio de uma decisão estratégica, e prestação de serviços para setores exigidos por diversos órgãos fiscalizadores;",
    "Garantia de rastreabilidade dos ensaios e confiabilidade nos resultados emitidos pelo laboratório;",
    "Sistematização dos processos realizados, minimizando desvios de metodologias oficiais;",
    "Confidencialidade das informações, garantindo a imparcialidade das pessoas envolvidas na prestação de serviços;",
    "Implementação da cultura da qualidade, com capacitação dos colaboradores e conscientização dos mesmos na entrega de resultados."
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              GESTÃO DA QUALIDADE PARA LABORATÓRIOS
            </h1>
            <p className="text-xl text-destructive font-semibold">
              ABNT NBR ISO/IEC 17025
            </p>
          </div>

          {/* Público Alvo */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <Users className="mr-2 h-6 w-6" />
                PÚBLICO ALVO
              </h2>
            </div>
            <div className="bg-secondary p-6 rounded-lg">
              <p className="text-foreground">
                Laboratórios de Ensaio e/ou Calibração que buscam implementar, melhorar ou manter o sistema de gestão da qualidade de acordo com a norma ABNT NBR ISO/IEC 17025.
              </p>
            </div>
          </section>

          {/* Serviços Oferecidos */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold">SERVIÇOS OFERECIDOS</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Realização de Plano de Aderência */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive text-center">
                    Realização de Plano de Aderência
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground mb-4">
                    O Plano de Aderência visa analisar os requisitos já implementados na empresa e pontuar pontos necessários para adequação aos requisitos da norma de qualidade. Este plano de aderência é utilizado para o dimensionamento das próximas etapas do processo de implementação da norma ABNT NBR ISO/IEC 17025:2017.
                  </p>
                  <p className="text-sm text-foreground">
                    Para mais informações, acesse a página específica de Plano de Aderência.
                  </p>
                </CardContent>
              </Card>

              {/* Implementação dos Requisitos Normativos */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive text-center">
                    Implementação dos Requisitos Normativos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground">
                    Neste serviço oferecemos a implementação de requisitos normativos que ainda não foram implementados pelo laboratório, com base nas normas da qualidade de acordo com a norma ABNT NBR ISO/IEC 17025:2017. 
                    Podemos implementar todos os requisitos (gestão e técnicos) ou requisitos específicos, para o qual o laboratório tenha mais dificuldades de interpretação e aplicação. Esta necessidade pode ser levantada pelo próprio cliente ou no Plano de Aderência realizado anteriormente.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Manutenção do Sistema */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-destructive text-center">
                  Manutenção do Sistema de Gestão da Qualidade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground mb-4">
                  Focado para laboratórios que já possuem o sistema de gestão da qualidade de acordo com a ABNT NBR ISO/IEC 17025, este serviço tem como objetivo auxiliar na melhoria contínua desse sistema.
                </p>
                
                <div className="space-y-3">
                  <p className="text-sm text-foreground">Algumas atividades de manutenção do sistema de gestão:</p>
                  <div className="space-y-2">
                    {[
                      "Apoiar a empresa na melhoria contínua de algum requisito pontual que precise ser alterado visando o maior entendimento dos envolvidos e/ou otimização do processo;",
                      "Auxiliar no tratamento de não conformidades e oportunidades de melhoria oriundas de auditorias internas e/ou externas;",
                      "Implementar requisitos técnicos para aumento do escopo de acreditação do laboratório;",
                      "Auxiliar no atendimento de documentos emitidos pela CGCRE e de outros organismos regulamentadores;",
                      "Atualização de procedimentos e demais documentos após alteração de normas específicas de ensaio e/ou calibração, bem como outras normas aplicáveis na realização das atividades do laboratório."
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Benefícios */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold">
                BENEFÍCIOS DO SISTEMA DE GESTÃO DA QUALIDADE DE ACORDO COM A ABNT NBR ISO/IEC 17025
              </h2>
            </div>
            
            <div className="space-y-4">
              {beneficios.map((beneficio, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-foreground">{beneficio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-destructive text-white p-8 text-center rounded-lg">
            <h3 className="text-xl font-bold mb-4">
              PARA MAIS INFORMAÇÕES ENTRE EM CONTATO!
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="font-semibold">Isabella Matos de Oliveira</p>
                <p>isabella@rmmg.org.br</p>
                <p>(31) 2512-4800 - Ramal 910</p>
              </div>
              <div>
                <p className="font-semibold">Suzely Martins Castro Gomes</p>
                <p>rmmg@rmmg.org.br</p>
                <p>(31) 2512-4800 - Ramal 910</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GestaoQualidadeLaboratorios;