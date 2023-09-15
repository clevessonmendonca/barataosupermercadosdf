import { motion } from "framer-motion";
import Link from "next/link";

export const JoinTeam = () => {
  return (
    <section className="bg-secondary bg-cover px-32 py-10 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-screen-2xl flex-col items-center justify-around gap-2 text-center md:flex-row md:text-start"
      >
        <h1 className="max-w-md text-4xl font-bold text-black">
          Faça Parte da Nossa Equipe no <span className="text-primary">Baratão</span>
        </h1>
        <p className="my-5 max-w-md text-sm leading-5 text-black shadow-black drop-shadow-2xl">
          Estamos procurando talentos para se juntarem à equipe do Baratão Supermercados e contribuir para o nosso sucesso.
        </p>
      </motion.div>
      <motion.button
        className="mx-auto mt-8 flex rounded-md bg-primary px-6 py-2 text-center text-lg font-medium shadow-sm shadow-primary/90 hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-gray-200"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href="/trabalheconosco">
          Junte-se a Nós no Baratão
        </Link>
      </motion.button>
    </section>
  );
};