import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface UserData {
  id: number;
  name: string;
  email: string;
  status: string;
  certificates: number;
}

const initialData: UserData[] = [
  { id: 1, name: 'Fernando', email: 'fernando@winove.com.br', status: 'Concluído', certificates: 5 },
  { id: 2, name: 'Maria', email: 'maria@example.com', status: 'Em análise', certificates: 2 }
];

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(
    typeof window !== 'undefined' && localStorage.getItem('admin') === 'true'
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<UserData[]>(initialData);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'rmmg@rmmg.com.br' && password === 'rmmg') {
      localStorage.setItem('admin', 'true');
      setAuthenticated(true);
    }
  };

  const addCertificate = (id: number) => {
    setUsers(users.map(u => (u.id === id ? { ...u, certificates: u.certificates + 1 } : u)));
  };

  const updateStatus = (id: number, status: string) => {
    setUsers(users.map(u => (u.id === id ? { ...u, status } : u)));
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Login de Administrador</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
              <Button type="submit" className="w-full">Entrar</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle>Painel de Controle</CardTitle>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Certificados</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map(u => (
                    <TableRow key={u.id}>
                      <TableCell>{u.name}</TableCell>
                      <TableCell>{u.email}</TableCell>
                      <TableCell>
                        <select
                          className="border rounded px-2 py-1 text-sm"
                          value={u.status}
                          onChange={e => updateStatus(u.id, e.target.value)}
                        >
                          <option value="Em análise">Em análise</option>
                          <option value="Concluído">Concluído</option>
                          <option value="Rejeitado">Rejeitado</option>
                        </select>
                      </TableCell>
                      <TableCell>
                        <Badge>{u.certificates}</Badge>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" onClick={() => addCertificate(u.id)}>
                          Adicionar Certificado
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
