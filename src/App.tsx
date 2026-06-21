import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privatlivspolitik from "./pages/Privatlivspolitik";
import Brugsvilkaar from "./pages/Brugsvilkaar";
import Cookiepolitik from "./pages/Cookiepolitik";
import Datasikkerhed from "./pages/Datasikkerhed";
import Databehandleraftale from "./pages/Databehandleraftale";
import AIVilkaar from "./pages/AIVilkaar";
import VilkaarOgBetingelser from "./pages/VilkaarOgBetingelser";
import Visionen from "./pages/Visionen";
import OmOs from "./pages/OmOs";
import Priser from "./pages/Priser";

import Funktionalitet from "./pages/Funktionalitet";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import KampagneDanmark from "./pages/KampagneDanmark";
import TilmeldingWebinar from "./pages/TilmeldingWebinar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/funktionalitet" element={<Funktionalitet />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/priser" element={<Priser />} />
          <Route path="/visionen" element={<Visionen />} />
          <Route path="/om-os" element={<OmOs />} />
          
          <Route path="/privatlivspolitik" element={<Privatlivspolitik />} />
          <Route path="/brugsvilkaar" element={<Brugsvilkaar />} />
          <Route path="/cookiepolitik" element={<Cookiepolitik />} />
          <Route path="/datasikkerhed" element={<Datasikkerhed />} />
          <Route path="/databehandleraftale" element={<Databehandleraftale />} />
          <Route path="/ai-vilkaar" element={<AIVilkaar />} />
          <Route path="/vilkaar-og-betingelser" element={<VilkaarOgBetingelser />} />
          <Route path="/kampagne/danmark" element={<KampagneDanmark />} />
          <Route path="/tilmelding-webinar" element={<TilmeldingWebinar />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
