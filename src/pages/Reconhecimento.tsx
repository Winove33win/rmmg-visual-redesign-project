import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Reconhecimento = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              RECONHECIMENTO DE COMPETÊNCIA
            </h1>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-foreground leading-relaxed">
                  Para um laboratório obter o Reconhecimento de Competência junto à Rede Metrológica de Minas Gerais é necessário o atendimento aos requisitos gerencias e técnicos da ABNT NBR ISO/IEC 17025, visando o fornecimento de resultados de ensaio e/ou calibração tecnicamente válidos e de qualidade.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  O Processo de Reconhecimento de Competência é realizado em etapas sendo elas avaliação de documentação, avaliação no laboratório e acompanhamento de ações corretivas.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  Após a recomendação do Reconhecimento de Competência e finalizada das ações corretivas há a emissão de certificado bem como a publicação da lista de serviços reconhecidos da RMMG, contendo todo o escopo avaliado do laboratório.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  Os laboratórios com o Reconhecimento de Competência, demonstram formalmente ao mercado os padrões de qualidade e agregam valor ao serviço prestado.
                </p>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src="/src/assets/hero-rmmg.jpg" 
                  alt="Laboratório RMMG" 
                  className="rounded-lg shadow-lg w-full max-w-md"
                />
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-secondary p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Alguns benefícios de ser um laboratório reconhecido pela RMMG:
              </h2>
              
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>aumento da confiança dos clientes e parceiros nos resultados das calibrações e/ou ensaios;</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>preparação para receber a acreditação pelo INMETRO;</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>aumento da competitividade;</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>ampliação do mercado de atuação;</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>validação pela Coordenação Normativa COFORM nº 216, de 27 de outubro de 2017, que considera válidos para fins de medições ambientais apenas os relatórios de ensaios e certificados de calibração de laboratórios reconhecidos e/ou acreditados. Legislação Ambiental - Consulta.</span>
                </li>
              </ul>
            </div>

            {/* Process Info */}
            <div className="text-center space-y-4">
              <p className="text-foreground">
                O Processo de Reconhecimento de Competência é certificado na ABNT NBR ISO 9001:2015, comprovando a qualidade da metodologia do serviço prestado e do comprometimento da RMMG em atender aos requisitos da qualidade.
              </p>
              
              <p className="text-foreground">
                <strong>Caso sejam necessárias mais informações sobre o Processo de Reconhecimento de Competência e o status, entre em contato com a RMMG pelo telefone: (31) 2512-4800 ou e-mail: isabel@rmmg.org.br</strong>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/reconhecimento/laboratorios-reconhecidos">
                  LABORATÓRIOS RECONHECIDOS
                </Link>
              </Button>
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link to="/reconhecimento/laboratorios-em-processo">
                  LABORATÓRIOS EM PROCESSO
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Reconhecimento;