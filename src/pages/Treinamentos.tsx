import { BookOpen, Users, Award, Clock, Calendar, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Treinamentos = () => {
  const courses = [
    {
      title: "Fundamentos de Metrologia",
      category: "Básico",
      duration: "16 horas",
      format: "Presencial",
      price: "R$ 450,00",
      rating: 4.9,
      description: "Conceitos fundamentais de metrologia, sistemas de medição e rastreabilidade.",
      topics: ["Sistema Internacional de Unidades", "Incerteza de Medição", "Rastreabilidade", "Calibração"]
    },
    {
      title: "ISO 9001:2015 - Implementação",
      category: "Intermediário",
      duration: "24 horas",
      format: "Híbrido",
      price: "R$ 750,00",
      rating: 4.8,
      description: "Implementação completa do Sistema de Gestão da Qualidade ISO 9001.",
      topics: ["Requisitos da Norma", "Documentação", "Auditoria Interna", "Melhoria Contínua"]
    },
    {
      title: "Calibração de Instrumentos",
      category: "Avançado",
      duration: "32 horas",
      format: "Presencial",
      price: "R$ 1.200,00",
      rating: 4.9,
      description: "Técnicas avançadas de calibração para diferentes tipos de instrumentos.",
      topics: ["Instrumentos Dimensionais", "Equipamentos Elétricos", "Instrumentos de Pressão", "Certificados de Calibração"]
    },
    {
      title: "Estatística Aplicada à Metrologia",
      category: "Avançado",
      duration: "20 horas",
      format: "Online",
      price: "R$ 550,00",
      rating: 4.7,
      description: "Aplicação de métodos estatísticos em análises metrológicas.",
      topics: ["Análise de Dados", "Controle Estatístico", "Validação de Métodos", "Comparação Interlaboratorial"]
    }
  ];

  const nextEvents = [
    {
      course: "Fundamentos de Metrologia",
      date: "15-16 Jan 2025",
      location: "Belo Horizonte - MG",
      spots: "8 vagas disponíveis"
    },
    {
      course: "ISO 9001:2015 - Implementação",
      date: "22-24 Jan 2025",
      location: "Online",
      spots: "12 vagas disponíveis"
    },
    {
      course: "Calibração de Instrumentos",
      date: "05-09 Fev 2025",
      location: "São Paulo - SP",
      spots: "5 vagas disponíveis"
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Certificação Reconhecida",
      description: "Certificados com validade nacional e reconhecimento no mercado"
    },
    {
      icon: Users,
      title: "Instrutores Especialistas",
      description: "Profissionais com ampla experiência prática e acadêmica"
    },
    {
      icon: BookOpen,
      title: "Material Didático Completo",
      description: "Apostilas, exercícios práticos e acesso a conteúdo digital"
    },
    {
      icon: Star,
      title: "Qualidade Comprovada",
      description: "Mais de 5.000 profissionais treinados com alta satisfação"
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
                Treinamentos Especializados
              </h1>
              <p className="text-xl lg:text-2xl opacity-90">
                Capacite sua equipe com conhecimentos técnicos de excelência em metrologia, 
                qualidade e gestão. Cursos presenciais, online e in-company.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-rmmg-red hover:bg-gray-100">
                  Ver Calendário de Cursos
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-rmmg-red">
                  Treinamento In-Company
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Por que Escolher Nossos Treinamentos?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Mais de 25 anos formando profissionais de excelência no mercado
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Nossos Cursos
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Programas de capacitação desenvolvidos por especialistas para diferentes níveis de conhecimento
              </p>
            </div>

            <Tabs defaultValue="todos" className="w-full">
              <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto mb-12">
                <TabsTrigger value="todos">Todos</TabsTrigger>
                <TabsTrigger value="basico">Básico</TabsTrigger>
                <TabsTrigger value="intermediario">Intermediário</TabsTrigger>
                <TabsTrigger value="avancado">Avançado</TabsTrigger>
              </TabsList>
              
              <TabsContent value="todos" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {courses.map((course, index) => (
                    <Card key={index} className="bg-background hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-4">
                          <Badge variant={course.category === 'Básico' ? 'secondary' : course.category === 'Intermediário' ? 'default' : 'destructive'}>
                            {course.category}
                          </Badge>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-muted-foreground">{course.rating}</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                        <p className="text-muted-foreground">{course.description}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                            <span>{course.format}</span>
                          </div>
                          <div className="text-primary font-semibold">
                            {course.price}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Tópicos Abordados:</h4>
                          <div className="flex flex-wrap gap-2">
                            {course.topics.map((topic, topicIndex) => (
                              <Badge key={topicIndex} variant="outline" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <Button className="w-full">Inscrever-se</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Próximos Eventos */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Próximos Eventos</h2>
                <div className="space-y-4">
                  {nextEvents.map((event, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start">
                          <div className="space-y-2">
                            <h3 className="font-semibold text-lg">{event.course}</h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{event.date}</span>
                              </div>
                              <span>{event.location}</span>
                            </div>
                            <p className="text-sm text-green-600">{event.spots}</p>
                          </div>
                          <Button size="sm">Inscrever</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* In-Company */}
              <div className="bg-secondary rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Treinamento In-Company
                </h2>
                <p className="text-muted-foreground mb-6">
                  Leve nossos treinamentos diretamente para sua empresa. 
                  Conteúdo personalizado e focado nas necessidades específicas da sua equipe.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Conteúdo adaptado à realidade da empresa</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Economia em deslocamento e hospedagem</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Certificação para toda a equipe</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Flexibilidade de datas e horários</span>
                  </div>
                </div>
                <Button className="w-full">Solicitar Proposta</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Treinamentos;