import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, FileText } from 'lucide-react';
import Header from '@/components/Header';
import { useToast } from '@/hooks/use-toast';

interface PEP {
  id: string;
  nome: string;
  descricao: string;
}

export default function PEPForm() {
  const { id } = useParams<{ id: string }>();
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [pep, setPep] = useState<PEP | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    
    if (id) {
      fetchPEP();
    }
  }, [id, user]);

  const fetchPEP = async () => {
    try {
      const { data, error } = await supabase
        .from('peps')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setPep(data);
    } catch (error: any) {
      toast({
        title: 'Erro ao carregar programa',
        description: error.message,
        variant: 'destructive'
      });
      navigate('/peps');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user || !pep) return;

    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const dados_formulario = {
      empresa: formData.get('empresa') as string,
      responsavel_tecnico: formData.get('responsavel_tecnico') as string,
      contato: formData.get('contato') as string,
      endereco: formData.get('endereco') as string,
      observacoes: formData.get('observacoes') as string,
      data_submissao: new Date().toISOString()
    };

    try {
      const { error } = await supabase
        .from('participacoes')
        .insert({
          user_id: user.id,
          pep_id: pep.id,
          dados_formulario,
          status: 'Em análise'
        });

      if (error) throw error;

      toast({
        title: 'Participação enviada com sucesso!',
        description: 'Sua solicitação está em análise. Você pode acompanhar o status na área restrita.'
      });

      navigate('/area-restrita');
    } catch (error: any) {
      toast({
        title: 'Erro ao enviar participação',
        description: error.message,
        variant: 'destructive'
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (!user) {
    return null;
  }

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">Carregando formulário...</div>
          </div>
        </div>
      </>
    );
  }

  if (!pep) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">Programa não encontrado.</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate('/peps')}
            className="mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar aos programas
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Informações do programa */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">Programa</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2">{pep.nome}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {pep.descricao}
                  </p>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Seus dados:</h4>
                    <div className="text-sm text-muted-foreground">
                      <p><strong>Nome:</strong> {profile?.nome_completo}</p>
                      <p><strong>E-mail:</strong> {profile?.email}</p>
                      <p><strong>CNPJ:</strong> {profile?.cnpj}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Formulário */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Formulário de Participação</CardTitle>
                  <CardDescription>
                    Preencha os dados abaixo para participar do programa {pep.nome}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="empresa">Nome da Empresa</Label>
                        <Input
                          id="empresa"
                          name="empresa"
                          required
                          placeholder="Razão social da empresa"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="responsavel_tecnico">Responsável Técnico</Label>
                        <Input
                          id="responsavel_tecnico"
                          name="responsavel_tecnico"
                          required
                          placeholder="Nome do responsável técnico"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contato">Contato</Label>
                      <Input
                        id="contato"
                        name="contato"
                        type="tel"
                        required
                        placeholder="Telefone de contato"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="endereco">Endereço Completo</Label>
                      <Textarea
                        id="endereco"
                        name="endereco"
                        required
                        placeholder="Endereço completo da empresa"
                        rows={3}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="observacoes">Observações (opcional)</Label>
                      <Textarea
                        id="observacoes"
                        name="observacoes"
                        placeholder="Informações adicionais sobre a participação"
                        rows={4}
                      />
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        Ao enviar este formulário, você concorda em participar do programa {pep.nome} 
                        e autoriza o contato para esclarecimentos adicionais.
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={submitting}
                    >
                      {submitting ? 'Enviando...' : 'Enviar Participação'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}