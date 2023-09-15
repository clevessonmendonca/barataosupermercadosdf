import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const WhatsAppButton = () => {
  const [vibrating, setVibrating] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const controls = useAnimation();

  const startVibratingAndShowMessage = () => {
    setVibrating(true);
    controls.start({
      x: [0, -2, 2, -2, 2, -2, 2, 0],
      transition: { duration: 0.2, repeat: 4 },
    });
    setShowMessage(true);

    setTimeout(() => {
      setVibrating(false);
      setShowMessage(false);
    }, 5000);
  };

  useEffect(() => {
    startVibratingAndShowMessage();

    const interval = setInterval(startVibratingAndShowMessage, 100000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative">
      <motion.div
        className={`whatsapp-button fixed bottom-8 right-8 cursor-pointer z-50 ${
          vibrating ? "animate-vibrate" : ""
        }`}
        animate={controls}
      >
        <Link
          href="https://api.whatsapp.com/send?phone=5561999784112&text=Ol%C3%A1%2C%20quero%20receber%20as%20melhores%20ofertas."
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-green-600 p-4 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#FFFFFF"
            viewBox="0 0 256 256"
          >
            <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
          </svg>
        </Link>
      </motion.div>

      {showMessage && (
        <div className="bg-whatsappGreen bg-primary text-white text-sm rounded p-2 fixed bottom-28 shadow-md right-9">
          <div className="relative">
            <p>Receba as melhores ofertas</p>
            <div className="absolute h-0 w-0 border-x-8 border-x-transparent border-t-[10px] -bottom-4 right-4 border-primary" />
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;
