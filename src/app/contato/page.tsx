"use client";

import { AdOffers } from "@/components/AdOffers";
import { Head } from "./Head";
import { Contact } from "@/components/Contact";
import Link from "next/link";
import * as Tabs from "@radix-ui/react-tabs";

export default function Contato() {
  return (
    <>
      <Head />

      <main>
        <div className="bg-primary px-4 pb-8 pt-14">
          <h1 className="text-center text-8xl font-extrabold text-white">
            Contato
          </h1>
          <p className="mt-2 text-center text-sm leading-3 text-gray-200">
            Entre em contato Conosco!
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
        <div className="py-16">
          <h1 className="relative text-center text-xl font-bold">
            Encontre as Respostas para Suas Perguntas
          </h1>

          <div className="mt-4 flex flex-wrap justify-center">
            <Tabs.Root
              defaultValue="tab1"
              orientation="vertical"
              className="flex flex-wrap mx-auto px-4 justify-center"
            >
              <Tabs.List
                aria-label="Tabela com perguntas e dúvidas comuns."
                className="flex h-min max-w-sm flex-col items-start gap-4 rounded-lg rounded-b-md rounded-l-md"
              >
                <Tabs.Trigger
                  value="tab1"
                  className="mx-auto hover:text-violet11 data-[state=active]:text-violet11 flex w-full cursor-default select-none items-center justify-start  gap-4 border-2 border-slate-100 bg-slate-50 px-4 py-2 leading-none outline-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:border-primary data-[state=active]:bg-red-100 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-red-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="red"
                    viewBox="0 0 256 256"
                  >
                    <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
                  </svg>
                  <h1 className="text-lg font-bold">
                    Horário de Funcionamento
                  </h1>
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="tab2"
                  className="text-mauve11 hover:text-violet11 data-[state=active]:text-violet11 flex w-full cursor-default select-none items-center justify-start  gap-4 border-2 border-slate-100 bg-slate-50 px-4 py-2 leading-none outline-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:border-primary data-[state=active]:bg-red-100 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-red-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="red"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z"></path>
                  </svg>
                  <h1 className="text-lg font-bold">Formas de Pagamentos</h1>
                </Tabs.Trigger>
                <Tabs.Trigger
                  value="tab3"
                  className="text-mauve11 hover:text-violet11 data-[state=active]:text-violet11 flex w-full cursor-default select-none items-center justify-start  gap-4 border-2 border-slate-100 bg-slate-50 px-4 py-2 leading-none outline-none first:rounded-tl-md last:rounded-tr-md data-[state=active]:border-primary data-[state=active]:bg-red-100 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-red-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="red"
                    viewBox="0 0 256 256"
                  >
                    <path d="M232,96a7.89,7.89,0,0,0-.3-2.2L217.35,43.6A16.07,16.07,0,0,0,202,32H54A16.07,16.07,0,0,0,38.65,43.6L24.31,93.8A7.89,7.89,0,0,0,24,96v16a40,40,0,0,0,16,32v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V144a40,40,0,0,0,16-32ZM54,48H202l11.42,40H42.61Zm50,56h48v8a24,24,0,0,1-48,0Zm-16,0v8a24,24,0,0,1-48,0v-8ZM200,208H56V151.2a40.57,40.57,0,0,0,8,.8,40,40,0,0,0,32-16,40,40,0,0,0,64,0,40,40,0,0,0,32,16,40.57,40.57,0,0,0,8-.8Zm-8-72a24,24,0,0,1-24-24v-8h48v8A24,24,0,0,1,192,136Z"></path>
                  </svg>
                  <h1 className="text-lg font-bold">Nossas Lojas</h1>
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content
                value="tab1"
                className="-ml-[2px] w-[400px] grow rounded-b-md rounded-r-md border-2 border-primary/20 bg-slate-50 p-5 pb-16 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
              >
                <p>
                  Estamos aqui para atendê-lo durante toda a semana, com
                  horários flexíveis para se adequar à sua rotina.
                </p>

                <h3 className="mb-1 mt-3 font-medium text-primary">
                  Confira nossos horários de funcionamento:
                </h3>

                <ul className="mb-4">
                  <li>
                    <strong>Segunda a Sábado:</strong> Das 07h às 22h
                  </li>
                  <li>
                    <strong>Domingo:</strong> Das 07h às 20h
                  </li>
                </ul>
                <p className="text-sm">
                  Nossos horários abrangentes garantem que você possa realizar
                  suas compras com conveniência, seja durante a semana agitada
                  ou nos momentos de relaxamento aos domingos. Estamos ansiosos
                  para recebê-lo em nossa loja em qualquer dia que melhor lhe
                  convier.
                </p>
              </Tabs.Content>
              <Tabs.Content
                value="tab2"
                className="-ml-[2px] w-[400px] grow rounded-b-md rounded-r-md border-2 border-primary/20 bg-slate-50 p-5 pb-16 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
              >
                <h3 className="text-lg font-bold">Formas de Pagamentos</h3>
                <p className="my-2">
                  Para tornar sua experiência de compra ainda mais conveniente,
                  aceitamos diversas formas de pagamento, incluindo:
                </p>

                <ul className="ml-4 list-disc">
                  <li>Dinheiro</li>
                  <li>Cartão de Crédito</li>
                  <li>Cartão de Débito</li>
                  <li>PIX</li>
                  <li>Vale-Alimentação</li>
                </ul>

                <p className="my-4">
                  Dessa forma, você pode escolher a opção que melhor se adapta
                  às suas preferências. Estamos comprometidos em oferecer
                  flexibilidade e praticidade em suas transações.
                </p>

                <Link
                  className="mx-auto rounded-md bg-secondary px-6 py-2 text-center text-lg font-medium text-red-600 shadow-lg shadow-primary/10 hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                  href={"/"}
                >
                  Confira Todos os Cartões Aceitos
                </Link>
              </Tabs.Content>
              <Tabs.Content
                value="tab3"
                className="-ml-[2px] w-[400px] grow rounded-b-md rounded-r-md border-2 border-primary/20 bg-slate-50 p-5 pb-16 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
              >
                <p className="mb-8">
                  Estamos presentes em diversos locais para{" "}
                  <span className="font-bold">melhor atendê-lo.</span> Encontre
                  a loja mais próxima de você e venha nos visitar para
                  aproveitar uma experiência de compras única. Confira nossas
                  localizações:
                </p>

                <Link
                  className="mx-auto rounded-md bg-secondary px-6 py-2 text-center text-lg font-medium text-red-600 shadow-lg shadow-primary/10 hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                  href={"/lojas"}
                >
                  Encontre a Loja Mais Próxima
                </Link>
              </Tabs.Content>
            </Tabs.Root>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <div className="flex h-80 max-w-sm flex-col items-center justify-center gap-2 rounded bg-gray-100 px-4 py-8 pb-12 text-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="red"
                viewBox="0 0 256 256"
              >
                <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
              </svg>
              <h1 className="text-lg font-bold">Central de Atendimento</h1>

              <p>Alguma dúvida, sugestão? Entre em contato.</p>

              <Link
                className="mx-auto bg-secondary rounded-md px-6 py-2 text-center text-lg font-medium text-red-600 shadow-lg shadow-primary/10 hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                href={"https://wa.me/5561999784112"}
              >
                Entrar em Contato
              </Link>
            </div>
            <div className="flex h-80 max-w-sm flex-col items-center justify-center gap-2 rounded bg-gray-100 px-4 py-8 pb-12 text-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="red"
                viewBox="0 0 256 256"
              >
                <path d="M181.66,106.34a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0L112,123.31,85.66,149.66a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0L144,132.69l26.34-26.35A8,8,0,0,1,181.66,106.34ZM232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.52a8,8,0,0,1,6.54.67A88,88,0,0,0,216,128Z"></path>
              </svg>
              <h1 className="text-lg font-bold">Redes Sociais</h1>

              <p>Siga-nos e tenha sempre as melhores noticias em mãos.</p>

              <div className="flex gap-4">
                <Link
                  className="rounded-full bg-secondary p-2 hover:scale-105 hover:brightness-90"
                  target="_blank"
                  href={"https://www.instagram.com/barataosupermercadosdf/"}
                >
                  <svg
                    className="text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                  </svg>
                </Link>
                <Link
                  className="rounded-full bg-secondary p-2 hover:scale-105 hover:brightness-90"
                  target="_blank"
                  href={"https://www.facebook.com/barataosupermercadosdf/"}
                >
                  <svg
                    className="text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="#000000"
                    viewBox="0 0 256 256"
                  >
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <AdOffers />
          <Contact />
        </div>
      </main>
    </>
  );
}
