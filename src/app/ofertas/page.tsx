"use client";

import React from "react";
import Link from "next/link";
import { AdOffers } from "@/components/AdOffers";
import { Contact } from "@/components/Contact";
import { Offers } from "@/components/Offers";
import { Head } from "./Head";

export default function OffersPage() {
  return (
    <>
      <Head />
      <main>
        <div className="bg-primary px-4 pb-8 pt-14">
          <h1 className="text-center text-8xl font-extrabold text-white">
            Ofertas
          </h1>
          <p className="mt-2 text-center text-sm leading-3 text-gray-200">
            Confira as melhores ofertas aqui!
          </p>
          <span className="mt-8 flex animate-bounce justify-center text-3xl text-secondary">
            <svg
              fill="yellow"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 256 256"
            >
              <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </span>
        </div>
        <div>
          <Offers />
          <div>
            <h2 className="relative text-center text-3xl font-bold">
              Baixe nosso Tabloide
              <span className="absolute bottom-2 left-1/2 h-[2px] w-40 -translate-x-1/2 translate-y-4 transform rounded-full bg-secondary" />
            </h2>
            <p className="mx-auto mt-4 text-center text-sm text-gray-900">
              Para baixar nosso tabloide clique no botão{" "}
              <span className="font-semibold">Ver Tabloide</span>.
            </p>
            <div className="mt-4 flex items-center justify-center">
              <Link
                href="https://drive.google.com/file/d/138fwiFzou-LueTVI73bwEDv6iGp0w_Sw/view?usp=sharing"
                className="mb-8 mx-auto inline-block rounded-md bg-secondary px-8 py-4 text-lg font-bold shadow-md transition-all hover:scale-105 hover:brightness-90"
              >
                Ver Tabloide
              </Link>
            </div>
          </div>

          <AdOffers />
          <Contact />
        </div>
      </main>
    </>
  );
}
