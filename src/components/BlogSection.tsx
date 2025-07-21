import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BlogSection = () => {
  const posts = [
    {
      title: "COP30 - 30ª Conferência das Nações Unidas sobre as Mudanças Climáticas em Belém do Pará",
      excerpt: "Análise dos impactos da conferência climática na área de metrologia ambiental e sustentabilidade.",
      category: "Meio Ambiente",
      readTime: "3 min",
      date: "2024-12-15",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Qual a diferença entre Reconhecimento de Competência e Acreditação pela CGCRE?",
      excerpt: "Entenda as principais diferenças entre esses dois importantes processos de validação técnica.",
      category: "Qualidade",
      readTime: "3 min",
      date: "2024-12-10",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Medir para Evoluir: A Importância da Metrologia nos Negócios",
      excerpt: "Como a precisão nas medições pode impactar diretamente nos resultados empresariais.",
      category: "Metrologia",
      readTime: "2 min",
      date: "2024-12-05",
      image: "/api/placeholder/400/200"
    }
  ];

  const categories = ["Metrologia", "Qualidade", "Treinamentos", "Meio Ambiente", "Tecnologia"];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Últimas do Blog
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Fique por dentro das novidades, tendências e conhecimentos técnicos 
            do mundo da metrologia e qualidade.
          </p>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary text-white">
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                >
                  Ler Mais
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Ver Todos os Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;