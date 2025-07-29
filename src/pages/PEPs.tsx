import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { FileText, Users, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import { useToast } from '@/hooks/use-toast';

interface PEP {
  id: string;
  nome: string;
  descricao: string;
  ativo: boolean;
}

export default function PEPs() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [peps, setPeps] = useState<PEP[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPEPs();
  }, []);

  const fetchPEPs = async () => {
    try {
      const { data, error } = await supabase
        .from('peps')
        .select('*')
        .eq('ativo', true)
        .order('nome');

      if (error) throw error;
      setPeps(data || []);
    } catch (error: any) {
      toast({
        title: 'Erro ao carregar PEPs',
        description: error.message,
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background py-12">
          <div className="container mx-auto px-4">
            <div className="text-center">Carregando programas...</div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Programas de Ensaios de Proficiência
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça nossos PEPs e participe dos programas que melhor atendem às necessidades do seu laboratório
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {peps.map((pep) => (
              <Card key={pep.id} className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <FileText className="h-8 w-8 text-primary" />
                    <Badge variant="secondary">
                      <Users className="h-3 w-3 mr-1" />
                      Ativo
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{pep.nome}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="flex-1 mb-4">
                    {pep.descricao}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      Inscrições abertas
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        asChild 
                        className="flex-1"
                        disabled={!user}
                      >
                        <Link to={`/pep/${pep.id}`}>
                          {user ? 'Participar' : 'Login necessário'}
                        </Link>
                      </Button>
                    </div>
                    
                    {!user && (
                      <p className="text-xs text-muted-foreground text-center">
                        <Link to="/auth" className="text-primary hover:underline">
                          Faça login
                        </Link>{' '}
                        para participar deste programa
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {peps.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Nenhum programa disponível no momento.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}