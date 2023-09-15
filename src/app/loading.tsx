"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <motion.img
        src={"/hero.png"}
        alt="Hero"
        className="w-52 h-64"
        initial={{ translateY: 0 }}
          animate={{
            translateY: [0, -10, 10, -10, 10, -10, 10, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear", // Movimento uniforme
          }}
      />

      <h1 className="text-2xl my-2 font-bold text-center">Carregando...</h1>
    </div>
  );
}
