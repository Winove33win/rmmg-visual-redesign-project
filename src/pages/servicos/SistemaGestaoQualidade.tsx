import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, CheckCircle } from "lucide-react";

const SistemaGestaoQualidade = () => {
  const beneficios = [
    "Melhoria da eficiência operacional e redução de custos",
    "Aumento da satisfação do cliente através de produtos e serviços consistentes",
    "Facilita a entrada em novos mercados e parcerias comerciais", 
    "Melhoria contínua dos processos organizacionais",
    "Maior credibilidade e confiança no mercado",
    "Conformidade com requisitos legais e regulamentares"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              SISTEMA DE GESTÃO DA QUALIDADE
            </h1>
            <p className="text-xl text-destructive font-semibold">
              ABNT NBR ISO 9001
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
                Empresas de todos os portes e setores que desejam implementar, melhorar ou manter um Sistema de Gestão da Qualidade de acordo com a norma ABNT NBR ISO 9001, visando a melhoria contínua de seus processos e o aumento da satisfação do cliente.
              </p>
            </div>
          </section>

          {/* Serviços Oferecidos */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold">SERVIÇOS OFERECIDOS</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Diagnóstico e Planejamento */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive text-center">
                    Diagnóstico e Planejamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground">
                    Realizamos uma análise completa da situação atual da empresa, identificando gaps em relação aos requisitos da norma ISO 9001. Com base neste diagnóstico, desenvolvemos um plano de implementação customizado, estabelecendo prazos, recursos necessários e responsabilidades para cada etapa do projeto.
                  </p>
                </CardContent>
              </Card>

              {/* Implementação do SGQ */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive text-center">
                    Implementação do SGQ
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground">
                    Apoiamos na implementação de todos os requisitos da norma ISO 9001, incluindo o desenvolvimento de procedimentos, instruções de trabalho, política da qualidade, objetivos da qualidade, controle de documentos, gestão de riscos e oportunidades, e todos os demais elementos necessários para um sistema eficaz.
                  </p>
                </CardContent>
              </Card>

              {/* Treinamento e Capacitação */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive text-center">
                    Treinamento e Capacitação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground">
                    Oferecemos treinamentos personalizados para todos os níveis da organização, desde a alta direção até os operadores, garantindo o entendimento dos conceitos de qualidade, dos requisitos da norma e das responsabilidades de cada colaborador no Sistema de Gestão da Qualidade.
                  </p>
                </CardContent>
              </Card>

              {/* Auditoria Interna */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive text-center">
                    Auditoria Interna
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground">
                    Realizamos auditorias internas do sistema de gestão da qualidade, verificando a conformidade com os requisitos da norma e a eficácia do sistema implementado. Fornecemos relatórios detalhados com não conformidades identificadas e recomendações para melhoria contínua.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Manutenção e Melhoria Contínua */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-destructive text-center">
                  Manutenção e Melhoria Contínua
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground mb-4">
                  Apoiamos as empresas na manutenção e melhoria contínua do Sistema de Gestão da Qualidade, incluindo:
                </p>
                
                <div className="space-y-2">
                  {[
                    "Revisão e atualização de documentos do sistema",
                    "Análise crítica pela direção",
                    "Gestão de não conformidades e ações corretivas",
                    "Monitoramento de indicadores de desempenho",
                    "Identificação e implementação de oportunidades de melhoria",
                    "Preparação para auditorias de certificação e manutenção"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Benefícios */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold">
                BENEFÍCIOS DO SISTEMA DE GESTÃO DA QUALIDADE ISO 9001
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

export default SistemaGestaoQualidade;