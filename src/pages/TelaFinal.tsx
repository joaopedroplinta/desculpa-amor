import ForgiveButton from '../components/ForgiveButton';
import BackButton from '../components/BackButton';

export default function TelaFinal() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-600 text-center px-4 py-10 text-white overflow-hidden">
      <BackButton />
      <h2 className="text-4xl font-bold mb-4 z-10">Você me perdoa? 💌</h2>
      <p className="text-lg mb-6 z-10">Eu quero ser só seu e você ser só minha, eu te amo demais.</p>
      <ForgiveButton />
    </div>
  );
}
