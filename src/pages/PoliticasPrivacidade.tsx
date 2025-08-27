import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Users, FileText, AlertCircle } from "lucide-react";

const PoliticasPrivacidade = () => {
  const dadosColetados = [
    "Nome completo",
    "Endereço de e-mail",
    "Número de telefone",
    "Dados de identificação (CPF, RG)",
    "Endereço residencial ou comercial",
    "Dados de navegação e cookies",
    "Informações de uso do website",
    "Dados de interação com nossos serviços"
  ];

  const finalidades = [
    "Prestação de serviços de consultoria e treinamento",
    "Comunicação sobre nossos produtos e serviços",
    "Envio de newsletters e materiais informativos",
    "Cumprimento de obrigações legais e regulatórias",
    "Melhoria da experiência do usuário em nosso website",
    "Análise estatística e de desempenho",
    "Atendimento ao cliente e suporte técnico",
    "Prevenção de fraudes e atividades ilícitas"
  ];

  const basesLegais = [
    {
      titulo: "Consentimento",
      descricao: "Quando você nos fornece autorização expressa para o tratamento de seus dados pessoais."
    },
    {
      titulo: "Execução de Contrato",
      descricao: "Para cumprimento de obrigações contratuais firmadas entre você e a RMMG."
    },
    {
      titulo: "Legítimo Interesse",
      descricao: "Para finalidades legítimas, considerando seus direitos e liberdades fundamentais."
    },
    {
      titulo: "Obrigação Legal", 
      descricao: "Para cumprimento de obrigações legais às quais a RMMG está sujeita."
    }
  ];

  const direitosTitular = [
    "Confirmação da existência de tratamento de dados",
    "Acesso aos dados pessoais tratados",
    "Correção de dados incompletos, inexatos ou desatualizados",
    "Anonimização, bloqueio ou eliminação de dados desnecessários",
    "Portabilidade dos dados a outro fornecedor",
    "Eliminação dos dados tratados com consentimento",
    "Informação sobre compartilhamento de dados",
    "Revogação do consentimento"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-primary mb-4">
              POLÍTICA DE PRIVACIDADE DE DADOS
            </h1>
            <p className="text-lg text-foreground max-w-4xl mx-auto">
              Esta Política de Privacidade descreve como a Rede Metrológica de Minas Gerais - RMMG coleta, usa, armazena e protege as informações pessoais de nossos usuários, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).
            </p>
          </div>

          {/* Informações Gerais */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <FileText className="mr-2 h-6 w-6" />
                INFORMAÇÕES GERAIS
              </h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-foreground">
                    <strong>Controlador dos Dados:</strong> Rede Metrológica de Minas Gerais - RMMG
                  </p>
                  <p className="text-foreground">
                    <strong>CNPJ:</strong> [Inserir CNPJ da RMMG]
                  </p>
                  <p className="text-foreground">
                    <strong>Endereço:</strong> Rua Marajó, 1181, Barro Preto, Belo Horizonte - MG, CEP 30112-000
                  </p>
                  <p className="text-foreground">
                    <strong>Telefone:</strong> (31) 2512-4800
                  </p>
                  <p className="text-foreground">
                    <strong>E-mail para questões de privacidade:</strong> rmmg@rmmg.org.br
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Dados Coletados */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <Users className="mr-2 h-6 w-6" />
                DADOS PESSOAIS COLETADOS
              </h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground mb-4">
                  A RMMG pode coletar as seguintes categorias de dados pessoais:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {dadosColetados.map((dado, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <p className="text-sm text-foreground">{dado}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Finalidades */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <Eye className="mr-2 h-6 w-6" />
                FINALIDADES DO TRATAMENTO
              </h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground mb-4">
                  Seus dados pessoais são tratados para as seguintes finalidades:
                </p>
                <div className="space-y-3">
                  {finalidades.map((finalidade, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-foreground">{finalidade}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Bases Legais */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <Lock className="mr-2 h-6 w-6" />
                BASES LEGAIS PARA O TRATAMENTO
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {basesLegais.map((base, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-destructive">{base.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">{base.descricao}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Compartilhamento */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold">COMPARTILHAMENTO DE DADOS</h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground mb-4">
                  A RMMG pode compartilhar seus dados pessoais nas seguintes situações:
                </p>
                <div className="space-y-3">
                  {[
                    "Com fornecedores e prestadores de serviços que auxiliam em nossas operações",
                    "Com autoridades governamentais, quando exigido por lei",
                    "Com parceiros comerciais, mediante seu consentimento expresso",
                    "Em processos de fusão, aquisição ou reorganização empresarial",
                    "Para proteção dos direitos, propriedade ou segurança da RMMG"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Segurança */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold">SEGURANÇA DOS DADOS</h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground mb-4">
                  A RMMG implementa medidas técnicas e organizacionais apropriadas para proteger seus dados pessoais, incluindo:
                </p>
                <div className="space-y-3">
                  {[
                    "Criptografia de dados sensíveis em trânsito e em repouso",
                    "Controles de acesso baseados em necessidade e função",
                    "Monitoramento contínuo de sistemas e detecção de anomalias",
                    "Treinamento regular de funcionários sobre segurança da informação",
                    "Backup regular e planos de recuperação de dados",
                    "Avaliações periódicas de segurança e testes de vulnerabilidade"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Retenção */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold">RETENÇÃO DOS DADOS</h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground">
                  Os dados pessoais serão mantidos pelo tempo necessário para cumprir as finalidades para as quais foram coletados, ou conforme exigido por obrigações legais. Os critérios utilizados para determinar os períodos de retenção incluem: natureza dos dados, finalidade do tratamento, base legal aplicável, e requisitos legais e regulamentares.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Direitos do Titular */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold">DIREITOS DOS TITULARES DE DADOS</h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground mb-4">
                  Conforme a LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {direitosTitular.map((direito, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-foreground">{direito}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Cookies */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold">USO DE COOKIES</h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground mb-4">
                  Nosso website utiliza cookies e tecnologias similares para melhorar a experiência do usuário. Os cookies são classificados em:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-destructive mb-2">Cookies Essenciais</h4>
                    <p className="text-sm text-foreground">Necessários para o funcionamento básico do website</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-destructive mb-2">Cookies de Desempenho</h4>
                    <p className="text-sm text-foreground">Coletam informações sobre como os visitantes usam o website</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-destructive mb-2">Cookies de Funcionalidade</h4>
                    <p className="text-sm text-foreground">Permitem que o website se lembre de escolhas do usuário</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contato */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold">EXERCÍCIO DE DIREITOS E CONTATO</h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground mb-4">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato:
                </p>
                <div className="space-y-2">
                  <p className="text-foreground"><strong>E-mail:</strong> rmmg@rmmg.org.br</p>
                  <p className="text-foreground"><strong>Telefone:</strong> (31) 2512-4800</p>
                  <p className="text-foreground"><strong>Endereço:</strong> Rua Marajó, 1181, Barro Preto, Belo Horizonte - MG, CEP 30112-000</p>
                </div>
                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-4">
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-yellow-500 mr-2" />
                    <p className="text-sm font-semibold text-yellow-700">
                      Responderemos às suas solicitações dentro de 15 dias úteis, conforme estabelecido pela LGPD.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Alterações */}
          <section className="mb-16">
            <div className="bg-primary text-white p-4 mb-6">
              <h2 className="text-xl font-bold">ALTERAÇÕES NESTA POLÍTICA</h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground">
                  Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulamentares. Recomendamos que você revise esta política regularmente. A versão mais atual estará sempre disponível em nosso website com a data da última atualização.
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Última atualização:</strong> [Data da última atualização]
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PoliticasPrivacidade;