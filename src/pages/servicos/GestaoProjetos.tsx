import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, CheckCircle, Workflow } from "lucide-react";

const GestaoProjetos = () => {
  const metodologias = [
    "PMI (Project Management Institute)",
    "SCRUM e metodologias ágeis",
    "Lean Six Sigma",
    "PDCA (Plan-Do-Check-Act)",
    "DMAIC (Define-Measure-Analyze-Improve-Control)",
    "Kaizen e melhoria contínua"
  ];

  const beneficios = [
    "Redução de custos operacionais através da otimização de processos",
    "Melhoria da eficiência e produtividade organizacional",
    "Maior controle e previsibilidade dos resultados de projetos",
    "Redução de retrabalho e desperdícios",
    "Aumento da satisfação de clientes internos e externos",
    "Maior competitividade no mercado através de processos otimizados"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              GESTÃO DE PROJETOS E MELHORIA DE PROCESSOS
            </h1>
            <p className="text-xl text-destructive font-semibold">
              Otimização e Excelência Operacional
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
                Empresas de todos os segmentos que buscam otimizar seus processos operacionais, implementar projetos de melhoria, aumentar a eficiência organizacional e desenvolver uma cultura de excelência operacional através de metodologias consolidadas de gestão de projetos e melhoria contínua.
              </p>
            </div>
          </section>

          {/* Serviços Oferecidos */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold">SERVIÇOS OFERECIDOS</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Gestão de Projetos */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive text-center">
                    Gestão de Projetos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground mb-4">
                    Implementação de metodologias estruturadas de gestão de projetos, incluindo:
                  </p>
                  <div className="space-y-2">
                    {[
                      "Definição de escopo, cronograma e orçamento",
                      "Gestão de riscos e stakeholders",
                      "Monitoramento e controle de progresso",
                      "Comunicação eficaz entre equipes",
                      "Ferramentas de acompanhamento e reporting"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Análise e Mapeamento */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive text-center">
                    Análise e Mapeamento de Processos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground mb-4">
                    Diagnóstico completo dos processos organizacionais:
                  </p>
                  <div className="space-y-2">
                    {[
                      "Mapeamento de processos atuais (AS-IS)",
                      "Identificação de gargalos e desperdícios",
                      "Análise de tempo e movimento",
                      "Identificação de oportunidades de melhoria",
                      "Desenho de processos futuros (TO-BE)"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Implementação de Melhorias */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive text-center">
                    Implementação de Melhorias
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground mb-4">
                    Execução de projetos de melhoria com foco em resultados:
                  </p>
                  <div className="space-y-2">
                    {[
                      "Redesenho de processos otimizados",
                      "Automação e digitalização",
                      "Eliminação de atividades desnecessárias",
                      "Padronização de procedimentos",
                      "Treinamento e capacitação de equipes"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Monitoramento */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive text-center">
                    Monitoramento e Controle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground mb-4">
                    Estabelecimento de sistemas de controle e melhoria contínua:
                  </p>
                  <div className="space-y-2">
                    {[
                      "Definição de KPIs e indicadores de desempenho",
                      "Implementação de dashboards de monitoramento",
                      "Análise crítica de resultados",
                      "Planos de ação corretiva e preventiva",
                      "Cultura de melhoria contínua"
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

          {/* Metodologias */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <Workflow className="mr-2 h-6 w-6" />
                METODOLOGIAS UTILIZADAS
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {metodologias.map((metodologia, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-foreground">{metodologia}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Benefícios */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold">
                BENEFÍCIOS DA GESTÃO DE PROJETOS E MELHORIA DE PROCESSOS
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

export default GestaoProjetos;