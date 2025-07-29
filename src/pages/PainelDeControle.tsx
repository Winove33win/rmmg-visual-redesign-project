import { useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface DocumentData {
  id: number;
  name: string;
}

interface UserData {
  id: number;
  name: string;
  email: string;
  status: string;
  documents: DocumentData[];
  forms: string[];
}

const initialData: UserData[] = [
  {
    id: 1,
    name: 'Fernando',
    email: 'fernando@winove.com.br',
    status: 'Concluído',
    documents: [
      { id: 1, name: 'certificado1.pdf' },
      { id: 2, name: 'formularioA.pdf' }
    ],
    forms: []
  },
  {
    id: 2,
    name: 'Maria',
    email: 'maria@example.com',
    status: 'Em análise',
    documents: [],
    forms: []
  }
];

export default function PainelDeControle() {
  const [authenticated, setAuthenticated] = useState(
    typeof window !== 'undefined' && localStorage.getItem('admin') === 'true'
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<UserData[]>(initialData);
  const fileInputs = useRef<Record<number, HTMLInputElement | null>>({});

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'fernando@winove.com.br' && password === 'rmmg') {
      localStorage.setItem('admin', 'true');
      setAuthenticated(true);
    }
  };

  const addDocuments = (id: number, files: FileList | null) => {
    if (!files) return;
    setUsers(users.map(u =>
      u.id === id
        ? {
            ...u,
            documents: [
              ...u.documents,
              ...Array.from(files).map((f, index) => ({ id: Date.now() + index, name: f.name }))
            ]
          }
        : u
    ));
  };

  const addForm = (id: number) => {
    const name = window.prompt('Nome do formulário');
    if (!name) return;
    setUsers(users.map(u => (u.id === id ? { ...u, forms: [...u.forms, name] } : u)));
  };

  const updateStatus = (id: number, status: string) => {
    setUsers(users.map(u => (u.id === id ? { ...u, status } : u)));
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Login do Painel de Controle</CardTitle>
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
                    <TableHead>Documentos</TableHead>
                    <TableHead>Formulários</TableHead>
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
                        <Badge>{u.documents.length}</Badge>
                        <input
                          type="file"
                          multiple
                          className="hidden"
                          ref={el => (fileInputs.current[u.id] = el)}
                          onChange={e => addDocuments(u.id, e.target.files)}
                        />
                      </TableCell>
                      <TableCell>
                        <Badge>{u.forms.length}</Badge>
                      </TableCell>
                      <TableCell className="space-x-2">
                        <Button size="sm" onClick={() => fileInputs.current[u.id]?.click()}>
                          Adicionar Documento
                        </Button>
                        <Button size="sm" variant="secondary" onClick={() => addForm(u.id)}>
                          Adicionar Formulário
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
