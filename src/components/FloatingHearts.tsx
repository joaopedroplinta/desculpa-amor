const FloatingHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; left: string; duration: number; size: number }[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const left = Math.random() * 100 + '%';
      const duration = 8 + Math.random() * 5; // animações entre 8s e 13s
      const size = 20 + Math.random() * 20; // tamanhos variados

      setHearts((prev) => [...prev, { id, left, duration, size }]);

      // Remover coração após tempo de animação
      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== id));
      }, duration * 1000);
    }, 1000); // novo coração a cada 1s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {hearts.map(({ id, left, duration, size }) => (
        <span
          key={id}
          className="absolute bottom-0 animate-float"
          style={{
            left,
            animationDuration: `${duration}s`,
            fontSize: `${size}px`,
            willChange: 'transform, opacity',
            opacity: 0.7 + Math.random() * 0.3,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
