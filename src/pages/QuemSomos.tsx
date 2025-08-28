import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users, Award, Building2 } from "lucide-react";

const QuemSomos = () => {
  const valores = [
    {
      icon: <Heart className="w-6 h-6" />,
      titulo: "Ética",
      descricao: "Agir com imparcialidade, transparência, honestidade, integridade e responsabilidade em todas as ações e relações. Respeitar a confidencialidade profissional e as informações pessoais e organizacionais recebidas."
    },
    {
      icon: <Award className="w-6 h-6" />,
      titulo: "Qualidade de Serviços",
      descricao: "Buscar grau máximo de qualidade na execução de rotinas e procedimentos, entregando resultados com rapidez, qualidade e cortesia elevando ao máximo a satisfação das partes interessadas."
    },
    {
      icon: <Target className="w-6 h-6" />,
      titulo: "Comprometimento",
      descricao: "Atuar com qualidade, eficiência e agilidade."
    },
    {
      icon: <Users className="w-6 h-6" />,
      titulo: "Trabalho em Equipe",
      descricao: "Atuar de forma holística com profissionais de diversas áreas e com ampla experiência de mercado para atender da melhor forma as necessidades e expectativas das partes interessadas."
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      titulo: "Cooperação",
      descricao: "Firmar parcerias para a execução de serviços, buscando manter a qualidade e elevar a confiabilidade nos serviços ofertados."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-destructive mb-6">
              Rede Metrológica de Minas Gerais
            </h1>
            
            {/* Hero Image */}
            <div className="max-w-4xl mx-auto mb-8">
              <img 
                src="/src/assets/hero-rmmg.jpg" 
                alt="Rede Metrológica de Minas Gerais - Conceito de rede de pessoas" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* About Section */}
          <div className="max-w-6xl mx-auto space-y-16">
            <section>
              <div className="text-center max-w-4xl mx-auto space-y-6">
                <p className="text-lg text-foreground leading-relaxed text-justify">
                  A Rede Metrológica de Minas Gerais (RMMG) é uma organização técnico-científica, sem fins lucrativos, constituída por laboratórios especializados e instituições com interesse em metrologia. Seu principal objetivo é fomentar a cultura metrológica no Estado, estimulando e promovendo o desenvolvimento da prestação dos serviços de ensaio e calibração, a fim de garantir a qualidade dos produtos e impulsionar o avanço tecnológico das empresas mineiras.
                </p>
                
                <p className="text-lg text-foreground leading-relaxed text-justify">
                  Comprometida com o desenvolvimento da sociedade, a RMMG estimula a oferta de produtos e serviços com qualidade reconhecida, contribuindo para o atendimento às exigências do mercado e conquistando, assim, a confiança do setor produtivo. Ao longo dos anos, consolidou-se como referência em metrologia em Minas Gerais, oferecendo soluções como Treinamentos, Consultorias, Auditorias Internas e o Programa de Ensaio de Proficiência (PEP).
                </p>
              </div>
            </section>

            {/* Política da Qualidade */}
            <section className="bg-secondary/30 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-destructive mb-6 text-center">
                Política da Qualidade
              </h2>
              
              <div className="space-y-4 max-w-4xl mx-auto">
                <p className="text-foreground leading-relaxed text-justify">
                  A RMMG realiza suas atividades de forma imparcial atendendo as normas <strong>ABNT NBR ISO 9001</strong> e <strong>ABNT NBR ISO/IEC 17043</strong>, bem como as boas práticas de gestão, promovendo a melhoria contínua do Sistema de Gestão da Qualidade, satisfazendo às necessidades das partes interessadas e buscando a excelência nos serviços prestados.
                </p>
                
                <p className="text-foreground leading-relaxed text-justify">
                  A equipe de avaliadores, consultores e parceiros é designada para atender a qualidade e excelência dos serviços prestados, de forma a buscar a satisfação dos clientes.
                </p>
                
                <p className="text-foreground leading-relaxed text-justify">
                  A capacitação dos colaboradores é potencializada por meio da aprendizagem contínua, visando a realização dos processos internos e o desenvolvimento pessoal e profissional. A RMMG promove o engajamento da sua equipe de forma a garantir o padrão dos serviços prestados.
                </p>
              </div>
            </section>

            {/* Missão, Visão e Valores */}
            <section className="grid md:grid-cols-3 gap-8">
              {/* Missão */}
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Target className="w-12 h-12 text-destructive mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-destructive mb-4">Missão</h3>
                  <p className="text-foreground text-sm leading-relaxed">
                    Disseminar, qualificar e desenvolver a competência da qualidade em entidades públicas e privadas, em especial os laboratórios, baseando-se do ENIQ – Estratégia Nacional da Infraestrutura da Qualidade, promovendo a melhoria da competitividade e produtividade.
                  </p>
                </CardContent>
              </Card>

              {/* Visão */}
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Eye className="w-12 h-12 text-destructive mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-destructive mb-4">Visão</h3>
                  <p className="text-foreground text-sm leading-relaxed">
                    Ser autossustentável e reconhecida pelo mercado como referência de qualidade e competência em serviços voltados para metrologia e sistema de gestão da qualidade.
                  </p>
                </CardContent>
              </Card>

              {/* Valores */}
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Heart className="w-12 h-12 text-destructive mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-destructive mb-4">Valores</h3>
                  <p className="text-foreground text-sm leading-relaxed">
                    Ética, Qualidade de Serviços, Comprometimento, Trabalho em Equipe e Cooperação são os pilares que norteiam todas as nossas ações e relações profissionais.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Valores Detalhados */}
            <section>
              <h2 className="text-3xl font-bold text-destructive mb-8 text-center">
                Nossos Valores
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {valores.map((valor, index) => (
                  <Card key={index} className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="text-destructive mr-3">
                          {valor.icon}
                        </div>
                        <h3 className="text-lg font-bold text-destructive">
                          {valor.titulo}
                        </h3>
                      </div>
                      <p className="text-foreground text-sm leading-relaxed">
                        {valor.descricao}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Video Section Placeholder */}
            <section className="text-center bg-secondary/20 p-12 rounded-lg">
              <h2 className="text-2xl font-bold text-destructive mb-4">
                Conheça Mais Sobre a RMMG
              </h2>
              <p className="text-foreground mb-6">
                Assista ao nosso vídeo institucional e descubra como contribuímos para o desenvolvimento da metrologia em Minas Gerais.
              </p>
              <div className="bg-muted w-full h-64 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Vídeo Institucional RMMG</p>
              </div>
            </section>

            {/* Contact Section */}
            <section className="text-center">
              <h2 className="text-2xl font-bold text-destructive mb-6">
                Fale Conosco
              </h2>
              <p className="text-lg text-foreground">
                Estamos sempre prontos para atender você. Entre em contato conosco para mais informações sobre nossos serviços.
              </p>
              <div className="mt-6">
                <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full">
                  <span className="text-sm font-medium">💬 Fale conosco, estamos online!</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default QuemSomos;