import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sebraetec from "./pages/Sebraetec";
import Treinamentos from "./pages/Treinamentos";
import Blog from "./pages/Blog";
import Reconhecimento from "./pages/Reconhecimento";
import AreaRestrita from "./pages/AreaRestrita";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
