"use client";

import { motion } from "framer-motion";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AdOffers } from "@/components/AdOffers";
import { Head } from "./Head";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100).nonempty("Por favor, insira seu nome."),
  email: z.string().email("Insira um endereço de e-mail válido.").optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const handleFormSubmit = (data: ContactFormData) => {
    const emailBody = `
      Nome: ${data.name}
      Email: ${data.email || "N/A"}
      Mensagem: ${data.message || "N/A"}
    `;

    try {
      const emailLink = `mailto:RH.financeirobarataosm@gmail.com?subject=Trabalhe Conosco&body=${encodeURIComponent(
        emailBody
      )}`;

      window.location.href = emailLink;
    } catch (error) {
      console.error("Erro ao criar o link de e-mail:", error);
    }
  };

  return (
    <>
      <Head />

      <main>
        <div className="bg-primary px-4 pb-8 pt-14">
          <h1 className="text-center text-4xl md:text-8xl font-extrabold text-white">
            Trabalhe Conosco
          </h1>
          <p className="mt-2 text-center text-base md:text-sm lg:text-base text-gray-200">
            Venha fazer parte da melhor equipe de supermercado!
          </p>
          <span className="mt-8 flex animate-bounce justify-center text-2xl md:text-3xl text-secondary">
            <svg
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
          <div className="px-4 py-8">
            <h3 className="pb-4 text-center text-2xl md:text-3xl lg:text-4xl font-bold">
              Formulário
            </h3>
            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="mx-auto flex w-full max-w-xl lg:max-w-2xl xl:max-w-3xl flex-col gap-4"
            >
              <input
                {...register("name")}
                placeholder="Nome"
                required
                className={`h-14 mx-auto w-full md:w-96 lg:w-72 xl:w-96 rounded-lg border-2 border-primary bg-gray-50 p-4 text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}

              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className={`h-14 mx-auto w-full md:w-96 lg:w-72 xl:w-96 rounded-lg border-2 border-primary bg-gray-50 p-4 text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              <textarea
                {...register("message")}
                placeholder="Mensagem"
                className={`h-32 mx-auto w-full md:w-96 lg:w-72 xl:w-96 resize-none rounded-lg border-2 border-primary bg-gray-50 p-4 text-black placeholder:text-gray-600 focus:outline-none focus:ring-2 ${
                  errors.message ? "border-red-500" : ""
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="mx-auto rounded-lg border-b-4 border-r-4 border-black bg-secondary px-8 py-3 md:px-10 md:py-3 lg:px-12 lg:py-4 xl:px-16 xl:py-5 text-xl font-medium uppercase shadow-md focus:ring-4"
                type="submit"
              >
                Enviar
              </motion.button>
            </form>
          </div>

          <AdOffers />
        </div>
      </main>
    </>
  );
}
