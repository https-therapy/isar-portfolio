import { useEffect, useState } from 'react';

const DeskLamp = () => {
  const [lampState, setLampState] = useState('off'); // off → flicker → on

  useEffect(() => {
    let flickerCount = 0;

    const flickerInterval = setInterval(() => {
      flickerCount++;
      setLampState((prev) => (prev === 'off' ? 'dim' : 'off'));

      if (flickerCount >= 6) {
        clearInterval(flickerInterval);
        setLampState('on');
      }
    }, 150);

    return () => clearInterval(flickerInterval);
  }, []);

  const getOpacity = () => {
    switch (lampState) {
      case 'dim':
        return 'opacity-40';
      case 'on':
        return 'opacity-100';
      default:
        return 'opacity-10';
    }
  };

  return (
    <>
      

      {/* Flickering Light Cone */}
      <div
        className={`absolute pointer-events-none transition-opacity duration-200 ease-out ${getOpacity()}`}
        style={{
          left: '341px',
          top: '128px', // Slightly below the lamp shade
          width: '15vw', // Responsive width
          height: '60vh', // Responsive height
          background: `radial-gradient(ellipse 120px 160px at 50% 0%, 
            rgba(251, 191, 36, 0.4) 0%,
            rgba(252, 211, 77, 0.3) 30%,
            rgba(254, 243, 199, 0.2) 60%,
            transparent 100%)`,
          clipPath: 'polygon(42% 0%, 58% 0%, 90% 100%, 10% 100%)',
          filter: 'blur(1px)',
          transform: 'translateX(-50%)',
        }}
      />
    </>
  );
};

export default DeskLamp;
