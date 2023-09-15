import { motion } from "framer-motion";
import { StoreLocation } from "./StoreLocation";

export const Stores = () => {
  return (
    <section className="mx-auto my-4 py-10">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-md items-center justify-center text-center text-3xl font-bold"
      >
        Tem Sempre uma Loja{" "}
        <span className="text-primary">Pertinho de Você!</span>
        <span className="absolute bottom-2 left-1/2 h-[2px] w-60 -translate-x-1/2 translate-y-5 transform rounded-full bg-secondary" />
      </motion.h1>

      <div className="mx-auto flex flex-col items-center justify-center gap-6 px-4 py-10 md:flex-row md:gap-6">
        <StoreLocation
          title="Gama Leste"
          address="Qd. 24, Lotes 18/19, S.Leste - Gama, Brasília - DF, 72460-240"
          phone="(61) 998707768"
          hours="Todos os Dias, 08:00–22:00H"
          href={
            "https://www.google.com/maps/dir//Qd.+24,+Lotes+18%2F19,+S.Leste+-+Gama,+Bras%C3%ADlia+-+DF,+72460-240/@-16.023112,-48.137449,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x9359812064702f85:0x19702aed85e1fb33!2m2!1d-48.0550472!2d-16.0231277?entry=ttu"
          }
        />
        <StoreLocation
          title="Gama Sul"
          address="Conj. F, SSU Q 4 - Gama, Brasília - DF"
          phone="(61) 3970-0988"
          hours="Todos os Dias, 08:00–22:00H"
          href={
            "https://www.google.com/maps/dir//St.+Sul+Quadra+4+Conjunto+F+Lote,+27+-+Gama,+Bras%C3%ADlia+-+DF,+72415-206/@-16.0181817,-48.1642355,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x93597fb81b6f480b:0x5f462cd77a7dd763!2m2!1d-48.0818337!2d-16.0181974?entry=ttu"
          }
        />
      </div>
    </section>
  );
};
