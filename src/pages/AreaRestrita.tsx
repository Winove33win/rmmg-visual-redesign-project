import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Lock, User, Calendar, Download, BarChart3, Bell, Settings, ArrowRight, FileText, Award, Search, Archive, Edit, Phone, Mail, Building } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";

const AreaRestrita = () => {
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [participations, setParticipations] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    fetchParticipations();
  }, [user]);

  const fetchParticipations = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('participacoes')
        .select(`
          *,
          peps (
            nome,
            descricao
          )
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setParticipations(data || []);
    } catch (error: any) {
      toast({
        title: 'Erro ao carregar participações',
        description: error.message,
        variant: 'destructive'
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center h-64">
          <p>Carregando...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  // Simular certificados baseados nas participações concluídas
  let certificates = participations
    .filter(p => p.status === 'Concluído')
    .map(p => ({
      id: p.id,
      name: `Certificado - ${p.peps?.nome}`,
      issueDate: p.data_participacao,
      status: 'Válido',
      type: 'PDF',
      size: '1.2 MB'
    }));

  // Inserir certificados de exemplo para o usuário fernando@winove.com.br
  if (user?.email === 'fernando@winove.com.br' && certificates.length < 5) {
    const extra = Array.from({ length: 5 - certificates.length }, (_, i) => ({
      id: `demo-${i}`,
      name: `Certificado - Exemplo ${i + 1}`,
      issueDate: new Date().toISOString(),
      status: 'Válido',
      type: 'PDF',
      size: '1.2 MB'
    }));
    certificates = [...certificates, ...extra];
  }

  const filteredCertificates = certificates.filter(cert =>
    cert.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="mx-auto w-20 h-20 bg-white/20 backdrop-blur rounded-full flex items-center justify-center mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Certificados e Histórico de Participações
              </h1>
              <p className="text-lg lg:text-xl opacity-90 max-w-2xl mx-auto">
                Acompanhe aqui todos os certificados emitidos e o histórico das suas participações nos programas da RMMG.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              
              {/* User Information Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      Informações do Usuário
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Nome Completo</Label>
                        <p className="text-sm font-semibold">{profile?.nome_completo}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          E-mail
                        </Label>
                        <p className="text-sm">{profile?.email}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          Telefone
                        </Label>
                        <p className="text-sm">{profile?.telefone || 'Não informado'}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                          <Building className="h-3 w-3" />
                          CNPJ
                        </Label>
                        <p className="text-sm">{profile?.cnpj}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full mt-6"
                      onClick={() => navigate('/usuario')}
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Editar Informações
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content Area */}
              <div className="lg:col-span-3 space-y-8">
                
                {/* Search and Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Buscar certificados..." 
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    <Archive className="h-4 w-4 mr-2" />
                    Baixar Todos (ZIP)
                  </Button>
                </div>

                {/* Certificates Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Certificados Disponíveis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {filteredCertificates.length > 0 ? (
                      <div className="space-y-4">
                        {filteredCertificates.map((certificate) => (
                          <div 
                            key={certificate.id}
                            className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                          >
                            <div className="flex items-center space-x-4">
                              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                <FileText className="h-6 w-6 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold">{certificate.name}</h4>
                                <div className="flex items-center space-x-3 mt-1">
                                  <span className="text-sm text-muted-foreground">
                                    Emitido em: {new Date(certificate.issueDate).toLocaleDateString('pt-BR')}
                                  </span>
                                  <Badge 
                                    variant={certificate.status === 'Válido' ? 'default' : 'destructive'}
                                    className="text-xs"
                                  >
                                    {certificate.status}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Nenhum certificado encontrado</h3>
                        <p className="text-muted-foreground">
                          Você ainda não possui certificados emitidos ou nenhum corresponde à sua busca.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Participation History Section */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Histórico de Participações
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {participations.length > 0 ? (
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Programa</TableHead>
                              <TableHead>Data de Participação</TableHead>
                              <TableHead>Status</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {participations.map((participation) => (
                              <TableRow key={participation.id} className="hover:bg-muted/50">
                                <TableCell className="font-medium">
                                  {participation.peps?.nome}
                                </TableCell>
                                <TableCell>
                                  {new Date(participation.data_participacao).toLocaleDateString('pt-BR')}
                                </TableCell>
                                <TableCell>
                                  <Badge 
                                    variant={
                                      participation.status === 'Concluído' ? 'default' : 
                                      participation.status === 'Em análise' ? 'secondary' : 'outline'
                                    }
                                  >
                                    {participation.status}
                                  </Badge>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Nenhuma participação encontrada</h3>
                        <p className="text-muted-foreground mb-4">
                          Você ainda não possui histórico de participações.
                        </p>
                        <Button onClick={() => navigate('/peps')}>
                          Ver Programas Disponíveis
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AreaRestrita;