import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Sebraetec from "./pages/Sebraetec";
import Treinamentos from "./pages/Treinamentos";
import TreinamentoDetalhes from "./pages/TreinamentoDetalhes";
import Blog from "./pages/Blog";
import Reconhecimento from "./pages/Reconhecimento";
import LaboratoriosReconhecidos from "./pages/LaboratoriosReconhecidos";
import LaboratoriosEmProcesso from "./pages/LaboratoriosEmProcesso";
import InformativoReconhecimento from "./pages/InformativoReconhecimento";
import Biblioteca from "./pages/Biblioteca";
import Afiliacao from "./pages/Afiliacao";
import Consultoria from "./pages/Consultoria";
import AuditoriaInterna from "./pages/AuditoriaInterna";
import AreaRestrita from "./pages/AreaRestrita";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import User from "./pages/User";
import PEPs from "./pages/PEPs";
import PEPForm from "./pages/PEPForm";
import PEPProgram from "./pages/PEPProgram";
import PEPMicrobiologia from "./pages/PEPMicrobiologia";
import PEPRuido from "./pages/PEPRuido";
import PEPOleos from "./pages/PEPOleos";
import PEPQuimicaAnalitica from "./pages/PEPQuimicaAnalitica";
import PEPMetrologiaDimensional from "./pages/PEPMetrologiaDimensional";
import MemberProfile from "./pages/MemberProfile";
import NotFound from "./pages/NotFound";
import PainelDeControle from "./pages/PainelDeControle";
import ImersaoIndustria from "./pages/ImersaoIndustria";
import { Suspense, lazy } from "react";

const GestaoQualidadeLaboratorios = lazy(() => import("./pages/servicos/GestaoQualidadeLaboratorios"));
const SistemaGestaoQualidade = lazy(() => import("./pages/servicos/SistemaGestaoQualidade"));
const PlanoAderencia = lazy(() => import("./pages/servicos/PlanoAderencia"));
const GestaoProjetos = lazy(() => import("./pages/servicos/GestaoProjetos"));
const AdequacaoAlimentos = lazy(() => import("./pages/servicos/AdequacaoAlimentos"));
const LGPD = lazy(() => import("./pages/servicos/LGPD"));
const PoliticasPrivacidade = lazy(() => import("./pages/PoliticasPrivacidade"));
const QuemSomos = lazy(() => import("./pages/QuemSomos"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sebraetec" element={<Sebraetec />} />
          <Route path="/treinamentos" element={<Treinamentos />} />
          <Route path="/treinamento/:slug" element={<TreinamentoDetalhes />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/reconhecimento" element={<Reconhecimento />} />
            <Route path="/reconhecimento/laboratorios-reconhecidos" element={<LaboratoriosReconhecidos />} />
            <Route path="/reconhecimento/laboratorios-em-processo" element={<LaboratoriosEmProcesso />} />
            <Route path="/reconhecimento/informativo" element={<InformativoReconhecimento />} />
            <Route path="/reconhecimento/biblioteca" element={<Biblioteca />} />
            <Route path="/afiliacao" element={<Afiliacao />} />
            <Route path="/consultoria" element={<Consultoria />} />
            <Route path="/auditoria" element={<AuditoriaInterna />} />
            <Route path="/area-restrita" element={<AreaRestrita />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/login" element={<Login />} />
            <Route path="/usuario" element={<User />} />
            <Route path="/perfil" element={<MemberProfile />} />
            <Route path="/peps" element={<PEPs />} />
            <Route path="/peps/microbiologia" element={<PEPMicrobiologia />} />
            <Route path="/peps/ruido" element={<PEPRuido />} />
            <Route path="/peps/oleos" element={<PEPOleos />} />
            <Route path="/peps/quimica-analitica" element={<PEPQuimicaAnalitica />} />
            <Route path="/peps/metrologia-dimensional" element={<PEPMetrologiaDimensional />} />
            <Route path="/pep-program/:id" element={<PEPProgram />} />
            <Route path="/pep/:id" element={<PEPForm />} />
            <Route path="/painel-de-controle" element={<PainelDeControle />} />
            <Route path="/servicos/gestao-qualidade-laboratorios" element={<Suspense fallback={<div>Loading...</div>}><GestaoQualidadeLaboratorios /></Suspense>} />
            <Route path="/servicos/sistema-gestao-qualidade" element={<Suspense fallback={<div>Loading...</div>}><SistemaGestaoQualidade /></Suspense>} />
            <Route path="/servicos/plano-aderencia" element={<Suspense fallback={<div>Loading...</div>}><PlanoAderencia /></Suspense>} />
            <Route path="/servicos/gestao-projetos" element={<Suspense fallback={<div>Loading...</div>}><GestaoProjetos /></Suspense>} />
            <Route path="/servicos/adequacao-alimentos" element={<Suspense fallback={<div>Loading...</div>}><AdequacaoAlimentos /></Suspense>} />
            <Route path="/servicos/lgpd" element={<Suspense fallback={<div>Loading...</div>}><LGPD /></Suspense>} />
            <Route path="/politicas-privacidade" element={<Suspense fallback={<div>Loading...</div>}><PoliticasPrivacidade /></Suspense>} />
            <Route path="/quem-somos" element={<Suspense fallback={<div>Loading...</div>}><QuemSomos /></Suspense>} />
            <Route path="/imersao-industria" element={<ImersaoIndustria />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
