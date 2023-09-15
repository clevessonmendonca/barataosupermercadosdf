import { motion } from "framer-motion";
import Link from "next/link";

type StoresLocationProps = {
  title: String;
  address: String;
  phone: String;
  hours: String;
  href: String;
};

export const StoreLocation = ({
  title,
  address,
  phone,
  hours,
  href,
}: StoresLocationProps) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-[400px] overflow-hidden rounded-lg bg-primary pb-2 text-white"
    >
      <div>
        {title === "Gama Sul" ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122717.12154565567!2d-48.23426900273435!3d-16.018197399999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93597fb81b6f480b%3A0x5f462cd77a7dd763!2sBarat%C3%A3o%20Supermercados!5e0!3m2!1spt-BR!2sbr!4v1694358156173!5m2!1spt-BR!2sbr"
            width="400"
            height="250"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        ) : (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d958.704678216804!2d-48.056128229675025!3d-16.02294995615591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9359812064702f85%3A0x19702aed85e1fb33!2sBarat%C3%A3o%20Supermercados!5e0!3m2!1spt-BR!2sbr!4v1694124900334!5m2!1spt-BR!2sbr"
            width="400"
            height="250"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </div>
      <h1 className="py-4 text-center text-3xl font-bold text-secondary">
        {title}
      </h1>
      <div className="flex flex-col px-4">
        <p className="leading-2 flex text-sm">
          <span className="mt-1 pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="yellow"
              viewBox="0 0 256 256"
            >
              <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
            </svg>
          </span>
          {address}
        </p>
        <p className="leading-2 mt-3 flex text-sm">
          <span className="-mt-1 pr-2 text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="yellow"
              viewBox="0 0 256 256"
            >
              <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.50.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
            </svg>
          </span>
          {phone}
        </p>
        <p className="leading-2 mt-4 flex text-sm">
          <span className="-mt-1 pr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="yellow"
              viewBox="0 0 256 256"
            >
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
            </svg>
          </span>
          {hours}
        </p>
      </div>
      <Link
        href={`${href}`}
        target="_blank"
        className="mx-auto my-4 mt-8 flex w-48 items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-2 font-medium text-black hover:scale-105 hover:border-b-[3px] hover:border-r-[3px] hover:border-black hover:brightness-110"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L204.69,112H128a88.1,88.1,0,0,0-88,88,8,8,0,0,1-16,0A104.11,104.11,0,0,1,128,96h76.69L170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66Z"></path>
          </svg>
        </span>
        Como chegar
      </Link>
    </motion.div>
  );
};
