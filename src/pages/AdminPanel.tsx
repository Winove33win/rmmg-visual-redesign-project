import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

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

export default function AdminPanel() {
  const [users, setUsers] = useState<UserData[]>(initialData);

  const addCertificate = (id: number) => {
    setUsers(users.map(u => (u.id === id ? { ...u, certificates: u.certificates + 1 } : u)));
  };

  const updateStatus = (id: number, status: string) => {
    setUsers(users.map(u => (u.id === id ? { ...u, status } : u)));
  };

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
