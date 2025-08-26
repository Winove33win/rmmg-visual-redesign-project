import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

const InformativoReconhecimento = () => {
  const informativos = [
    {
      numero: "01",
      titulo: "HARMONIZAÇÃO DA ELABORAÇÃO DE ESCOPO E PROPOSTAS PARA OS LABORATÓRIOS DAS ÁREAS DE EMISSÕES ATMOSFÉRICAS E AR AMBIENTE"
    },
    {
      numero: "02", 
      titulo: "AUTORIZAÇÃO DO USO DE CETAS DE REFERÊNCIA NÃO CERTIFICADAS ISO GUIA 34"
    },
    {
      numero: "03",
      titulo: "POLÍTICA DE TRANSIÇÃO DA RMMG PARA ADOÇÃO DA NORMA ISO/IEC 17025:2017"
    },
    {
      numero: "04",
      titulo: "POLÍTICA DE TRANSIÇÃO DA RMMG PARA ADOÇÃO DA ABNT NBR 19151:2019"
    },
    {
      numero: "05", 
      titulo: "NOVAS DIRETRIZES: CORONAVÍRUS"
    },
    {
      numero: "06",
      titulo: "DIRETRIZES PARA AVALIAÇÃO DE RUÍDO AMBIENTAL (ABNT NBR 10151:2019)"
    },
    {
      numero: "07",
      titulo: "POLÍTICA DE TRANSIÇÃO STANDARD METHODS EDIÇÃO 24"
    },
    {
      numero: "08",
      titulo: "INCERTEZA DE MEDIÇÃO"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-primary text-white px-6 py-2 rounded-md mb-4">
              LAB. RECONHECIDOS
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              INFORMATIVO RECONHECIMENTO DE COMPETÊNCIA
            </h1>
            <div className="inline-block bg-primary text-white px-6 py-2 rounded-md">
              INFORMATIVO RECONHECIMENTO DE COMPETÊNCIA
            </div>
            <div className="mt-4">
              <span className="bg-accent text-white px-6 py-2 rounded-md">
                BIBLIOTECA
              </span>
            </div>
          </div>

          {/* Informativos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {informativos.map((informativo, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="font-bold text-lg">
                    INFORMATIVO RECONHECIMENTO DE COMPETÊNCIA – {informativo.numero}
                  </h3>
                  
                  <div className="bg-secondary p-4 rounded-lg">
                    <h4 className="font-semibold text-sm mb-2">
                      {informativo.titulo}
                    </h4>
                  </div>
                  
                  <Button className="bg-primary hover:bg-primary/90">
                    DOCUMENTO
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InformativoReconhecimento;