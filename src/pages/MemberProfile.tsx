import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

const mockData = {
  nomeExibicao: 'Fernando de Araújo',
  nome: 'Fernando',
  sobrenome: 'de Araújo',
  email: 'fernando@winove.com.br',
  telefone: '+55 19 99448-3368',
  empresa: 'Winove',
  cnpj: '29.900.423/0001-40',
  rua: '1212',
  complemento: '1212',
  cidade: 'Jaguariúna',
  estado: 'SP',
  cep: '13820-000',
  pais: 'Brasil',
  loginEmail: 'criacao@winove.com.br'
};

export default function MemberProfile() {
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (!user && loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4 text-center">Carregando...</div>
        </main>
        <Footer />
      </div>
    );
  }

  const data = {
    ...mockData,
    nomeExibicao: profile?.nome_completo || mockData.nomeExibicao,
    nome: profile?.nome_completo?.split(' ')[0] || mockData.nome,
    sobrenome:
      profile?.nome_completo?.split(' ').slice(1).join(' ') || mockData.sobrenome,
    email: profile?.email || mockData.email,
    telefone: profile?.telefone || mockData.telefone,
    cnpj: profile?.cnpj || mockData.cnpj,
    loginEmail: user?.email || mockData.loginEmail
  };

  const field = (label: string, value?: string) => (
    <div className="flex flex-col">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-medium">
        {value?.trim() ? value : 'Não informado'}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 space-y-6 max-w-3xl">
          <header className="space-y-2">
            <h1 className="text-3xl font-bold">Informações de Cadastro</h1>
            <p className="text-muted-foreground">
              Olá, {data.nomeExibicao}! Aqui estão seus dados cadastrados.
            </p>
          </header>

          <Card>
            <CardHeader>
              <CardTitle>Conta e Visibilidade</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {field('Nome de exibição', data.nomeExibicao)}
              {field('Cargo / Título', data.empresa)}
              {field('Visibilidade', 'Privado')}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {field('Nome', data.nome)}
              {field('Sobrenome', data.sobrenome)}
              {field('E-mail', data.email)}
              {field('Telefone', data.telefone)}
              {field('Empresa', data.empresa)}
              {field('CNPJ', data.cnpj)}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Endereço</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {field('Rua', data.rua)}
              {field('Complemento', data.complemento)}
              {field('Cidade', data.cidade)}
              {field('Estado', data.estado)}
              {field('CEP', data.cep)}
              {field('País', data.pais)}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {field('E-mail de login', data.loginEmail)}
              {field('Senha', '••••••••')}
            </CardContent>
          </Card>

          <div className="pt-4">
            <Button onClick={() => navigate('/area-restrita')}>Voltar</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
