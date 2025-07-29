-- Corrigir avisos de segurança: adicionar search_path às funções
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.get_profile_by_cnpj(cnpj_input TEXT)
RETURNS TABLE (
  id UUID,
  user_id UUID,
  nome_completo TEXT,
  email TEXT,
  telefone TEXT,
  cnpj TEXT
) 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
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
$$;

-- Criar função para trigger de criação automática de perfil
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, nome_completo, email, cnpj)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data ->> 'nome_completo', ''),
    new.email,
    COALESCE(new.raw_user_meta_data ->> 'cnpj', '')
  );
  RETURN new;
END;
$$;

-- Trigger para criar perfil automaticamente quando usuário se registra
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();