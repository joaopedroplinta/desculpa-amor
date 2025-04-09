import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

export default function Mensagem3() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-400 text-center p-4">
      <BackButton />
      <h2 className="text-2xl font-semibold text-white mb-4">Prometo melhorar</h2>
      <p className="text-white mb-6">Quero aprender com isso e ser uma pessoa melhor pra você. Poder te proporcionar o que não consegui antes, te confesso que o meu maior medo
        é de te perder e não quero que isso aconteça. Por isso to aqui tentando te reconquistar.
      </p>
      <Link to="/final" className="bg-white text-pink-600 px-6 py-2 rounded-full shadow-md hover:bg-pink-100 transition">
        Última Mensagem
      </Link>
    </div>
  );
}
