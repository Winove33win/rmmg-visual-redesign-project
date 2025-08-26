import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle, Target, Users } from "lucide-react";

const AuditoriaInterna = () => {
  const beneficios = [
    {
      titulo: "Experiência em auditoria reconhecida, com grande experiência de base e tratamento específico no atendimento de auditoria de laboratórios",
      icone: Award
    },
    {
      titulo: "Levantamento de oportunidades de melhoria, considerando o perfil de SGQ através de uma visão sistêmica e experiência",
      icone: Target
    },
    {
      titulo: "Conformidade do sistema de auditoria interna da empresa com acompanhamento documentado do RMMG através de uma responsabilidade compartilhada",
      icone: CheckCircle
    },
    {
      titulo: "Possibilidades de que deixa como suporte responsabilidade sobre do RO e OA mediante da empresa",
      icone: Users
    }
  ];

  const clientes = [
    { nome: "Qualité", logo: "/src/assets/clientes/qualite.png" },
    { nome: "Hansen", logo: "/src/assets/clientes/hansen.png" },
    { nome: "LOCI", logo: "/src/assets/clientes/loci.png" },
    { nome: "Acqua Teras", logo: "/src/assets/clientes/acqua-teras.png" },
    { nome: "ELAM", logo: "/src/assets/clientes/elam.png" },
    { nome: "Warsion", logo: "/src/assets/clientes/warsion.png" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              AUDITORIA INTERNA
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Content */}
            <div className="space-y-6">
              <div className="space-y-4 text-foreground">
                <p>
                  A Auditoria Interna tem o objetivo de verificar e acompanhar sua tabela de metas de conformidade da SGM em relação aos requisitos da norma implementada. Além disso, a auditoria interna permite identificar por meio responsáveis pela verificação de melhorias na organização da sistema e melhoria contínua dentro da organização.
                </p>
                <p>
                  Todos os serviços de auditoria interna suprida tem auditores internos aplicar sistema de coletar e confirmar oriundos de trabalho de sistemas auditados por pessoal experientes, com formação técnica experiente guiado auditoria técnica e prática dos trabalhos de auditoria interna.
                </p>
                <p>
                  Esta auditoria pode ser conduzida pela própria equipe do laboratório - desde que este pessoal é imparcial e independente em relação às atividades auditadas-, ou por pessoal externo contatado através de uma estrutura terceirizada, a auditoria interna tem uma visão externa e pode trazer benefícios das melhores das práticas auditorias.
                </p>
                <p>
                  A auditoria interna da RMMG é consultiva social como principal objetivo é transformar os resultados das melhorias que a organização pode implantar nas suas estratégias, assim como identificar dos dos principais das qualidades sobre se uma SGQ da organização.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center items-center">
              <img 
                src="/src/assets/hero-rmmg.jpg" 
                alt="Auditoria Interna" 
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
          </div>

          {/* Benefícios */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Benefícios de Realizar a Auditoria Interna Consultiva com a RMMG
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {beneficios.map((beneficio, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <beneficio.icone className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-foreground text-sm">{beneficio.titulo}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Processo Certificado */}
          <section className="mb-20">
            <div className="bg-secondary rounded-lg p-8 text-center">
              <p className="text-foreground mb-6">
                <strong>
                  Além disso, se você realizar a auditoria interna do SGQ com a RMMG, seu escopo
                  acreditado na CGCRE poderá ser replicado em nosso site site, gerando maior visibilidade para o
                  seu laboratório!
                </strong>
              </p>
              
              <h2 className="text-3xl font-bold text-foreground mb-8">
                PROCESSO CERTIFICADO NA ABNT NBR ISO 9001:2015
              </h2>
              
              <p className="text-foreground mb-8">
                O processo de Auditoria Interna da ABNT NBR ISO/IEC 17025:2017 possui certificação na norma ABNT NBR ISO 9001:2015.
                Ou seja, todos os processos e documentos internos são implementados, padronizados e tram garantia de qualidade de processo e confiança do cliente do RMMG.
              </p>
              
              <p className="text-foreground mb-8">
                Consulte nossa norma de auditoria interna e entenda como processo é conduzido dentro da RMMG.
              </p>
              
              <div className="space-y-4">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  N014 - PROCESSO DE AUDITORIA INTERNA
                </Button>
                <p className="text-foreground">
                  Acesse o formulário abaixo, preencha e envie para: isabel@rmmg.org.br para cotar com todos os benefícios acima descritos.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  PEDIDO DE AUDITORIA INTERNA
                </Button>
              </div>
            </div>
          </section>

          {/* Normas */}
          <section className="mb-20">
            <div className="text-center space-y-8">
              <p className="text-foreground">
                Após sua norma ABNT NBR ISO/IEC 17025:2017, a RMMG realiza auditorias internas em outras normas de gestão da qualidade:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground">ABNT NBR ISO 9001:2015</h3>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground">ABNT NBR ISO 14001:2015</h3>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground">Normas da linha de alimentos</h3>
                </div>
              </div>
            </div>
          </section>

          {/* Contato */}
          <section className="mb-20">
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Consulte condições!
              </h3>
              <p className="text-foreground">
                Entre em contato com: <span className="text-primary font-semibold">isabel@rmmg.org.br</span>
              </p>
            </div>
          </section>

          {/* Clientes */}
          <section>
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              ALGUNS DOS NOSSOS CLIENTES
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {clientes.map((cliente, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-foreground font-bold text-sm">{cliente.nome}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AuditoriaInterna;