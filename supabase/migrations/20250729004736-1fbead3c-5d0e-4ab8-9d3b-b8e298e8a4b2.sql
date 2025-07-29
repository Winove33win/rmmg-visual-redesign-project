-- Criar tabela de perfis de usuários
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  nome_completo TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT,
  cnpj TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Habilitar RLS na tabela profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Criar tabela de PEPs disponíveis
CREATE TABLE public.peps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL,
  descricao TEXT NOT NULL,
  ativo BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Habilitar RLS e permitir leitura pública
ALTER TABLE public.peps ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active PEPs" ON public.peps
  FOR SELECT USING (ativo = true);

-- Criar tabela de participações em PEPs
CREATE TABLE public.participacoes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  pep_id UUID REFERENCES public.peps(id) ON DELETE CASCADE NOT NULL,
  status TEXT DEFAULT 'Em análise' CHECK (status IN ('Em análise', 'Concluído', 'Rejeitado')),
  data_participacao TIMESTAMP WITH TIME ZONE DEFAULT now(),
  dados_formulario JSONB,
  certificado_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Habilitar RLS na tabela participações
ALTER TABLE public.participacoes ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para participações
CREATE POLICY "Users can view their own participations" ON public.participacoes
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own participations" ON public.participacoes
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Criar função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers para atualizar updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_participacoes_updated_at
  BEFORE UPDATE ON public.participacoes
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Inserir PEPs de exemplo
INSERT INTO public.peps (nome, descricao) VALUES
  ('PEP Microbiologia', 'Programa de Ensaios de Proficiência em Microbiologia para laboratórios de análise.'),
  ('PEP Ruído', 'Programa de Ensaios de Proficiência em Medição de Ruído Ambiental.'),
  ('PEP Óleos', 'Programa de Ensaios de Proficiência em Análise de Óleos Lubrificantes.'),
  ('PEP Química Analítica', 'Programa de Ensaios de Proficiência em Química Analítica.'),
  ('PEP Metrologia Dimensional', 'Programa de Ensaios de Proficiência em Metrologia Dimensional.');

-- Criar função para buscar perfil por CNPJ
CREATE OR REPLACE FUNCTION public.get_profile_by_cnpj(cnpj_input TEXT)
RETURNS TABLE (
  id UUID,
  user_id UUID,
  nome_completo TEXT,
  email TEXT,
  telefone TEXT,
  cnpj TEXT
) 
SECURITY DEFINER
AS $$
BEGIN
  RETURN QUERY
  SELECT 
    p.id,
    p.user_id,
    p.nome_completo,
    p.email,
    p.telefone,
    p.cnpj
  FROM public.profiles p
  WHERE p.cnpj = cnpj_input;
END;
$$ LANGUAGE plpgsql;