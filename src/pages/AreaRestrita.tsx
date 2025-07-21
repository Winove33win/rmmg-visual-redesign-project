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

const AreaRestrita = () => {
  const userInfo = {
    name: "João Silva Santos",
    email: "joao.silva@empresa.com.br",
    phone: "(31) 99999-9999",
    cnpj: "12.345.678/0001-90"
  };

  const certificates = [
    {
      id: 1,
      name: "Certificado - PEP Microbiologia",
      issueDate: "2025-06-30",
      status: "Válido",
      type: "PDF",
      size: "1.2 MB"
    },
    {
      id: 2,
      name: "Certificado - PEP Ruído Ambiental",
      issueDate: "2025-03-15",
      status: "Válido",
      type: "PDF",
      size: "980 KB"
    },
    {
      id: 3,
      name: "Certificado - PEP Análise Química",
      issueDate: "2024-12-20",
      status: "Expirado",
      type: "PDF",
      size: "1.1 MB"
    }
  ];

  const participationHistory = [
    {
      id: 1,
      program: "PEP Microbiologia",
      participationDate: "2025-06-30",
      status: "Concluído"
    },
    {
      id: 2,
      program: "PEP Ruído Ambiental",
      participationDate: "2025-03-15",
      status: "Concluído"
    },
    {
      id: 3,
      program: "PEP Óleos e Graxas",
      participationDate: "2024-12-01",
      status: "Em análise"
    },
    {
      id: 4,
      program: "PEP Análise Química",
      participationDate: "2024-09-15",
      status: "Concluído"
    }
  ];

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
                        <p className="text-sm font-semibold">{userInfo.name}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          E-mail
                        </Label>
                        <p className="text-sm">{userInfo.email}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          Telefone
                        </Label>
                        <p className="text-sm">{userInfo.phone}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                          <Building className="h-3 w-3" />
                          CNPJ
                        </Label>
                        <p className="text-sm">{userInfo.cnpj}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-6">
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
                    {certificates.length > 0 ? (
                      <div className="space-y-4">
                        {certificates.map((certificate) => (
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
                          Você ainda não possui certificados emitidos.
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
                    {participationHistory.length > 0 ? (
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
                            {participationHistory.map((participation) => (
                              <TableRow key={participation.id} className="hover:bg-muted/50">
                                <TableCell className="font-medium">
                                  {participation.program}
                                </TableCell>
                                <TableCell>
                                  {new Date(participation.participationDate).toLocaleDateString('pt-BR')}
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
                        <p className="text-muted-foreground">
                          Você ainda não possui histórico de participações.
                        </p>
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