import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute top-4 left-4 text-white bg-pink-700 px-3 py-1 rounded-full shadow-md hover:bg-pink-800 transition-all"
    >
      ← Voltar
    </button>
  );
}
