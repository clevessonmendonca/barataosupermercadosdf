import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { navLinks } from "./navLinks";

const Header = () => {
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(
    typeof window !== "undefined" ? window.screen.width < 768 : false
  );

  const pathname = usePathname();

  const handleResize = () => {
    setMobileMenuVisible(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <header className="relative z-50 h-28">
      {/* Barra superior fixa com links */}
      <div className="fixed z-50 mx-auto h-9 w-full bg-linear-baratao text-gray-100">
        <div className="fixed left-0 right-0 top-0 z-50 mx-auto flex w-full max-w-screen-2xl items-center justify-between px-12 pt-2 text-sm leading-3">
          {/* Links de navegação */}
          <nav>
            <ul className="flex gap-2 divide-x-2 divide-slate-300 text-xs font-medium leading-3">
              <li>
                <Link
                  href="/sobre"
                  rel="preload"
                  className="hover:brightness-90"
                >
                  Sobre o Baratão
                </Link>
              </li>
              <li className="px-2 hover:brightness-90">
                <Link href="/contato" rel="preload">
                  Formas de Pagamento
                </Link>
              </li>
            </ul>
          </nav>
          {/* Ícones de redes sociais */}
          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              href={"https://www.instagram.com/barataosupermercadosdf"}
              className="hover:scale-105 hover:brightness-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="yellow"
                viewBox="0 0 256 256"
              >
                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
              </svg>
            </Link>
            <Link
              target="_blank"
              href={"https://www.facebook.com/barataosupermercadosdf/"}
              className="hover:scale-105 hover:brightness-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="yellow"
                viewBox="0 0 256 256"
              >
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Barra de navegação principal */}
      <div className="fixed left-0 right-0 h-28 w-full bg-white shadow-lg">
        <div className="fixed left-0 right-0 top-8 z-40 mx-auto max-w-screen-2xl py-2">
          {/* Efeito visual na barra de navegação */}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute right-0 top-[1.1rem] hidden h-12 w-full max-w-3xl -translate-y-1/2 transform rounded-bl-full rounded-tl-full bg-primary lg:block"
          />
          <div className="transition-allmotion. mx-12 flex items-center justify-between py-2">
            {/* Logo */}
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Logo do Baratão Supermercados"
                  width={0}
                  height={0}
                  style={{
                    objectFit: "contain",
                  }}
                  className="w-full h-full max-w-[150px] md:max-w-[180px] "
                  quality={100}
                />
              </Link>
            </motion.span>
            {/* Botão de menu móvel */}
            {isMobileMenuVisible ? (
              <button
                onClick={toggleMobileMenu}
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-primary hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Fechar menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="red"
                  viewBox="0 0 256 256"
                >
                  <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                </svg>
              </button>
            ) : (
              <button
                onClick={toggleMobileMenu}
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="ml-1 inline-flex items-cen- ter rounded-lg p-2 text-sm text-primary hover:bg-primary/20 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Abrir menu</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L139.31,128Z"
                  ></path>
                </svg>
              </button>
            )}
            {/* Menu de navegação móvel */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`${
                isMobileMenuVisible ? "opacity-100" : "hidden opacity-0"
              } absolute w-full items-center justify-between transition-all lg:static lg:order-1 lg:flex lg:w-auto`}
            >
              <span className="absolute right-28 top-[2rem] h-4 w-4 rounded-t-full bg-primary lg:hidden" />
              <ul className="group absolute right-24 top-6 z-10 mt-4 flex flex-col justify-center divide-y-2 divide-gray-200 rounded-lg bg-primary px-6 py-4 text-xl font-medium text-white  lg:static lg:mt-0 lg:flex lg:flex-row lg:space-x-8 lg:divide-y-0 lg:bg-inherit lg:py-0 lg:text-base">
                {/* Links de navegação */}
                {navLinks.map((link) => {
                  const isActive = pathname.endsWith(link.path);
                  return (
                    <li key={link.title}>
                      <Link
                        href={link.path}
                        className={`block rounded py-2 pl-3 pr-4 transition-colors hover:text-secondary ${
                          isActive ? "text-secondary" : "text-white"
                        }`}
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
                {/* Ícones de redes sociais para dispositivos móveis */}
                <li className="flex items-center gap-2 rounded py-2 pl-3 pr-4 text-secondary lg:hidden">
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/"
                    className="hover:scale-105 hover:brightness-90"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="yellow"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                    </svg>
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/"
                    className="hover:scale-105 hover:brightness-90"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="yellow"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
