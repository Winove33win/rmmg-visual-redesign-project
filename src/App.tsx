import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Sebraetec from "./pages/Sebraetec";
import Treinamentos from "./pages/Treinamentos";
import Blog from "./pages/Blog";
import Reconhecimento from "./pages/Reconhecimento";
import AreaRestrita from "./pages/AreaRestrita";
import Auth from "./pages/Auth";
import User from "./pages/User";
import PEPs from "./pages/PEPs";
import PEPForm from "./pages/PEPForm";
import PEPProgram from "./pages/PEPProgram";
import PEPMicrobiologia from "./pages/PEPMicrobiologia";
import PEPRuido from "./pages/PEPRuido";
import PEPOleos from "./pages/PEPOleos";
import PEPQuimicaAnalitica from "./pages/PEPQuimicaAnalitica";
import PEPMetrologiaDimensional from "./pages/PEPMetrologiaDimensional";
import NotFound from "./pages/NotFound";

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
            <Route path="/blog" element={<Blog />} />
            <Route path="/reconhecimento" element={<Reconhecimento />} />
            <Route path="/area-restrita" element={<AreaRestrita />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/usuario" element={<User />} />
            <Route path="/peps" element={<PEPs />} />
            <Route path="/peps/microbiologia" element={<PEPMicrobiologia />} />
            <Route path="/peps/ruido" element={<PEPRuido />} />
            <Route path="/peps/oleos" element={<PEPOleos />} />
            <Route path="/peps/quimica-analitica" element={<PEPQuimicaAnalitica />} />
            <Route path="/peps/metrologia-dimensional" element={<PEPMetrologiaDimensional />} />
            <Route path="/pep-program/:id" element={<PEPProgram />} />
            <Route path="/pep/:id" element={<PEPForm />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
