import { motion } from "framer-motion";
import Link from "next/link";

export const AdOffers = () => {
  return (
    <section className="bg-bottom bg-cover bg-linear-baratao lg:bg-offers-background bg-no-repeat flex-shrink-0 bg- w-full max-w-screen-2xl mx-auto py-6">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-screen-xl p-4 py-8 flex justify-center flex-col md:block"
      >
        <h1 className="max-w-md  text-4xl md:text-5xl font-bold mx-auto text-center text-white md:mx-0 md:text-left">
          Descubra Ofertas Especiais!
          <span className="text-secondary"> Economize Agora</span>
        </h1>
        <p className="my-5 text-sm text-gray-200 text-center md:mx-0 md:text-left">
          Explore oportunidades imperdíveis com nossas ofertas irresistíveis!
        </p>
        <p className="mb-5 max-w-md text-sm leading-5 mx-auto text-gray-200 text-center md:mx-0 md:text-left">
          Visite nosso supermercado e aproveite os melhores preços da cidade!
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="rounded-lg z-10 bg-secondary mx-auto px-8 py-3 text-lg font-medium hover:scale-105 hover:brightness-90"
        >
          <Link
            href={
              "https://api.whatsapp.com/send?phone=5561999784112&text=Ol%C3%A1%2C%20quero%20receber%20as%20melhores%20ofertas."
            }
          >
            Receba as Melhores Ofertas
          </Link>
        </motion.button>

        <motion.img
          src={"/hero.png"}
          alt="Hero"
          className="w-28 md:w-80 h-auto -right-10 -bottom-10 absolute md:right-10 md:-top-10"
          initial={{ translateY: 0 }}
          animate={{
            translateY: [0, -10, 10, -10, 10, -10, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear", // Movimento uniforme
          }}
        />
      </motion.div>
    </section>
  );
};
