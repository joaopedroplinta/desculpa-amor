import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Mensagem1 from './pages/Mensagem1';
import Mensagem2 from './pages/Mensagem2';
import Mensagem3 from './pages/Mensagem3';
import TelaFinal from './pages/TelaFinal';
import FloatingHearts from './components/FloatingHearts';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Router>
        <FloatingHearts />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mensagem1" element={<Mensagem1 />} />
          <Route path="/mensagem2" element={<Mensagem2 />} />
          <Route path="/mensagem3" element={<Mensagem3 />} />
          <Route path="/final" element={<TelaFinal />} />
        </Routes>
      </Router>
    </div>
  );
}
