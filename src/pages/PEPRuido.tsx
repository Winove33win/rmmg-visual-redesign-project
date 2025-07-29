import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PEPRuido = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 bg-background py-12">
      <div className="container mx-auto px-4 space-y-4">
        <h1 className="text-3xl font-bold text-foreground">PEP Ruído</h1>
        <p className="text-muted-foreground">
          Programa de Ensaios de Proficiência em Medição de Ruído Ambiental.
        </p>
        <p>
          Este programa compara medições de níveis de pressão sonora em diferentes faixas de frequência. É indicado para laboratórios e consultorias que atuam com avaliação de ruído ocupacional e ambiental.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default PEPRuido;
