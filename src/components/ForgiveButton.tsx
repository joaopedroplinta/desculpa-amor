import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

export default function ForgiveButton() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const { width, height } = useWindowSize();

  const handleClick = () => {
    setShowConfetti(true);
    setShowMessage(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
  };

  return (
    <>
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={200}
          recycle={false}
          className="z-50 fixed top-0 left-0"
        />
      )}

      <div className="flex flex-col items-center z-10">
        <button
          onClick={handleClick}
          className="bg-white hover:bg-pink-100 text-pink-600 font-bold py-3 px-6 rounded-2xl shadow-lg transition-all text-xl"
        >
          Sim, eu te perdoo 💖
        </button>

        
      </div>
    </>
  );
}
