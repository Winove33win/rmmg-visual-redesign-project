import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";

const PEPRuido = () => {
  const ensaiosContemplados = [
    { parametro: "Nível de Pressão Sonora", unidade: "dB(A)", faixaConcentracao: "40 a 85", volumeAproximado: "Digital", tipoMaterial: "Arquivo de áudio", quantidadeAmostras: "5" },
    { parametro: "Análise de Frequência", unidade: "dB", faixaConcentracao: "125 Hz a 8 kHz", volumeAproximado: "Digital", tipoMaterial: "Arquivo de áudio", quantidadeAmostras: "3" },
    { parametro: "Ruído de Fundo", unidade: "dB(A)", faixaConcentracao: "25 a 45", volumeAproximado: "Digital", tipoMaterial: "Arquivo de áudio", quantidadeAmostras: "2" }
  ];

  const metodosSugeridos = [
    { parametro: "Nível de Pressão Sonora", metodologia: "NBR 10151 / NBR 10152 / IEC 61672" },
    { parametro: "Análise de Frequência", metodologia: "NBR IEC 61260 / Análise em bandas de oitava e terço de oitava" },
    { parametro: "Ruído de Fundo", metodologia: "NBR 10151 / Medição em ambiente controlado" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600/90 to-green-800 text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Volume2 className="h-12 w-12 text-white/90" />
          </div>
          <Badge className="bg-white/20 text-white border-white/30 mb-4">2025</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PEP RUÍDO</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Programa de Ensaios de Proficiência em Medição de Ruído Ambiental
          </p>
        </div>
      </div>

      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4 space-y-12">
          
          {/* Descrição */}
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Este programa compara medições de níveis de pressão sonora em diferentes faixas de frequência, 
              proporcionando avaliação da competência técnica em medições acústicas.
            </p>
            <p className="text-muted-foreground">
              É indicado para laboratórios e consultorias que atuam com avaliação de ruído ocupacional e ambiental, 
              auxiliando na demonstração de competência técnica e conformidade com normas nacionais e internacionais.
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
                      <th className="border border-muted p-3 text-left font-semibold">Faixa de Medição</th>
                      <th className="border border-muted p-3 text-left font-semibold">Formato</th>
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

export default PEPRuido;
