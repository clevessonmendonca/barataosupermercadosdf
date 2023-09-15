"use client";

import { Head } from "./Head";

export default function Sobre() {
  return (
    <>
      <Head />
      <main>
        <div className="bg-primary px-4 pb-8 pt-14">
          <h1 className="text-center text-4xl font-extrabold text-white">
            QUEM SOMOS
          </h1>
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
        <div className="pt-8 text-black">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-center text-2xl font-bold">
              Sobre o Baratão Supermercado
            </h1>
            <p className="mx-auto mb-8 max-w-screen-lg leading-6">
              O <span className="font-bold">Supermercado Baratão</span> é uma
              empresa local de destaque, situada na cidade do Gama. O Baratão
              Supermercado tem sido uma parte essencial da comunidade, atendendo
              às necessidades de compras dos moradores com excelência e
              dedicação.
            </p>
            <p className="mx-auto mb-8 max-w-screen-lg leading-6">
              Com um ambiente acolhedor e familiar, o{" "}
              <span className="font-bold">Supermercado Baratão</span> oferece
              uma ampla variedade de produtos de{" "}
              <span className="font-bold">alta qualidade</span>. Suas
              prateleiras estão sempre abastecidas com produtos frescos, desde
              frutas e legumes até carnes suculentas e laticínios frescos. A
              organização cuidadosa dos corredores torna a busca por itens
              específicos uma tarefa fácil e agradável para os clientes.
            </p>
            <p className="mx-auto mb-8 max-w-screen-lg leading-6">
              <span className="font-bold">
                Destacando-se pela diversidade de itens disponíveis
              </span>
              , o Supermercado Baratão oferece muitos tipos de produtos. Isso
              permite aos clientes explorar novos sabores e encontrar
              ingredientes exclusivos para suas receitas favoritas.
            </p>

            <div className="mx-auto flex flex-col items-center justify-center gap-6 text-white md:flex-row">
              <div className="h-screen max-h-[225px] bg-linear-baratao w-full max-w-[300px] rounded border-b-2 border-r-2 border-black bg-radial-Baratão px-4 py-8 shadow-xl">
                <h2 className="text-center text-2xl font-bold text-secondary">
                  Missão
                </h2>
                <p className="mt-2 text-center text-sm">
                  Oferecer aos nossos clientes uma ótima experiência de compra,
                  com variedade em produtos e serviços de alta qualidade, além
                  de ser referência em preço justo e atendimento acolhedor.
                </p>
              </div>
              <div className="h-screen bg-linear-baratao max-h-[225px]  w-full max-w-[300px] rounded border-b-2 border-r-2 border-black bg-radial-Baratão px-4 py-8 shadow-xl">
                <h2 className="text-center text-2xl font-bold text-secondary">
                  Visão
                </h2>
                <p className="mt-2 text-center text-sm">
                  Ser reconhecido como o melhor supermercado de bairro pelos
                  nossos clientes, colaboradores e fornecedores.
                </p>
              </div>
              <div className="h-screen bg-linear-baratao max-h-[225px]  w-full max-w-[300px] rounded border-b-2 border-r-2 border-black bg-radial-Baratão px-4 py-8 shadow-xl">
                <h2 className="text-center text-2xl font-bold text-secondary">
                  Valores
                </h2>
                <p className="mt-2 text-center text-sm">
                  Os nossos valores são as raízes do nosso negócio e a base de
                  tudo o que construímos e que nos trouxe até aqui: ÉTICA,
                  DISCIPLINA, HUMILDADE, COMPROMETIMENTO, CRIATIVIDADE E
                  ALEGRIA.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-secondary text-primary -mb-7 pt-2 pb-12 mt-12">
            <p className="mx-auto my-8 max-w-xl px-4 text-center text-lg font-medium">
              Agradecemos por fazer parte da nossa história e por confiar em nós
              para suas compras diárias. Estamos comprometidos em continuar
              crescendo e servindo nossa comunidade da melhor maneira possível.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
