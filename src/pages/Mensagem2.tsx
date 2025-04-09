import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

export default function Mensagem2() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-300 text-center p-4">
      <BackButton />
      <h2 className="text-2xl font-semibold text-pink-800 mb-4">É eu sei que errei...</h2>
      <p className="text-pink-700 mb-6">Mas te magoar nunca foi a minha intenção, hoje em dia eu me arrependo de tudo que eu fiz
        e não fiz, quero que saiba que o meu sonho é poder te fazer feliz. E sim...
      </p>
      <Link to="/mensagem3" className="bg-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-pink-600 transition">
        Continuar
      </Link>
    </div>
  );
}
