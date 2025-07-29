import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

interface Ensaio {
  parametro: string;
  unidade: string;
  faixaConcentracao: string;
  volume: string;
  tipoMaterial: string;
  frascos: string;
}

interface PEPProgram {
  id: string;
  nome: string;
  descricao: string;
  localAmostragem?: string;
  linkFormulario?: string;
  linkProtocolo?: string;
  imagem?: string;
  tabelaEnsaios?: Ensaio[];
  statusInscricao?: string;
}

export default function PEPProgram() {
  const { id } = useParams<{ id: string }>();
  const [pep, setPep] = useState<PEPProgram | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPEP() {
      const { data } = await supabase
        .from('peps')
        .select('*')
        .eq('id', id)
        .single();

      if (data) {
        // Dados extras fictícios para exemplo
        const extra: Partial<PEPProgram> = {
          localAmostragem: 'Região metropolitana de Belo Horizonte/MG',
          linkFormulario: 'https://forms.gle/ZtLH6ChcdYDEHFAa7',
          linkProtocolo: '/protocolos/exemplo.pdf',
          imagem: '/api/placeholder/600/400',
          tabelaEnsaios: [
            {
              parametro: 'Coliformes totais',
              unidade: 'UFC/mL',
              faixaConcentracao: '1-100',
              volume: '500 mL',
              tipoMaterial: 'Água',
              frascos: '2'
            }
          ],
          statusInscricao: 'Aberta'
        };
        setPep({ ...(data as PEPProgram), ...extra });
      }
      setLoading(false);
    }
    fetchPEP();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">Carregando...</div>
    );
  }

  if (!pep) {
    return (
      <div className="min-h-screen flex items-center justify-center">Programa não encontrado.</div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-6">
          {pep.nome.toUpperCase()}
        </h1>

        <div className="text-center mb-8">
          {pep.linkFormulario && (
            <a href={pep.linkFormulario} target="_blank" rel="noopener noreferrer">
              <Button size="lg">Inscrever-se</Button>
            </a>
          )}
        </div>

        {pep.localAmostragem && (
          <p className="text-center text-lg mb-4">{pep.localAmostragem}</p>
        )}

        {pep.linkProtocolo && (
          <div className="text-center mb-6">
            <a
              href={pep.linkProtocolo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Ver Protocolo
            </a>
          </div>
        )}

        {pep.imagem && (
          <div className="mb-8 flex justify-center">
            <img
              src={pep.imagem}
              alt="Imagem ilustrativa"
              className="rounded shadow-md max-w-full"
            />
          </div>
        )}

        {pep.tabelaEnsaios && (
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border border-border">
              <thead className="bg-muted">
                <tr>
                  <th className="px-2 py-1 text-left">Parâmetro</th>
                  <th className="px-2 py-1 text-left">Unidade</th>
                  <th className="px-2 py-1 text-left">Faixa de concentração</th>
                  <th className="px-2 py-1 text-left">Volume</th>
                  <th className="px-2 py-1 text-left">Tipo de material</th>
                  <th className="px-2 py-1 text-left">Frascos/participante</th>
                </tr>
              </thead>
              <tbody>
                {pep.tabelaEnsaios.map((ensaio, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="px-2 py-1">{ensaio.parametro}</td>
                    <td className="px-2 py-1">{ensaio.unidade}</td>
                    <td className="px-2 py-1">{ensaio.faixaConcentracao}</td>
                    <td className="px-2 py-1">{ensaio.volume}</td>
                    <td className="px-2 py-1">{ensaio.tipoMaterial}</td>
                    <td className="px-2 py-1">{ensaio.frascos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {pep.linkProtocolo && (
          <div className="text-center space-y-4">
            <p>Para maiores informações consulte o protocolo da rodada.</p>
            <a href={pep.linkProtocolo} target="_blank" rel="noopener noreferrer">
              <Button variant="destructive">Protocolo</Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
