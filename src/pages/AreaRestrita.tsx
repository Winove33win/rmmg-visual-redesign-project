import { Lock, User, Calendar, Download, BarChart3, Bell, Settings, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AreaRestrita = () => {
  const pepPrograms = [
    {
      title: "PEP Ruído Ambiental",
      status: "Ativo",
      participants: 45,
      nextRound: "2025-03-15",
      description: "Programa de Ensaios de Proficiência para medição de ruído ambiental"
    },
    {
      title: "PEP Análise Química",
      status: "Em Preparação",
      participants: 32,
      nextRound: "2025-04-20",
      description: "Programa focado em análises químicas ambientais"
    },
    {
      title: "PEP Metrologia Dimensional",
      status: "Planejado",
      participants: 18,
      nextRound: "2025-05-10",
      description: "Ensaios de proficiência para instrumentos dimensionais"
    }
  ];

  const recentActivities = [
    {
      type: "Resultado",
      title: "PEP Ruído Ambiental - Rodada 2024/04",
      date: "2024-12-15",
      status: "Disponível"
    },
    {
      type: "Inscrição",
      title: "Nova rodada PEP Análise Química",
      date: "2024-12-10",
      status: "Aberta"
    },
    {
      type: "Relatório",
      title: "Relatório Técnico PEP-RA-2024",
      date: "2024-12-08",
      status: "Publicado"
    }
  ];

  const resources = [
    {
      title: "Manual do Participante",
      description: "Guia completo para participação nos programas PEP",
      type: "PDF",
      size: "2.5 MB"
    },
    {
      title: "Formulário de Inscrição",
      description: "Formulário para inscrição em novos programas",
      type: "PDF",
      size: "850 KB"
    },
    {
      title: "Critérios de Avaliação",
      description: "Documento com critérios de avaliação dos resultados",
      type: "PDF",
      size: "1.2 MB"
    },
    {
      title: "Histórico de Resultados",
      description: "Compilação de resultados históricos",
      type: "Excel",
      size: "3.8 MB"
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
              <div className="mx-auto w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-6">
                <Lock className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold">
                Área Restrita PEP
              </h1>
              <p className="text-xl lg:text-2xl opacity-90">
                Portal exclusivo para participantes dos Programas de Ensaios de Proficiência da RMMG. 
                Acesse resultados, relatórios e gerencie sua participação.
              </p>
            </div>
          </div>
        </section>

        {/* Login Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <Card className="shadow-elegant">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Acesso ao Portal</CardTitle>
                  <p className="text-muted-foreground">
                    Entre com suas credenciais para acessar o portal PEP
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail ou CPF/CNPJ</Label>
                    <Input id="email" placeholder="Digite seu e-mail ou documento" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" type="password" placeholder="Digite sua senha" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Entrar no Portal
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="text-center space-y-2">
                    <a href="#" className="text-sm text-primary hover:underline block">
                      Esqueci minha senha
                    </a>
                    <a href="#" className="text-sm text-primary hover:underline block">
                      Primeiro acesso? Ative sua conta
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Programs Overview */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Programas Disponíveis
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Conheça os programas de ensaios de proficiência oferecidos pela RMMG
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pepPrograms.map((program, index) => (
                <Card key={index} className="bg-background hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <Badge 
                        variant={program.status === 'Ativo' ? 'default' : program.status === 'Em Preparação' ? 'secondary' : 'outline'}
                      >
                        {program.status}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{program.participants} participantes</span>
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{program.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Próxima rodada:</span>
                      <span className="text-sm font-semibold">{new Date(program.nextRound).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <Button 
                      className="w-full" 
                      variant={program.status === 'Ativo' ? 'default' : 'outline'}
                      disabled={program.status === 'Planejado'}
                    >
                      {program.status === 'Ativo' ? 'Acessar Programa' : program.status === 'Em Preparação' ? 'Manifestar Interesse' : 'Em Breve'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portal Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="atividades" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12">
                <TabsTrigger value="atividades">Atividades Recentes</TabsTrigger>
                <TabsTrigger value="recursos">Recursos</TabsTrigger>
                <TabsTrigger value="suporte">Suporte</TabsTrigger>
              </TabsList>
              
              <TabsContent value="atividades" className="space-y-8">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                    Atividades Recentes
                  </h3>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                {activity.type === 'Resultado' && <BarChart3 className="h-6 w-6 text-white" />}
                                {activity.type === 'Inscrição' && <User className="h-6 w-6 text-white" />}
                                {activity.type === 'Relatório' && <Download className="h-6 w-6 text-white" />}
                              </div>
                              <div>
                                <h4 className="font-semibold">{activity.title}</h4>
                                <div className="flex items-center space-x-2 mt-1">
                                  <Badge variant="outline" className="text-xs">{activity.type}</Badge>
                                  <span className="text-sm text-muted-foreground">
                                    {new Date(activity.date).toLocaleDateString('pt-BR')}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <Badge 
                              variant={activity.status === 'Disponível' ? 'default' : activity.status === 'Aberta' ? 'secondary' : 'outline'}
                            >
                              {activity.status}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="recursos" className="space-y-8">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
                    Recursos e Downloads
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {resources.map((resource, index) => (
                      <Card key={index} className="hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                <Download className="h-6 w-6 text-white" />
                              </div>
                              <div>
                                <h4 className="font-semibold">{resource.title}</h4>
                                <p className="text-sm text-muted-foreground">{resource.description}</p>
                                <div className="flex items-center space-x-2 mt-1">
                                  <Badge variant="outline" className="text-xs">{resource.type}</Badge>
                                  <span className="text-xs text-muted-foreground">{resource.size}</span>
                                </div>
                              </div>
                            </div>
                            <Button size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="suporte" className="space-y-8">
                <div className="max-w-2xl mx-auto text-center space-y-8">
                  <h3 className="text-2xl font-bold text-foreground">
                    Suporte Técnico
                  </h3>
                  <p className="text-muted-foreground">
                    Nossa equipe está pronta para ajudá-lo com qualquer dúvida sobre os programas PEP
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="text-center">
                      <CardContent className="p-6 space-y-4">
                        <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <Bell className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-semibold">Contato Direto</h4>
                        <p className="text-sm text-muted-foreground">
                          pep@rmmg.org.br<br />
                          (31) 2512-4800
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="text-center">
                      <CardContent className="p-6 space-y-4">
                        <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <Settings className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="font-semibold">Suporte Técnico</h4>
                        <p className="text-sm text-muted-foreground">
                          Horário de atendimento:<br />
                          Segunda a Sexta, 8h às 17h
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    Abrir Chamado de Suporte
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AreaRestrita;