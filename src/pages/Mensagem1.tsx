import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

export default function Mensagem1() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-200 text-center p-4">
      <BackButton />
      <h2 className="text-2xl font-semibold text-pink-800 mb-4">Me perdoa 😭</h2>
      <p className="text-pink-700 mb-6">Sei que eu errei demais nos ultimos tempos, eu não consigo consertar o passado mas posso acertar o futuro, 
        eu realmente te amo e...
      </p>
      <Link to="/mensagem2" className="bg-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-pink-600 transition">
        Próximo
      </Link>
    </div>
  );
}
