import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Afiliacao = () => {
  const beneficios = [
    "Descontos de até 20% nos cursos realizados pela RMMG;",
    "Descontos para participação em Ensaios de Proficiência (PEP) organizados pela RMMG;",
    "Descontos em todos os serviços: Auditoria interna de terceira parte, Consultoria, Palestras e eventos promovidos;",
    "Divulgação dos laboratórios reconhecidos no site para sua relação de clientes, após auditoria finalizada de forma gratuita e conclua, específica de divulgação para empresas afiliadas;",
    "Integrar o banco de dados de divulgação de cursos e eventos realizados pela RMMG;",
    "Descontos de até 30% para cursos de graduação, pós-graduação e MBAs nas melhores Faculdades de Minas;",
    "Divulgação de matérias promocionais da empresa nas pistas de cursos oferecidos presencialmente;",
    "Espaço aberto para publicação de notícias, artigos e vagas de emprego no site da RMMG"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="relative bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-12 mb-8">
              <div className="absolute right-8 top-8">
                <img 
                  src="/src/assets/hero-rmmg.jpg" 
                  alt="Laboratório" 
                  className="w-64 h-40 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="max-w-2xl">
                <h1 className="text-3xl font-bold text-foreground mb-6">
                  Sua empresa também pode fazer parte da<br/>
                  <span className="text-primary">Rede Metrológica de Minas Gerais</span>
                </h1>
                <h2 className="text-2xl font-bold text-primary">
                  AFILIE-SE
                </h2>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Por que afiliar-se */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-primary">
                Porque afiliar-se a RMMG?
              </h3>
              <div className="space-y-4 text-foreground">
                <p>
                  A RMMG é o lugar onde o empresário ou profissional da área da metrologia encontrará um ambiente favorável para discussão de questões estratégico-operacionais sobre metrologia, normalização, referências de excelência bem como estabelecer contato com as modernas tecnologias do segmento.
                </p>
                <p>
                  Estando disponíveis cursos, treinamentos e eventos voltados para as áreas de atuação das empresas afiliadas, disseminando uma cultura metrológica onde o consumidor será o maior beneficiado.
                </p>
                <p>
                  Com objetivo de trabalharmos juntos em busca da melhoria dos produtos brasileiros, encarando os desafios impostos pelo mercado internacional.
                </p>
                <p>
                  Ao se afiliar a RMMG o laboratório demonstra o interesse em desenvolver suas atividades com qualidade. Qualquer laboratório empresa ou pessoa jurídica pode se afiliar a RMMG e contar com todos os benefícios oferecidos.
                </p>
              </div>
            </div>

            {/* Benefícios */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-primary">
                Benefícios
              </h3>
              <div className="space-y-3">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{beneficio}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Como se afiliar */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-primary mb-6 text-center">
                Veja como é fácil afiliar-se a RMMG
              </h3>
              <div className="space-y-4 text-foreground">
                <p>
                  A afiliação é realizada anualmente, sendo que para ser considerado afiliado é necessário que a organização tenha realizado o pagamento da taxa no ano de competência, através de um boleto bancário enviado pela RMMG.
                </p>
                <p>
                  A empresa receberá um número de afiliação único, por CNPJ, que a classifica como afiliada, além da comprova de da afiliação para comprovação ao solicitar os benefícios descritos acima.
                </p>
                <p>
                  Aguardamos você, associe-se, conte-nos, vamos fazer por meio da metrologia um Brasil melhor.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
              FORMULÁRIO PARA AFILIAÇÃO
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Afiliacao;