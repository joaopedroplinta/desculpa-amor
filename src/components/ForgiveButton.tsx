import { useState } from 'react';

export default function ForgiveButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <button
      onClick={handleClick}
      className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-500 ${
        clicked
          ? 'bg-green-500 scale-110 shadow-lg'
          : 'bg-white text-pink-600 hover:bg-pink-100'
      }`}
    >
      {clicked ? 'Obrigada por me perdoar ❤️' : 'Sim, eu te perdoo'}
    </button>
  );
}
