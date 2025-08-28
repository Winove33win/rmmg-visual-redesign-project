import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Users, FileText, AlertCircle, Database, Scale, BookOpen, CheckCircle } from "lucide-react";

const PoliticasPrivacidade = () => {
  const termosConceitos = [
    { termo: "Agentes de Tratamento", definicao: "O Controlador, Co-controlador e o Operador" },
    { termo: "Anonimização", definicao: "Utilização de meios técnicos razoáveis por meio dos quais um dado perde a possibilidade de associação a um indivíduo" },
    { termo: "ANPD", definicao: "Autoridade Nacional de Proteção de Dados Pessoais - órgão fiscalizador da LGPD" },
    { termo: "Banco de Dados", definicao: "Conjunto estruturado de Dados Pessoais estabelecido em suporte eletrônico ou físico" },
    { termo: "Consentimento", definicao: "Manifestação livre, informada e inequívoca pela qual o Titular concorda com o Tratamento" },
    { termo: "Controlador", definicao: "Pessoa jurídica a quem competem as decisões referentes ao Tratamento de Dados Pessoais" },
    { termo: "Dado Pessoal", definicao: "Informação relacionada a pessoa natural identificada ou identificável" },
    { termo: "Titular", definicao: "Pessoa natural a quem se referem os Dados Pessoais objeto de Tratamento" },
    { termo: "Tratamento", definicao: "Toda operação realizada com Dados Pessoais (coleta, uso, acesso, etc.)" }
  ];

  const basesLegais = [
    { base: "Consentimento pelo titular", aplicacao: "Newsletters, comunicações de marketing" },
    { base: "Cumprimento de obrigação legal", aplicacao: "Arquivos fiscais, trabalhistas" },
    { base: "Execução de contrato", aplicacao: "Prestação de serviços contratados" },
    { base: "Exercício regular de direitos", aplicacao: "Defesa em processos judiciais" },
    { base: "Interesse legítimos", aplicacao: "Segurança, prevenção à fraude" },
    { base: "Proteção da vida", aplicacao: "Emergências médicas" }
  ];

  const principiosTratamento = [
    { principio: "Finalidade", descricao: "Informar para quais finalidades específicas o Tratamento será realizado" },
    { principio: "Adequação", descricao: "Tratamento compatível com a finalidade informada ao Titular" },
    { principio: "Necessidade", descricao: "Limitar aos dados mínimos necessários para a realização das finalidades" },
    { principio: "Livre acesso", descricao: "Consulta facilitada e gratuita sobre forma e duração do Tratamento" },
    { principio: "Qualidade dos Dados", descricao: "Manter dados atualizados, claros e exatos" },
    { principio: "Transparência", descricao: "Informações claras, precisas e de fácil acesso sobre o Tratamento" },
    { principio: "Segurança", descricao: "Medidas técnicas e administrativas para proteger os dados" },
    { principio: "Prevenção", descricao: "Adotar medidas para prevenir danos no Tratamento de dados" },
    { principio: "Não discriminação", descricao: "Proibir Tratamento para fins discriminatórios ou abusivos" },
    { principio: "Responsabilização", descricao: "Adotar medidas eficazes e comprovar observância das normas" }
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
          {/* Header com imagem LGPD */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-destructive mb-6">
              Política de Privacidade de Dados
            </h1>
            
            {/* Hero Image LGPD */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-600 h-64 rounded-lg flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative text-center text-white">
                  <Shield className="w-16 h-16 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold">LGPD</h2>
                  <p className="text-sm">Lei Geral de Proteção de Dados</p>
                </div>
                {/* Elementos decorativos */}
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/30 rounded"></div>
                <div className="absolute top-8 right-8 w-6 h-6 border-2 border-white/30 rounded-full"></div>
                <div className="absolute bottom-4 left-8 w-4 h-4 bg-white/20 rounded"></div>
                <div className="absolute bottom-8 right-4 w-10 h-2 bg-white/20 rounded"></div>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                A Rede Metrológica de Minas Gerais – RMMG é uma organização técnico-científica sem fins lucrativos, que atua em prol do desenvolvimento da Metrologia e da indústria no Estado de Minas Gerais, oferecendo serviços de qualidade.
              </p>
              
              <p className="text-foreground leading-relaxed">
                A RMMG possui um corpo técnico de colaboradores e prestadores de serviços com amplo conhecimento e experiência em diversas áreas de atuação. Muitos destes profissionais são mestres, doutores e pós doutores, que em alguns casos obtiveram seus diplomas em países que são ou possuem instituições que são referência em normalização e metrologia, a exemplo de Estados Unidos, Inglaterra, França, Alemanha e Bélgica.
              </p>
            </div>
          </div>

          {/* Objetivo e Introdução */}
          <section className="mb-16">
            <div className="bg-destructive text-white p-4 mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <BookOpen className="mr-2 h-6 w-6" />
                OBJETIVO
              </h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground mb-4 leading-relaxed">
                  A RMMG tem como um dos objetivos a privacidade daqueles com os quais se relaciona e destina todo o seu cuidado no Tratamento de Dados Pessoais. Por esta razão possui uma Política de Privacidade que tem por propósito estabelecer orientações mínimas a todos aqueles que tratam Dados Pessoais por conta e em nome da Rede e sobre as diretrizes relacionadas à proteção de Dados Pessoais.
                </p>
                
                <p className="text-foreground mb-4 leading-relaxed">
                  A Política de Privacidade foi criada com o intuito de demonstrar o compromisso da RMMG com a proteção de seus dados pessoais, estabelecendo orientações mínimas aos funcionários, colaboradores, fornecedores, clientes, parceiros de negócios e terceiros sobre o Tratamento legítimo de Dados Pessoais.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  <strong>É importante que todos que se relacionam com a RMMG leiam cuidadosamente esta Política</strong> para entenderem as práticas de tratamento dos seus Dados Pessoais e como podem exercer seus direitos.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Termos e Conceitos */}
          <section className="mb-16">
            <div className="bg-destructive text-white p-4 mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <BookOpen className="mr-2 h-6 w-6" />
                TERMOS E CONCEITOS
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {termosConceitos.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h4 className="font-bold text-destructive mb-2">{item.termo}</h4>
                    <p className="text-sm text-foreground">{item.definicao}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Bases Legais */}
          <section className="mb-16">
            <div className="bg-destructive text-white p-4 mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <Scale className="mr-2 h-6 w-6" />
                BASES LEGAIS PARA O TRATAMENTO
              </h2>
            </div>
            
            <Card className="mb-6">
              <CardContent className="p-6">
                <p className="text-foreground mb-4">
                  De acordo com o artigo 7º e 11 da LGPD, os dados pessoais somente podem ser tratados se tiverem ao menos uma das bases legais elencadas:
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {basesLegais.map((item, index) => (
                    <div key={index} className="bg-secondary/30 p-4 rounded-lg">
                      <h4 className="font-bold text-destructive mb-2">{item.base}</h4>
                      <p className="text-sm text-foreground">{item.aplicacao}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Tabela de Dados Sensíveis e Comuns */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-blue-600 text-white">
                  <CardTitle className="text-center">DADOS PESSOAIS COMUNS</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    {[
                      "✓ Consentimento",
                      "✓ Cumprimento de obrigação legal", 
                      "✓ Execução de políticas públicas",
                      "✓ Estudos por órgão de pesquisa",
                      "✓ Execução de contrato",
                      "✓ Exercício regular de direitos",
                      "✓ Proteção da vida",
                      "✓ Tutela da saúde", 
                      "✓ Interesses legítimos",
                      "✓ Proteção do crédito"
                    ].map((item, index) => (
                      <div key={index} className="text-sm text-foreground">{item}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="bg-cyan-600 text-white">
                  <CardTitle className="text-center">DADOS PESSOAIS SENSÍVEIS</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    {[
                      "✓ Consentimento",
                      "✓ Cumprimento de obrigação legal",
                      "✓ Execução de políticas públicas",
                      "✓ Estudos por órgão de pesquisa",
                      "✓ Exercício regular de direitos",
                      "✓ Proteção da vida",
                      "✓ Tutela da saúde",
                      "✓ Prevenção à fraude"
                    ].map((item, index) => (
                      <div key={index} className="text-sm text-foreground">{item}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Princípios do Tratamento */}
          <section className="mb-16">
            <div className="bg-destructive text-white p-4 mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <CheckCircle className="mr-2 h-6 w-6" />
                PRINCÍPIOS ESSENCIAIS DO TRATAMENTO
              </h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground mb-6">
                  A presente Política se coaduna com os seguintes 10 (dez) princípios a serem seguidos durante o processo de Tratamento de Dados Pessoais:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {principiosTratamento.map((item, index) => (
                    <div key={index} className="bg-secondary/30 p-4 rounded-lg">
                      <h4 className="font-bold text-destructive mb-2">{index + 1}. {item.principio}</h4>
                      <p className="text-sm text-foreground">{item.descricao}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Dados Coletados */}
          <section className="mb-16">
            <div className="bg-destructive text-white p-4 mb-6">
              <h2 className="text-xl font-bold flex items-center">
                <Database className="mr-2 h-6 w-6" />
                DADOS PESSOAIS TRATADOS
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Colaboradores */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive text-sm">COLABORADORES E PRESTADORES</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• Dados cadastrais completos</li>
                    <li>• Documentos de identificação</li>
                    <li>• Histórico profissional</li>
                    <li>• Dados financeiros</li>
                    <li>• Fotografia</li>
                    <li>• Dados de saúde ocupacional</li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Fornecedores */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive text-sm">FORNECEDORES</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• Dados da empresa</li>
                    <li>• Representantes legais</li>
                    <li>• Dados contratuais</li>
                    <li>• Informações financeiras</li>
                    <li>• Certificações</li>
                  </ul>
                </CardContent>
              </Card>
              
              {/* Clientes */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-destructive text-sm">CLIENTES E USUÁRIOS</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• Dados de contato</li>
                    <li>• Dados de navegação</li>
                    <li>• Histórico de serviços</li>
                    <li>• Preferências</li>
                    <li>• Comunicações</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Compartilhamento */}
          <section className="mb-16">
            <div className="bg-destructive text-white p-4 mb-6">
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
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Segurança */}
          <section className="mb-16">
            <div className="bg-destructive text-white p-4 mb-6">
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
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Retenção */}
          <section className="mb-16">
            <div className="bg-destructive text-white p-4 mb-6">
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
            <div className="bg-destructive text-white p-4 mb-6">
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
                      <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-foreground">{direito}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Cookies */}
          <section className="mb-16">
            <div className="bg-destructive text-white p-4 mb-6">
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
            <div className="bg-destructive text-white p-4 mb-6">
              <h2 className="text-xl font-bold">EXERCÍCIO DE DIREITOS E CONTATO</h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground mb-4">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, entre em contato:
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-foreground"><strong>Controlador:</strong> Rede Metrológica de Minas Gerais - RMMG</p>
                  <p className="text-foreground"><strong>E-mail:</strong> rmmg@rmmg.org.br</p>
                  <p className="text-foreground"><strong>Telefone:</strong> (31) 2512-4800</p>
                  <p className="text-foreground"><strong>Endereço:</strong> Rua Marajó, 1181, Barro Preto, Belo Horizonte - MG, CEP 30112-000</p>
                </div>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                  <div className="flex items-center">
                    <AlertCircle className="w-5 h-5 text-amber-600 mr-2" />
                    <p className="text-sm font-semibold text-amber-800">
                      Responderemos às suas solicitações dentro de 15 dias úteis, conforme estabelecido pela LGPD.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Alterações */}
          <section className="mb-16">
            <div className="bg-destructive text-white p-4 mb-6">
              <h2 className="text-xl font-bold">ALTERAÇÕES NESTA POLÍTICA</h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <p className="text-foreground mb-4">
                  Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou por outros motivos operacionais, legais ou regulamentares. Recomendamos que você revise esta política regularmente. A versão mais atual estará sempre disponível em nosso website com a data da última atualização.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Última atualização:</strong> Dezembro de 2024
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