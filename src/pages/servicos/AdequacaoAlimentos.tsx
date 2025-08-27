import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ShieldCheck, CheckCircle, Utensils } from "lucide-react";

const AdequacaoAlimentos = () => {
  const normas = [
    "ABNT NBR ISO 22000 - Sistema de Gestão de Segurança de Alimentos",
    "APPCC/HACCP - Análise de Perigos e Pontos Críticos de Controle",
    "BPF - Boas Práticas de Fabricação", 
    "ABNT NBR ISO/TS 22002-1 - Programas de Pré-requisitos",
    "Codex Alimentarius",
    "Regulamentações da ANVISA e MAPA"
  ];

  const beneficios = [
    "Garantia da segurança alimentar e proteção da saúde do consumidor",
    "Conformidade com regulamentações sanitárias brasileiras e internacionais",
    "Redução de riscos de contaminação e recall de produtos",
    "Melhoria da imagem da marca e confiança do consumidor",
    "Facilita a exportação e entrada em novos mercados",
    "Redução de custos com desperdícios e retrabalho",
    "Proteção legal contra processos relacionados à segurança alimentar"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              ADEQUAÇÃO E MELHORIA DE PROCESSOS PARA ÁREA DE ALIMENTOS
            </h1>
            <p className="text-xl text-destructive font-semibold">
              Segurança Alimentar e Conformidade Regulatória
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
                Indústrias alimentícias, restaurantes, estabelecimentos de food service, distribuidores de alimentos, produtores rurais, cooperativas, laboratórios de análises de alimentos e demais empresas da cadeia produtiva de alimentos que necessitam implementar ou melhorar sistemas de gestão de segurança alimentar.
              </p>
            </div>
          </section>

          {/* Serviços Oferecidos */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold">SERVIÇOS OFERECIDOS</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* APPCC/HACCP */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive text-center">
                    Sistema APPCC/HACCP
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground mb-4">
                    Implementação completa do sistema de Análise de Perigos e Pontos Críticos de Controle:
                  </p>
                  <div className="space-y-2">
                    {[
                      "Análise de perigos físicos, químicos e biológicos",
                      "Identificação de Pontos Críticos de Controle (PCC)",
                      "Estabelecimento de limites críticos e monitoramento",
                      "Definição de ações corretivas",
                      "Sistemas de verificação e documentação"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* BPF */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive text-center">
                    Boas Práticas de Fabricação (BPF)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground mb-4">
                    Implementação de programas de pré-requisitos essenciais:
                  </p>
                  <div className="space-y-2">
                    {[
                      "Higiene pessoal e treinamento de manipuladores",
                      "Limpeza e sanitização de equipamentos e ambiente",
                      "Controle de pragas e vetores",
                      "Qualidade da água e controle de resíduos",
                      "Manutenção preventiva e calibração de equipamentos"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* ISO 22000 */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive text-center">
                    ISO 22000 - Sistema de Gestão de Segurança de Alimentos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground mb-4">
                    Implementação do sistema integrado de gestão de segurança alimentar:
                  </p>
                  <div className="space-y-2">
                    {[
                      "Política de segurança alimentar",
                      "Gestão de recursos e competências",
                      "Planejamento e realização de produtos seguros",
                      "Validação, verificação e melhoria do sistema",
                      "Comunicação interna e externa"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Adequação Regulatória */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive text-center">
                    Adequação Regulatória
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground mb-4">
                    Conformidade com regulamentações sanitárias nacionais e internacionais:
                  </p>
                  <div className="space-y-2">
                    {[
                      "Adequação às RDCs da ANVISA",
                      "Conformidade com normas do MAPA",
                      "Atendimento a regulamentações municipais",
                      "Preparação para inspeções sanitárias",
                      "Documentação para exportação"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Normas e Regulamentações */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <ShieldCheck className="mr-2 h-6 w-6" />
                NORMAS E REGULAMENTAÇÕES APLICÁVEIS
              </h2>
            </div>
            
            <div className="space-y-3">
              {normas.map((norma, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Utensils className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{norma}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefícios */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold">
                BENEFÍCIOS DA ADEQUAÇÃO DE PROCESSOS ALIMENTARES
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

export default AdequacaoAlimentos;