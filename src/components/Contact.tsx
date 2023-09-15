import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { z } from "zod";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100).optional(),
  email: z.string().email().optional(),
  tel: z.string().min(7).optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const Contact = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (modalIsOpen) {
      intervalId = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(intervalId);
            setModalIsOpen(false);
            reset();
            return 0;
          }
          return prevProgress + 1;
        });
      }, 50);
    }

    return () => clearInterval(intervalId);
  }, [modalIsOpen, reset]);

  const onSubmit = (data: ContactFormData) => {
    console.log(data);

    setModalIsOpen(true);
  };

  return (
    <section
      id="contato"
      className="relative flex items-center justify-center bg-gray-100 px-6 py-14 md:py-14"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="relative text-center text-4xl font-bold">
          Melhores Preços para Você!
        </h1>

        <form
          className="mt-12 flex w-full flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("name", { required: "Campo obrigatório" })}
            placeholder="Nome"
            className={`h-14 w-full rounded-lg border-2 ${
              errors.name ? "border-red-500" : "border-primary"
            } bg-gray-50 p-4 text-black placeholder:text-gray-600 focus:outline-none focus:ring-2`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
          <InputMask
            {...register("tel", { required: "Campo obrigatório" })}
            mask="(99) 99999-9999"
            defaultValue={619}
            placeholder="Número"
            className={`h-14 w-full rounded-lg border-2 ${
              errors.tel ? "border-red-500" : "border-primary"
            } bg-gray-50 p-4 text-black placeholder:text-gray-600 focus:outline-none focus:ring-2`}
          />
          {errors.tel && (
            <p className="text-red-500 text-sm">{errors.tel.message}</p>
          )}
          <input
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Email inválido",
              },
            })}
            type="email"
            placeholder="Email"
            className={`h-14 w-full rounded-lg border-2 ${
              errors.email ? "border-red-500" : "border-primary"
            } bg-gray-50 p-4 text-black placeholder:text-gray-600 focus:outline-none focus:ring-2`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="mx-auto rounded-lg bg-secondary px-8 py-3 text-lg font-medium shadow-md"
          >
            Garantir Ofertas
          </motion.button>
        </form>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Modal de Sucesso"
          ariaHideApp={false}
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: -160 }}
            animate={{ opacity: 1, scale: 1, x: -160 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center bg-primary shadow-lg text-white py-8 px-6 rounded fixed top-1/2 mx-auto z-50 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <h2 className="text-2xl font-semibold mb-4">
              Enviado com Sucesso!
            </h2>
            <p>Seu formulário foi enviado com sucesso.</p>
            <div
              className="absolute bottom-0 left-0"
              style={{
                backgroundColor: "rgb(34 197 94 / var(--tw-bg-opacity))",
                height: 5,
                width: `${progress}%`,
                transition: "width 0.05s",
              }}
            />
          </motion.div>
        </Modal>
      </motion.div>
    </section>
  );
};
