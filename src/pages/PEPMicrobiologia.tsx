import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PEPMicrobiologia = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1 bg-background py-12">
      <div className="container mx-auto px-4 space-y-4">
        <h1 className="text-3xl font-bold text-foreground">PEP Microbiologia</h1>
        <p className="text-muted-foreground">
          Programa de Ensaios de Proficiência em Microbiologia para laboratórios de análise.
        </p>
        <p>
          O PEP de Microbiologia avalia a competência dos participantes na determinação de microrganismos em diferentes matrizes. Participar do programa ajuda a validar métodos, identificar desvios e comprovar a qualidade dos resultados analíticos.
        </p>
      </div>
    </main>
    <Footer />
  </div>
);

export default PEPMicrobiologia;
