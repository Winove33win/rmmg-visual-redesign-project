import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PEPOleos = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 bg-background py-12">
      <div className="container mx-auto px-4 space-y-4">
        <h1 className="text-3xl font-bold text-foreground">PEP Óleos</h1>
        <p className="text-muted-foreground">
          Programa de Ensaios de Proficiência em Análise de Óleos Lubrificantes.
        </p>
        <p>
          O PEP de Óleos verifica a precisão de ensaios físico-químicos em amostras de lubrificantes. Auxilia no monitoramento de desempenho de equipamentos e na garantia da integridade de máquinas.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default PEPOleos;
