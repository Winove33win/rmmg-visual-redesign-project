import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, CheckCircle, ClipboardCheck } from "lucide-react";

const PlanoAderencia = () => {
  const etapas = [
    {
      titulo: "Análise Documental",
      descricao: "Revisão completa da documentação existente da empresa, incluindo procedimentos, instruções de trabalho, políticas e registros."
    },
    {
      titulo: "Auditoria de Diagnóstico",
      descricao: "Avaliação in loco dos processos implementados, verificando a aderência prática aos requisitos normativos."
    },
    {
      titulo: "Identificação de Gaps",
      descricao: "Mapeamento das não conformidades e oportunidades de melhoria em relação aos requisitos da norma aplicável."
    },
    {
      titulo: "Plano de Ação",
      descricao: "Elaboração de cronograma detalhado com as ações necessárias, responsáveis e prazos para adequação aos requisitos."
    }
  ];

  const beneficios = [
    "Visão clara da situação atual da empresa em relação aos requisitos normativos",
    "Identificação precisa dos investimentos necessários em tempo e recursos",
    "Priorização das ações de acordo com criticidade e impacto",
    "Redução de custos através do planejamento adequado",
    "Maior assertividade no processo de implementação",
    "Base sólida para tomada de decisões estratégicas"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              PLANO DE ADERÊNCIA AOS REQUISITOS NORMATIVOS
            </h1>
            <p className="text-xl text-destructive font-semibold">
              Diagnóstico e Planejamento Estratégico
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
                Empresas e laboratórios que desejam conhecer sua situação atual em relação aos requisitos de normas específicas (ISO 9001, ISO/IEC 17025, ISO 14001, etc.) e necessitam de um planejamento estruturado para implementação ou adequação do sistema de gestão.
              </p>
            </div>
          </section>

          {/* O que é o Plano de Aderência */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <Target className="mr-2 h-6 w-6" />
                O QUE É O PLANO DE ADERÊNCIA?
              </h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground mb-4">
                  O Plano de Aderência é um documento estratégico que apresenta o diagnóstico completo da situação atual da organização em relação aos requisitos de uma norma específica. Este documento identifica os pontos já implementados, as não conformidades existentes e estabelece um plano de ação detalhado para adequação total aos requisitos normativos.
                </p>
                <p className="text-foreground">
                  É uma ferramenta essencial para organizações que buscam implementar um sistema de gestão ou adequar o sistema existente, proporcionando uma visão clara do caminho a ser percorrido e dos recursos necessários.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Metodologia */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold">METODOLOGIA DE TRABALHO</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {etapas.map((etapa, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-destructive flex items-center">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">
                        {index + 1}
                      </div>
                      {etapa.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">{etapa.descricao}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Conteúdo do Plano */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <ClipboardCheck className="mr-2 h-6 w-6" />
                CONTEÚDO DO PLANO DE ADERÊNCIA
              </h2>
            </div>
            
            <div className="space-y-4">
              {[
                "Resumo executivo com panorama geral da situação",
                "Análise detalhada de cada requisito da norma aplicável",
                "Identificação de não conformidades e oportunidades de melhoria",
                "Avaliação da documentação existente e necessidades de criação/revisão",
                "Cronograma de implementação com etapas, prazos e responsabilidades",
                "Estimativa de recursos necessários (humanos, financeiros e técnicos)",
                "Recomendações de treinamentos e capacitações necessárias",
                "Sugestões de indicadores para monitoramento do progresso",
                "Plano de auditoria interna para verificação da implementação"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefícios */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold">
                BENEFÍCIOS DO PLANO DE ADERÊNCIA
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

export default PlanoAderencia;