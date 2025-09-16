import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Users, MapPin, Star, CheckCircle, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TreinamentoDetalhes = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Dados dos cursos (em uma aplicação real, isso viria de uma API)
  const courses = {
    "fundamentos-metrologia": {
      title: "Fundamentos de Metrologia",
      category: "Básico",
      duration: "16 horas",
      format: "Presencial",
      price: "R$ 450,00",
      rating: 4.9,
      description: "Conceitos fundamentais de metrologia, sistemas de medição e rastreabilidade.",
      fullDescription: "Este curso aborda os princípios básicos da metrologia, fornecendo uma base sólida para profissionais que trabalham com medições. Os participantes aprenderão sobre sistemas de medição, incerteza, rastreabilidade e calibração.",
      topics: ["Sistema Internacional de Unidades", "Incerteza de Medição", "Rastreabilidade", "Calibração"],
      objectives: [
        "Compreender os fundamentos da metrologia",
        "Aplicar conceitos de incerteza de medição",
        "Entender a importância da rastreabilidade",
        "Realizar calibrações básicas"
      ],
      targetAudience: "Técnicos em metrologia, engenheiros, analistas de qualidade e profissionais que trabalham com medições.",
      prerequisites: "Conhecimentos básicos de matemática e física.",
      methodology: "Aulas expositivas, exercícios práticos, estudos de caso e laboratório.",
      instructor: "Dr. João Silva - 15 anos de experiência em metrologia",
      nextDates: [
        { date: "15-16 Jan 2025", location: "Belo Horizonte - MG", spots: 8 },
        { date: "12-13 Mar 2025", location: "São Paulo - SP", spots: 12 },
        { date: "14-15 Mai 2025", location: "Rio de Janeiro - RJ", spots: 10 }
      ]
    },
    "iso-9001-implementacao": {
      title: "ISO 9001:2015 - Implementação",
      category: "Intermediário",
      duration: "24 horas",
      format: "Híbrido",
      price: "R$ 750,00",
      rating: 4.8,
      description: "Implementação completa do Sistema de Gestão da Qualidade ISO 9001.",
      fullDescription: "Curso completo para implementação da norma ISO 9001:2015, abordando todos os requisitos e fornecendo ferramentas práticas para estabelecer um Sistema de Gestão da Qualidade eficaz.",
      topics: ["Requisitos da Norma", "Documentação", "Auditoria Interna", "Melhoria Contínua"],
      objectives: [
        "Dominar os requisitos da ISO 9001:2015",
        "Implementar um SGQ eficaz",
        "Realizar auditorias internas",
        "Estabelecer processos de melhoria contínua"
      ],
      targetAudience: "Gestores da qualidade, consultores, auditores e profissionais responsáveis pela implementação de SGQ.",
      prerequisites: "Conhecimento básico sobre sistemas de gestão da qualidade.",
      methodology: "Aulas teóricas, workshops práticos, simulações de auditoria e estudos de caso.",
      instructor: "Eng. Maria Santos - Auditora líder ISO 9001 com 20 anos de experiência",
      nextDates: [
        { date: "22-24 Jan 2025", location: "Online", spots: 12 },
        { date: "19-21 Mar 2025", location: "Belo Horizonte - MG", spots: 8 },
        { date: "21-23 Mai 2025", location: "Online", spots: 15 }
      ]
    },
    "calibracao-instrumentos": {
      title: "Calibração de Instrumentos",
      category: "Avançado",
      duration: "32 horas",
      format: "Presencial",
      price: "R$ 1.200,00",
      rating: 4.9,
      description: "Técnicas avançadas de calibração para diferentes tipos de instrumentos.",
      fullDescription: "Curso avançado focado em técnicas específicas de calibração, abordando diferentes tipos de instrumentos e equipamentos de medição utilizados na indústria.",
      topics: ["Instrumentos Dimensionais", "Equipamentos Elétricos", "Instrumentos de Pressão", "Certificados de Calibração"],
      objectives: [
        "Dominar técnicas avançadas de calibração",
        "Calibrar diferentes tipos de instrumentos",
        "Emitir certificados de calibração",
        "Calcular incertezas de medição"
      ],
      targetAudience: "Técnicos em metrologia, engenheiros e profissionais responsáveis por calibração de instrumentos.",
      prerequisites: "Conhecimento em metrologia básica e experiência com instrumentos de medição.",
      methodology: "Aulas práticas em laboratório, demonstrações, exercícios de calibração e análise de certificados.",
      instructor: "Eng. Carlos Oliveira - Especialista em calibração com 18 anos de experiência",
      nextDates: [
        { date: "05-09 Fev 2025", location: "São Paulo - SP", spots: 5 },
        { date: "07-11 Abr 2025", location: "Belo Horizonte - MG", spots: 6 },
        { date: "02-06 Jun 2025", location: "Porto Alegre - RS", spots: 8 }
      ]
    },
    "estatistica-metrologia": {
      title: "Estatística Aplicada à Metrologia",
      category: "Avançado",
      duration: "20 horas",
      format: "Online",
      price: "R$ 550,00",
      rating: 4.7,
      description: "Aplicação de métodos estatísticos em análises metrológicas.",
      fullDescription: "Curso focado na aplicação de ferramentas estatísticas em metrologia, abordando análise de dados, controle estatístico e validação de métodos de medição.",
      topics: ["Análise de Dados", "Controle Estatístico", "Validação de Métodos", "Comparação Interlaboratorial"],
      objectives: [
        "Aplicar métodos estatísticos em metrologia",
        "Analisar dados de medição",
        "Implementar controle estatístico",
        "Validar métodos de medição"
      ],
      targetAudience: "Metrólegos, engenheiros, analistas e profissionais que trabalham com análise de dados metrológicos.",
      prerequisites: "Conhecimentos básicos de estatística e metrologia.",
      methodology: "Aulas online ao vivo, exercícios práticos com software, estudos de caso e simulações.",
      instructor: "Dr. Ana Costa - Doutora em Estatística com especialização em metrologia",
      nextDates: [
        { date: "10-14 Mar 2025", location: "Online", spots: 20 },
        { date: "12-16 Mai 2025", location: "Online", spots: 20 },
        { date: "14-18 Jul 2025", location: "Online", spots: 20 }
      ]
    }
  };

  const course = courses[slug as keyof typeof courses];

  if (!course) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Curso não encontrado</h1>
            <Button onClick={() => navigate("/treinamentos")}>
              Voltar para Treinamentos
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-12 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/20 mb-6"
                onClick={() => navigate("/treinamentos")}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para Treinamentos
              </Button>
              
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1">
                  <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
                    {course.category}
                  </Badge>
                  <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                    {course.title}
                  </h1>
                  <p className="text-xl opacity-90 mb-6">
                    {course.fullDescription}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-4 w-4" />
                      <span>{course.format}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur rounded-lg p-6 min-w-[300px]">
                  <div className="text-3xl font-bold mb-4">{course.price}</div>
                  <Button className="w-full bg-white text-rmmg-red hover:bg-gray-100 mb-4">
                    Inscrever-se Agora
                  </Button>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Duração:</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Formato:</span>
                      <span>{course.format}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Nível:</span>
                      <span>{course.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Objetivos */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Objetivos do Curso</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {course.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Conteúdo Programático */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Conteúdo Programático</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {course.topics.map((topic, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-secondary rounded-lg">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                              {index + 1}
                            </div>
                            <span className="font-medium">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Metodologia */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Metodologia</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{course.methodology}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Informações do Curso */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Informações do Curso</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Público-Alvo:</h4>
                        <p className="text-sm text-muted-foreground">{course.targetAudience}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Pré-requisitos:</h4>
                        <p className="text-sm text-muted-foreground">{course.prerequisites}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Instrutor:</h4>
                        <p className="text-sm text-muted-foreground">{course.instructor}</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Próximas Turmas */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Próximas Turmas</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {course.nextDates.map((date, index) => (
                        <div key={index} className="border rounded-lg p-4 space-y-2">
                          <div className="flex items-center space-x-2 text-sm">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span className="font-medium">{date.date}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span>{date.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-green-600">
                            <Users className="h-4 w-4" />
                            <span>{date.spots} vagas disponíveis</span>
                          </div>
                          <Button size="sm" className="w-full mt-2">
                            Inscrever-se
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TreinamentoDetalhes;