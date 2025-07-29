import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PEPQuimicaAnalitica = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 bg-background py-12">
      <div className="container mx-auto px-4 space-y-4">
        <h1 className="text-3xl font-bold text-foreground">PEP Química Analítica</h1>
        <p className="text-muted-foreground">
          Programa de Ensaios de Proficiência em Química Analítica.
        </p>
        <p>
          Este PEP abrange ensaios de quantificação de substâncias em diversas matrizes. Possibilita demonstrar rastreabilidade metrológica e atender exigências regulatórias.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default PEPQuimicaAnalitica;
