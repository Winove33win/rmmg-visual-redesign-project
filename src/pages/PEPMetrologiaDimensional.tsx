import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PEPMetrologiaDimensional = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 bg-background py-12">
      <div className="container mx-auto px-4 space-y-4">
        <h1 className="text-3xl font-bold text-foreground">PEP Metrologia Dimensional</h1>
        <p className="text-muted-foreground">
          Programa de Ensaios de Proficiência em Metrologia Dimensional.
        </p>
        <p>
          O PEP de Metrologia Dimensional avalia a capacidade de medições lineares e angulares. Garante conformidade com padrões nacionais e internacionais e auxilia na melhoria contínua dos processos de medição.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default PEPMetrologiaDimensional;
