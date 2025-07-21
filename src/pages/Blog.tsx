import { Search, Calendar, Clock, ArrowRight, Filter, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const Blog = () => {
  const featuredPost = {
    title: "COP30 - 30ª Conferência das Nações Unidas sobre as Mudanças Climáticas em Belém do Pará",
    excerpt: "Análise completa dos impactos da conferência climática na área de metrologia ambiental e sustentabilidade. Como as decisões tomadas afetarão os laboratórios e a indústria brasileira.",
    category: "Meio Ambiente",
    readTime: "8 min",
    date: "2024-12-15",
    author: "Dr. Carlos Silva",
    image: "/api/placeholder/800/400"
  };

  const posts = [
    {
      title: "Qual a diferença entre Reconhecimento de Competência e Acreditação pela CGCRE?",
      excerpt: "Entenda as principais diferenças entre esses dois importantes processos de validação técnica e como eles impactam na credibilidade dos laboratórios.",
      category: "Qualidade",
      readTime: "5 min",
      date: "2024-12-10",
      author: "Eng. Maria Santos"
    },
    {
      title: "Medir para Evoluir: A Importância da Metrologia nos Negócios",
      excerpt: "Como a precisão nas medições pode impactar diretamente nos resultados empresariais e na competitividade no mercado global.",
      category: "Metrologia",
      readTime: "6 min",
      date: "2024-12-05",
      author: "Dr. Roberto Lima"
    },
    {
      title: "ISO 9001:2015 - Principais Mudanças e Implementação",
      excerpt: "Guia completo sobre as principais mudanças da norma ISO 9001:2015 e como implementá-las na sua organização.",
      category: "Qualidade",
      readTime: "7 min",
      date: "2024-12-01",
      author: "Eng. Ana Paula"
    },
    {
      title: "Calibração de Instrumentos: Quando e Por que Fazer",
      excerpt: "Tudo que você precisa saber sobre calibração de instrumentos de medição e sua importância para a qualidade dos processos.",
      category: "Metrologia",
      readTime: "4 min",
      date: "2024-11-28",
      author: "Tec. João Pedro"
    },
    {
      title: "Programa de Ensaios de Proficiência: Benefícios e Implementação",
      excerpt: "Como os ensaios de proficiência podem melhorar a confiabilidade dos seus resultados analíticos.",
      category: "Ensaios",
      readTime: "6 min",
      date: "2024-11-25",
      author: "Dra. Fernanda Costa"
    },
    {
      title: "Tendências Tecnológicas em Metrologia para 2025",
      excerpt: "As principais inovações e tendências que irão transformar o setor de metrologia no próximo ano.",
      category: "Tecnologia",
      readTime: "8 min",
      date: "2024-11-20",
      author: "Dr. Paulo Mendes"
    }
  ];

  const categories = [
    { name: "Todos", count: 25 },
    { name: "Metrologia", count: 8 },
    { name: "Qualidade", count: 6 },
    { name: "Ensaios", count: 4 },
    { name: "Meio Ambiente", count: 3 },
    { name: "Tecnologia", count: 4 }
  ];

  const tags = ["ISO 9001", "Calibração", "CGCRE", "Sustentabilidade", "Inovação", "Treinamento"];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold">
                Blog RMMG
              </h1>
              <p className="text-xl lg:text-2xl opacity-90">
                Conhecimento técnico, insights do mercado e as últimas novidades 
                do mundo da metrologia e qualidade.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input 
                    placeholder="Buscar artigos..." 
                    className="pl-12 pr-4 py-3 bg-white/10 backdrop-blur border-white/20 text-white placeholder:text-gray-300"
                  />
                  <Button size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-rmmg-red hover:bg-gray-100">
                    Buscar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-8">Artigo em Destaque</h2>
              <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary/10 to-accent/10" />
                  <div className="p-8 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <Badge className="bg-primary text-white">{featuredPost.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(featuredPost.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground line-clamp-2">
                      {featuredPost.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-3">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Por {featuredPost.author}</span>
                      <Button>
                        Ler Artigo Completo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Sidebar */}
              <div className="space-y-8">
                {/* Categories */}
                <Card className="bg-background">
                  <CardHeader>
                    <h3 className="text-lg font-semibold flex items-center">
                      <Filter className="h-5 w-5 mr-2" />
                      Categorias
                    </h3>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between p-2 rounded hover:bg-secondary transition-colors cursor-pointer">
                        <span className="text-sm">{category.name}</span>
                        <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Tags */}
                <Card className="bg-background">
                  <CardHeader>
                    <h3 className="text-lg font-semibold flex items-center">
                      <Tag className="h-5 w-5 mr-2" />
                      Tags Populares
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="bg-primary text-white">
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Newsletter</h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm opacity-90">
                      Receba as últimas novidades e artigos técnicos diretamente no seu e-mail.
                    </p>
                    <Input placeholder="Seu e-mail" className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" />
                    <Button className="w-full bg-white text-primary hover:bg-gray-100">
                      Inscrever-se
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Posts Grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {posts.map((post, index) => (
                    <Card key={index} className="bg-background hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10" />
                      <CardHeader className="space-y-2">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <Badge variant="secondary">{post.category}</Badge>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(post.date).toLocaleDateString('pt-BR')}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                          {post.title}
                        </h3>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">Por {post.author}</span>
                          <Button variant="ghost" size="sm">
                            Ler Mais
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12">
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">Anterior</Button>
                    <Button size="sm">1</Button>
                    <Button variant="outline" size="sm">2</Button>
                    <Button variant="outline" size="sm">3</Button>
                    <Button variant="outline" size="sm">Próximo</Button>
                  </div>
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

export default Blog;