import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';

export default function Auth() {
  const { signIn, signUp, user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Carregando...
      </div>
    );
  }

  const alreadyLoggedIn = !!user;

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const { error } = await signIn(email, password);

    if (error) {
      toast({
        title: 'Erro ao fazer login',
        description: error.message,
        variant: 'destructive'
      });
    } else {
      toast({
        title: 'Login realizado com sucesso!',
        description: 'Redirecionando...'
      });
      navigate('/area-restrita');
    }

    setLoading(false);
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const nome_completo = formData.get('nome_completo') as string;
    const cnpj = formData.get('cnpj') as string;
    const telefone = formData.get('telefone') as string;

    const { error } = await signUp(email, password, {
      nome_completo,
      cnpj,
      telefone
    });

    if (error) {
      toast({
        title: 'Erro ao criar conta',
        description: error.message,
        variant: 'destructive'
      });
    } else {
      const { error: signInError } = await signIn(email, password);
      if (signInError) {
        toast({
          title: 'Conta criada, mas não foi possível fazer login',
          description: signInError.message,
          variant: 'destructive'
        });
      } else {
        toast({
          title: 'Conta criada com sucesso!',
          description: 'Redirecionando...'
        });
        navigate('/area-restrita');
      }
    }

    setLoading(false);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {alreadyLoggedIn && (
              <div className="mb-4 text-center text-sm text-muted-foreground">
                Você já está logado. Caso queira trocar de conta, faça login abaixo.
              </div>
            )}
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Entrar</TabsTrigger>
                <TabsTrigger value="signup">Cadastrar</TabsTrigger>
              </TabsList>

              <TabsContent value="signin">
                <Card>
                  <CardHeader>
                    <CardTitle>Entrar na sua conta</CardTitle>
                    <CardDescription>
                      Acesse sua área restrita usando suas credenciais
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSignIn} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="signin-email">E-mail</Label>
                        <Input
                          id="signin-email"
                          name="email"
                          type="email"
                          required
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signin-password">Senha</Label>
                        <Input
                          id="signin-password"
                          name="password"
                          type="password"
                          required
                          placeholder="••••••••"
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? 'Entrando...' : 'Entrar'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="signup">
                <Card>
                  <CardHeader>
                    <CardTitle>Criar nova conta</CardTitle>
                    <CardDescription>
                      Cadastre-se para acessar os programas PEP
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSignUp} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="signup-nome">Nome Completo</Label>
                        <Input
                          id="signup-nome"
                          name="nome_completo"
                          type="text"
                          required
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-cnpj">CNPJ</Label>
                        <Input
                          id="signup-cnpj"
                          name="cnpj"
                          type="text"
                          required
                          placeholder="00.000.000/0000-00"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-telefone">Telefone</Label>
                        <Input
                          id="signup-telefone"
                          name="telefone"
                          type="tel"
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-email">E-mail</Label>
                        <Input
                          id="signup-email"
                          name="email"
                          type="email"
                          required
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="signup-password">Senha</Label>
                        <Input
                          id="signup-password"
                          name="password"
                          type="password"
                          required
                          placeholder="••••••••"
                        />
                      </div>
                      <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? 'Criando conta...' : 'Criar conta'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}