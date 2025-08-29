import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, FileText, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const PEPOleos = () => {
  const ensaiosContemplados = [
    { parametro: "Óleos e Graxas", unidade: "mg/L", faixaConcentracao: "10 a 600", volumeAproximado: "400 mL", tipoMaterial: "Água para calibração", quantidadeAmostras: "2" },
    { parametro: "Óleos e Graxas - Gordura animal", unidade: "mg/L", faixaConcentracao: "10 a 600", volumeAproximado: "400 mL", tipoMaterial: "Água para calibração", quantidadeAmostras: "2" },
    { parametro: "Óleos e Graxas - Hidrocarbonetos", unidade: "mg/L", faixaConcentracao: "10 a 600", volumeAproximado: "400 mL", tipoMaterial: "Água para calibração", quantidadeAmostras: "2" }
  ];

  const metodosSugeridos = [
    { parametro: "Óleos e Graxas Totais", metodologia: "Método/técnica sugerida: Método Partição Gravimétrica Líquido - Líquido / Método de Extração Soxhlet / Método de Extração Soxhlet" },
    { parametro: "Óleos vegetais e Gordura animal", metodologia: "Cálculo Matemático" },
    { parametro: "Óleos Minerais - Hidrocarbonetos", metodologia: "Método com Sílica Gel após a Quantificação de Óleos e Graxas" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary/90 to-primary text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-4">2025</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PEP ÓLEOS E GRAXAS</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Programa de Ensaios de Proficiência para fortalecer a matriz laboratorial
          </p>
        </div>
      </div>

      <main className="flex-1 bg-background py-12">
        <div className="container mx-auto px-4 space-y-12">
          
          {/* Descrição */}
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              O PEP da RMMG tem como objetivo fortalecer a matriz laboratorial, propiciando a participação de laboratórios em 
              comparações interlaboratoriais como meio de aprimorar a qualidade de seus serviços.
            </p>
            <p className="text-muted-foreground">
              O PEP Óleos e Graxas é acreditado pela Cgcre na norma ABNT NBR ISO/IEC 17043 sob o número PEP-0019.
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
                      <th className="border border-muted p-3 text-left font-semibold">Quantidade de Amostras por Participante</th>
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
                Descontos para afiliados da rede REMESP e Rede Paranaá Metrológica!
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

export default PEPOleos;
