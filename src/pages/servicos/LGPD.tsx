import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, CheckCircle, Lock, AlertTriangle } from "lucide-react";

const LGPD = () => {
  const principios = [
    "Finalidade - uso para propósitos legítimos e específicos",
    "Adequação - compatibilidade com as finalidades informadas",
    "Necessidade - limitação ao mínimo necessário",
    "Livre acesso - garantia de consulta facilitada aos titulares",
    "Qualidade dos dados - exatidão, clareza e atualização",
    "Transparência - informações claras sobre o tratamento",
    "Segurança - medidas técnicas e administrativas de proteção",
    "Prevenção - adoção de medidas para evitar danos",
    "Não discriminação - impossibilidade de tratamento discriminatório",
    "Responsabilização - demonstração de medidas eficazes de conformidade"
  ];

  const beneficios = [
    "Conformidade legal com a Lei 13.709/2018 (LGPD)",
    "Redução de riscos de sanções e multas administrativas",
    "Melhoria da confiança dos clientes e stakeholders",
    "Fortalecimento da governança corporativa",
    "Vantagem competitiva no mercado",
    "Melhoria dos processos de gestão de dados",
    "Redução de riscos de vazamento de dados",
    "Proteção da reputação da empresa"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">
              ADEQUAÇÃO À LEI GERAL DE PROTEÇÃO DE DADOS
            </h1>
            <p className="text-xl text-destructive font-semibold">
              LGPD - Lei 13.709/2018
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
                Empresas de todos os portes e setores que realizam tratamento de dados pessoais, incluindo coleta, armazenamento, processamento, compartilhamento ou qualquer outra operação com dados de clientes, funcionários, fornecedores ou terceiros, e que necessitam adequar-se às exigências da Lei Geral de Proteção de Dados.
              </p>
            </div>
          </section>

          {/* O que é LGPD */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <Shield className="mr-2 h-6 w-6" />
                O QUE É A LGPD?
              </h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground mb-4">
                  A Lei Geral de Proteção de Dados (LGPD) - Lei 13.709/2018 - estabelece regras sobre coleta, armazenamento, tratamento e compartilhamento de dados pessoais, protegendo os direitos fundamentais de liberdade e privacidade. A lei se aplica a qualquer operação de tratamento realizada por pessoa física ou jurídica, de direito público ou privado.
                </p>
                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
                  <div className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
                    <p className="text-sm font-semibold">ATENÇÃO: Multas podem chegar a R$ 50 milhões ou 2% do faturamento da empresa</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Serviços Oferecidos */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold">SERVIÇOS OFERECIDOS</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Diagnóstico */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive text-center">
                    Diagnóstico de Conformidade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground mb-4">
                    Avaliação completa da situação atual da empresa:
                  </p>
                  <div className="space-y-2">
                    {[
                      "Mapeamento de dados pessoais tratados",
                      "Identificação de bases legais aplicáveis",
                      "Avaliação de riscos e vulnerabilidades",
                      "Análise de contratos e políticas existentes",
                      "Relatório de gaps e não conformidades"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Implementação */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive text-center">
                    Implementação do Programa de Conformidade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground mb-4">
                    Desenvolvimento e implementação de políticas e procedimentos:
                  </p>
                  <div className="space-y-2">
                    {[
                      "Política de Privacidade e Proteção de Dados",
                      "Procedimentos Operacionais Padrão (POPs)",
                      "Termo de Consentimento e Aviso de Privacidade",
                      "Contratos de compartilhamento de dados",
                      "Programa de treinamento e conscientização"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Governança */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive text-center">
                    Governança de Dados e DPO
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground mb-4">
                    Estruturação da governança de proteção de dados:
                  </p>
                  <div className="space-y-2">
                    {[
                      "Indicação e capacitação de DPO (Data Protection Officer)",
                      "Estruturação de comitê de privacidade",
                      "Definição de papéis e responsabilidades",
                      "Processos de resposta a incidentes",
                      "Relatório de impacto à proteção de dados (RIPD)"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Segurança */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive text-center">
                    Segurança da Informação
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground mb-4">
                    Implementação de medidas técnicas e organizacionais:
                  </p>
                  <div className="space-y-2">
                    {[
                      "Criptografia e pseudonimização de dados",
                      "Controles de acesso e autenticação",
                      "Backup e recuperação de dados",
                      "Monitoramento e detecção de incidentes",
                      "Plano de resposta a vazamentos de dados"
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

          {/* Princípios da LGPD */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <Lock className="mr-2 h-6 w-6" />
                PRINCÍPIOS DA LGPD
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {principios.map((principio, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-foreground">{principio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefícios */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold">
                BENEFÍCIOS DA ADEQUAÇÃO À LGPD
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

export default LGPD;