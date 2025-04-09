import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100 text-center p-4">
      <h1 className="text-4xl font-bold text-pink-700 mb-4">Eu queria me desculpar com você, amor 💔</h1>
      <p className="text-lg text-pink-600 mb-6">Quero te dizer algumas coisas...</p>
      <Link to="/mensagem1" className="bg-pink-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-pink-600 transition">
        Começar
      </Link>
    </div>
  );
}
