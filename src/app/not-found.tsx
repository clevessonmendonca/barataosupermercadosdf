"use client";

import Image from "next/image";
import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="relative flex h-screen -mt-8 flex-col items-center justify-center">
      <h1 className="max-w-lg text-4xl text-center font-bold">
        Oops! Você chegou a um lugar desconhecido.
      </h1>
      <p className="text-lg mt-4 text-center max-w-md text-gray-600">
        Não se preocupe, você não está perdido. Estamos aqui para ajudar você a
        encontrar o caminho de volta.
      </p>

      <Image className="absolute -right-10" src="/hero.png" width={150} height={200} alt="Hero Baratão" />

      <Link href="/" passHref className="my-4 bg-linear-baratao px-8 py-4 rounded-lg text-white font-medium text-md">
        Voltar para a Página Inicial
      </Link>
    </div>
  );
}
