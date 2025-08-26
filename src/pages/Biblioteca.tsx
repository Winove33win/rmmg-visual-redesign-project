import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Biblioteca = () => {
  const documentos = [
    {
      codigo: "N001",
      titulo: "PROCESSO DE RECONHECIMENTO DE COMPETÊNCIA",
      revisao: "22",
      data: "12/01/2024",
      campo: "Estabelecer os procedimentos a serem utilizados no Processo de Reconhecimento de Competência",
      status: "NORMA"
    },
    {
      codigo: "N005",
      titulo: "CRITÉRIOS ESPECÍFICOS DA RMMG",
      revisao: "15", 
      data: "03/12/2024",
      campo: "Definir os critérios específicos da Rede Metrológica de Minas Gerais, os quais devem ser seguidos pelo laboratório que busca o Reconhecimento de Competência novos critério do reconhecimento",
      status: "NORMA"
    },
    {
      codigo: "N008",
      titulo: "USO DO SELO DO RECONHECIMENTO",
      revisao: "07",
      data: "12/06/2024",
      campo: "Estabelecer procedimento para uso do Selo do Reconhecimento de Competência pelo laboratório reconhecido",
      status: "NORMA"
    },
    {
      codigo: "N016",
      titulo: "APLICAÇÃO DE SANÇÕES AOS LABORATÓRIOS RECONHECIDOS",
      revisao: "00",
      data: "03/12/2024",
      campo: "Estabelecer o procedimento para aplicação e tratamento de sanções aos laboratórios reconhecidos e em processo de Reconhecimento de Competência em decorrência de não atendimento aos requisitos estabelecidos pela RMMG",
      status: "NORMA"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-8">
              BIBLIOTECA
            </h1>
          </div>

          {/* Tabela de Documentos */}
          <div className="bg-background rounded-lg overflow-hidden shadow-lg mb-16">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-secondary">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Código</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Título</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Revisão</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Data</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Campo de Aplicação</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Link de acesso</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {documentos.map((doc, index) => (
                    <tr key={index} className="hover:bg-secondary/50">
                      <td className="px-6 py-4 text-sm font-medium text-foreground">{doc.codigo}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{doc.titulo}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{doc.revisao}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{doc.data}</td>
                      <td className="px-6 py-4 text-sm text-foreground max-w-xs">{doc.campo}</td>
                      <td className="px-6 py-4">
                        <Badge className="bg-primary hover:bg-primary/90 text-white">
                          {doc.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Seção de Download */}
          <div className="bg-secondary rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              DOWNLOAD
            </h2>
            
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold text-foreground">
                Selo do Reconhecimento de Competência
              </h3>
              <p className="text-muted-foreground">
                Download do Selo do Reconhecimento de Competência
              </p>
            </div>
            
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              DOWNLOAD
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Biblioteca;