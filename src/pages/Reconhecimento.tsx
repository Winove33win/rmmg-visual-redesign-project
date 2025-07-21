import { Shield, Award, CheckCircle, FileText, Calendar, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Reconhecimento = () => {
  const certifications = [
    {
      icon: Shield,
      title: "ISO 9001:2015",
      authority: "Bureau Veritas",
      description: "Sistema de Gestão da Qualidade certificado internacionalmente",
      validity: "2024-2027",
      benefits: [
        "Processo de melhoria contínua",
        "Controle rigoroso da qualidade",
        "Satisfação do cliente garantida",
        "Conformidade internacional"
      ]
    },
    {
      icon: Award,
      title: "ISO/IEC 17043:2010",
      authority: "CGCRE/Inmetro",
      description: "Acreditação para Programa de Ensaios de Proficiência",
      validity: "2024-2026",
      benefits: [
        "Reconhecimento técnico nacional",
        "Rastreabilidade assegurada",
        "Competência técnica comprovada",
        "Comparação interlaboratorial"
      ]
    }
  ];

  const process = [
    {
      number: "01",
      title: "Preparação",
      description: "Implementação dos requisitos normativos e adequação dos processos"
    },
    {
      number: "02",
      title: "Auditoria",
      description: "Avaliação por organismos acreditados e reconhecidos internacionalmente"
    },
    {
      number: "03",
      title: "Certificação",
      description: "Emissão do certificado após aprovação em todos os critérios"
    },
    {
      number: "04",
      title: "Manutenção",
      description: "Auditorias periódicas para manutenção da certificação"
    }
  ];

  const documents = [
    {
      title: "Certificado ISO 9001:2015",
      description: "Certificado completo emitido pela Bureau Veritas",
      type: "PDF",
      size: "2.1 MB"
    },
    {
      title: "Acreditação CGCRE",
      description: "Documento de acreditação para ISO/IEC 17043",
      type: "PDF",
      size: "1.8 MB"
    },
    {
      title: "Escopo de Acreditação",
      description: "Detalhamento das competências técnicas acreditadas",
      type: "PDF",
      size: "1.2 MB"
    },
    {
      title: "Política da Qualidade",
      description: "Documento que define nossa política de qualidade",
      type: "PDF",
      size: "850 KB"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold">
                Reconhecimentos e Certificações
              </h1>
              <p className="text-xl lg:text-2xl opacity-90">
                Nosso compromisso com a excelência é reconhecido por organismos nacionais 
                e internacionais, garantindo a confiabilidade dos nossos serviços.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-rmmg-red hover:bg-gray-100">
                  Ver Certificados
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-rmmg-red">
                  Política da Qualidade
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Nossas Certificações
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Reconhecimentos que atestam nossa competência técnica e compromisso com a qualidade
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6">
                      <cert.icon className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{cert.title}</CardTitle>
                    <Badge className="mx-auto bg-green-100 text-green-800">
                      Válido até {cert.validity}
                    </Badge>
                    <p className="text-muted-foreground mt-4">{cert.description}</p>
                    <p className="text-sm font-semibold">Certificado por: {cert.authority}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-4">Benefícios da Certificação:</h4>
                      <div className="space-y-3">
                        {cert.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full">Ver Certificado Completo</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Information Tabs */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="diferenca" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12">
                <TabsTrigger value="diferenca">Diferenças</TabsTrigger>
                <TabsTrigger value="processo">Processo</TabsTrigger>
                <TabsTrigger value="manutencao">Manutenção</TabsTrigger>
              </TabsList>
              
              <TabsContent value="diferenca" className="space-y-8">
                <Card className="bg-background">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">
                      Reconhecimento vs Acreditação pela CGCRE
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-primary">Reconhecimento de Competência</h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                            <p className="text-sm">Processo simplificado de avaliação</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                            <p className="text-sm">Focado em competências específicas</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                            <p className="text-sm">Menor tempo de implementação</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                            <p className="text-sm">Adequado para escopo limitado</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-accent">Acreditação CGCRE</h3>
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                            <p className="text-sm">Processo completo e rigoroso</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                            <p className="text-sm">Reconhecimento internacional</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                            <p className="text-sm">Maior tempo de implementação</p>
                          </div>
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                            <p className="text-sm">Adequado para escopo amplo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="processo" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {process.map((step, index) => (
                    <Card key={index} className="bg-background text-center">
                      <CardHeader>
                        <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                          <span className="text-white font-bold text-lg">{step.number}</span>
                        </div>
                        <CardTitle className="text-lg">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="manutencao" className="space-y-8">
                <Card className="bg-background">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">
                      Manutenção das Certificações
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center space-y-4">
                        <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                          <Calendar className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold">Auditorias Periódicas</h3>
                        <p className="text-sm text-muted-foreground">
                          Auditorias anuais para verificação da conformidade contínua
                        </p>
                      </div>
                      <div className="text-center space-y-4">
                        <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                          <FileText className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold">Documentação Atualizada</h3>
                        <p className="text-sm text-muted-foreground">
                          Manutenção constante da documentação e procedimentos
                        </p>
                      </div>
                      <div className="text-center space-y-4">
                        <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                          <CheckCircle className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold">Melhoria Contínua</h3>
                        <p className="text-sm text-muted-foreground">
                          Implementação contínua de melhorias nos processos
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Documentos Disponíveis
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Acesse nossos certificados e documentos de qualidade
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {documents.map((doc, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                          <FileText className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{doc.title}</h3>
                          <p className="text-sm text-muted-foreground">{doc.description}</p>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="outline" className="text-xs">{doc.type}</Badge>
                            <span className="text-xs text-muted-foreground">{doc.size}</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm">Download</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Reconhecimento;