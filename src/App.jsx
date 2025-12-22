import './App.css'
import "./index.css";
import { Toaster as Sonner } from 'sonner';
import { Tooltip, TooltipProvider } from './components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages'
import Contato from './pages/Contato';
import Agendamento from './pages/Agendamento';
import { Toaster } from './components/ui/sonner';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster/>
      <Sonner/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/agendamento" element={<Agendamento />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
