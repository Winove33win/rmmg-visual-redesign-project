import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Consultoria = () => {
  const metodologia = [
    {
      numero: "01",
      titulo: "PLANEJAMENTO",
      descricao: "Estudamos, avaliamos e captamos suas necessidades. Traçamos os objetivos específicos e criação de um plano estratégico de implementação do projeto. Fazemos uma estudo detalhado sobre sua empresa utilizando como base para realização de toda a análise e execução."
    },
    {
      numero: "02", 
      titulo: "DEFINIÇÃO DO CRONOGRAMA",
      descricao: "Será elaborado um cronograma específico para execução, definindo o método de abordagem entre as diferentes etapas necessárias para conclusão do projeto. Este cronograma é validado junto com o cliente para alinhar aos recursos disponíveis pelo consultores."
    },
    {
      numero: "03",
      titulo: "REALIZAÇÃO DA CONSULTORIA",
      descricao: "Nesta etapa, todo o projeto de consulting é executado desde que implantadas principalmente levadas em consideração as necessidades internas, ações gerenciais, instrucionais, bem como definições de padrões, atendimento de OBs comentários do consultoria."
    },
    {
      numero: "04",
      titulo: "ENCERRAMENTO DO PROJETO",
      descricao: "O encerramento do projeto se dará com a apresentação das informações geradas, para consultoria, bem como a definição de padrões e definição de novos aspectos que beneficiem da seguinte pela empresa."
    }
  ];

  const diferenciais = [
    "As atividades realizadas pela equipe consultora da RMMG são desenvolvidas em conjunto com os clientes, proporcionando aprendizado ao consultor e do cliente segundo a estratégia do desenvolvimento organizacional sustentável.",
    "Capacitação de Auditoria do organismo de consultoria são financiados de todas as partes interessadas, visando requisitos meta e desenvolvimento do projeto em forma mais satisfatória.",
    "Entrega de relatórios e demais documentos durante o projeto para formulação da fase que encerra e detalhe como roteiro desenvolvido do relatório final na empresa.",
    "Qualidade das atividades realizadas e da RMMG zelam as políticas e norma servidor, após o consultoria para verificar se atividades em pleno funcionamento.",
    "Dispositivos em um Plano de Atividades que possam ser realizado ou qualquer empresa e busca desenvolver o surto corrente da sua era de desenvolvimento do objetivo proposto.",
    "Presenciamos com equidarte de consultores com diferentes competências e experiências, disso forma, consequências diferentes profissionais autênticos capacitados para oferecer de objetivos específicos de empresas."
  ];

  const servicos = [
    {
      titulo: "GESTÃO DA QUALIDADE PARA LABORATÓRIOS - ABNT NBR ISO/IEC 17025",
      imagem: "/src/assets/servicos/gestao-qualidade.jpg",
      link: "/servicos/gestao-qualidade-laboratorios"
    },
    {
      titulo: "SISTEMA DE GESTÃO DA QUALIDADE", 
      imagem: "/src/assets/servicos/sistema-gestao.jpg",
      link: "/servicos/sistema-gestao-qualidade"
    },
    {
      titulo: "PLANO DE ADERÊNCIA AOS REQUISITOS NORMATIVOS",
      imagem: "/src/assets/servicos/plano-aderencia.jpg",
      link: "/servicos/plano-aderencia"
    },
    {
      titulo: "GESTÃO DE PROJETOS E MELHORIA DE PROCESSOS",
      imagem: "/src/assets/servicos/gestao-projetos.jpg",
      link: "/servicos/gestao-projetos"
    },
    {
      titulo: "ADEQUAÇÃO E MELHORIA DE PROCESSOS PARA ÁREA DE ALIMENTOS",
      imagem: "/src/assets/servicos/adequacao-alimentos.jpg",
      link: "/servicos/adequacao-alimentos"
    },
    {
      titulo: "ADEQUAÇÃO À LEI GERAL DE PROTEÇÃO DE DADOS - LGPD",
      imagem: "/src/assets/servicos/lgpd.jpg",
      link: "/servicos/lgpd"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-6">
              CONSULTORIA
            </h1>
            <div className="max-w-4xl mx-auto text-foreground space-y-4">
              <p>
                A Rede Metrológica de Minas Gerais - RMMG oferece diversos tipos de consultoria para ajudar suas empresas nos melhores caminhos. Apoiado numa metodologia que garante sua qualidade que norteiam os processos, a RMMG oferece um serviço de consultoria específico, baseado na aplicação do conhecimento organizacional ou da empresa.
              </p>
              <p>
                Por meio de uma metodologia própria e com consultores altamente capacitados e com experiência nas mais diversas áreas da metrologia, a RMMG busca ajudar e auxiliar no crescimento organizacional das empresas.
              </p>
              <p>
                As consultorias oferecidas pela RMMG são personalizadas de acordo com a necessidade específica da empresa, buscando sempre a superioridade dos resultados alcançados para os projetos.
              </p>
            </div>
          </div>

          {/* Nossa Metodologia */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              NOSSA METODOLOGIA
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metodologia.map((etapa, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-lg">{etapa.numero}</span>
                    </div>
                    <CardTitle className="text-lg text-primary">{etapa.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground">{etapa.descricao}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Nossos Diferenciais */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-1">
                <div className="bg-primary p-8 rounded-lg text-center">
                  <Settings className="h-16 w-16 text-white mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-white">
                    NOSSOS DIFERENCIAIS
                  </h2>
                </div>
              </div>
              
              <div className="lg:col-span-2 space-y-4">
                {diferenciais.map((diferencial, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground text-sm">{diferencial}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Serviços Oferecidos */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              SERVIÇOS OFERECIDOS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicos.map((servico, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video bg-secondary rounded-t-lg flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                      <Settings className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-foreground mb-4">{servico.titulo}</h3>
                    <Link to={servico.link}>
                      <Button className="bg-primary hover:bg-primary/90">
                        SAIBA MAIS
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-secondary rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Caso sua necessidade de consultoria não esteja descrita acima, entre em contato conosco que avaliaremos suas demandas e entraremos em contato para auxilia-los.
            </h3>
            <div className="space-y-2 mb-6">
              <p className="font-semibold">Isabel Matos da Silveira</p>
              <p>isabel@rmmg.org.br</p>
              <p>(31) 2512-4800 - Ramal 870</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">Suely Martins Castro Gomes</p>
              <p>suely@rmmg.org.br</p>
              <p>(31) 2512-4800 - Ramal 870</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Consultoria;