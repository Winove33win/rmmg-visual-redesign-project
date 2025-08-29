import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

const PEPQuimicaAnalitica = () => {
  const ensaiosContemplados = [
    { parametro: "Metais Pesados (Cd, Cr, Cu, Ni, Pb, Zn)", unidade: "mg/L", faixaConcentracao: "0,5 a 50", volumeAproximado: "100 mL", tipoMaterial: "Água sintética", quantidadeAmostras: "2" },
    { parametro: "Nitrogênio Total", unidade: "mg/L", faixaConcentracao: "5 a 100", volumeAproximado: "100 mL", tipoMaterial: "Água sintética", quantidadeAmostras: "2" },
    { parametro: "Fósforo Total", unidade: "mg/L", faixaConcentracao: "1 a 20", volumeAproximado: "100 mL", tipoMaterial: "Água sintética", quantidadeAmostras: "2" },
    { parametro: "DQO", unidade: "mg/L", faixaConcentracao: "50 a 500", volumeAproximado: "100 mL", tipoMaterial: "Água sintética", quantidadeAmostras: "2" }
  ];

  const metodosSugeridos = [
    { parametro: "Metais Pesados", metodologia: "Espectrometria de Absorção Atômica / ICP-OES / ICP-MS" },
    { parametro: "Nitrogênio Total", metodologia: "Método Kjeldahl / Método de Persulfato" },
    { parametro: "Fósforo Total", metodologia: "Método do Ácido Ascórbico / Método do Cloreto Estanoso" },
    { parametro: "DQO", metodologia: "Método do Refluxo Fechado / Método do Refluxo Aberto" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600/90 to-blue-800 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <FlaskConical className="h-12 w-12 text-white/90" />
          </div>
          <Badge className="bg-white/20 text-white border-white/30 mb-4">2025</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PEP QUÍMICA ANALÍTICA</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Programa de Ensaios de Proficiência em análises químicas quantitativas
          </p>
        </div>
      </div>

      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4 space-y-12">
          
          {/* Descrição */}
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Este PEP abrange ensaios de quantificação de substâncias em diversas matrizes, proporcionando aos laboratórios 
              participantes a oportunidade de avaliar e melhorar a qualidade de suas análises químicas.
            </p>
            <p className="text-muted-foreground">
              O programa possibilita demonstrar rastreabilidade metrológica e atender exigências regulatórias, 
              sendo fundamental para laboratórios que realizam análises ambientais e de controle de qualidade.
            </p>
          </div>

          {/* Ensaios Contemplados */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">ENSAIOS CONTEMPLADOS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-muted">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-muted p-3 text-left font-semibold">Parâmetro</th>
                      <th className="border border-muted p-3 text-left font-semibold">Unidade</th>
                      <th className="border border-muted p-3 text-left font-semibold">Faixa de Concentração</th>
                      <th className="border border-muted p-3 text-left font-semibold">Volume Aproximado</th>
                      <th className="border border-muted p-3 text-left font-semibold">Tipo de Material</th>
                      <th className="border border-muted p-3 text-left font-semibold">Quantidade de Amostras</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ensaiosContemplados.map((ensaio, index) => (
                      <tr key={index}>
                        <td className="border border-muted p-3">{ensaio.parametro}</td>
                        <td className="border border-muted p-3">{ensaio.unidade}</td>
                        <td className="border border-muted p-3">{ensaio.faixaConcentracao}</td>
                        <td className="border border-muted p-3">{ensaio.volumeAproximado}</td>
                        <td className="border border-muted p-3">{ensaio.tipoMaterial}</td>
                        <td className="border border-muted p-3 text-center">{ensaio.quantidadeAmostras}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Métodos Sugeridos */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">MÉTODOS SUGERIDOS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-muted">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="border border-muted p-3 text-left font-semibold">Parâmetro</th>
                      <th className="border border-muted p-3 text-left font-semibold">Metodologia/técnica sugerida</th>
                    </tr>
                  </thead>
                  <tbody>
                    {metodosSugeridos.map((metodo, index) => (
                      <tr key={index}>
                        <td className="border border-muted p-3 font-medium">{metodo.parametro}</td>
                        <td className="border border-muted p-3">{metodo.metodologia}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Informações Adicionais */}
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="text-muted-foreground mb-4">
                <strong>Descontos especiais para afiliados!</strong> Seja um afiliado você também!
              </p>
              <p className="text-muted-foreground mb-4">
                Descontos para afiliados da rede REMESP e Rede Paraná Metrológica!
              </p>
              <p className="text-sm text-muted-foreground">
                Caso tenha alguma dúvida, entre em contato conosco pelo e-mail: 
                <a href="mailto:pep@rmmg.org.br" className="text-primary hover:underline ml-1">
                  pep@rmmg.org.br
                </a>
              </p>
            </div>
          </div>

          {/* Botão Voltar */}
          <div className="text-center">
            <Button asChild variant="outline" className="px-8">
              <Link to="/peps">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para PEPs
              </Link>
            </Button>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PEPQuimicaAnalitica;
