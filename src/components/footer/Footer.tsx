import Image from "next/image";
import Link from "next/link";
import FooterLink from "./FooterLink";
import SocialLink from "./SocialLink";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex items-center justify-between py-2">
          <Link href={"/"}>
            <Image
              src="/logo.svg"
              alt="Logo do Baratão Supermercados"
              width={171}
              height={51}
              quality={100}
            />
          </Link>
          <div className="flex items-center text-white">
            <h2 className="mb-6 text-sm font-semibold uppercase">
              Formas de Pagamento
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 py-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              Central de Ajuda
            </h2>
            <ul className="flex flex-col gap-2 font-medium text-gray-50">
              <FooterLink href="/contato" text="Fale Conosco" />
              <FooterLink href="/contato" text="Contato" />
              <FooterLink
                href="/privacypolicy"
                text="Política de Privacidade"
              />
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              Institucional
            </h2>
            <ul className="flex flex-col gap-2 font-medium text-gray-100">
              <FooterLink href="/sobre" text="O Baratão" />
              <FooterLink href="/lojas" text="Nossas Lojas" />
              <FooterLink href="/trabalheconosco" text="Trabalhe Conosco" />
            </ul>
          </div>

          <div className="text-white">
            <h2 className="mb-6 text-sm font-semibold uppercase">
              Atendimento
            </h2>
            <p>Domingo das 07h às 20h</p>
            <p>De Segunda a Sábado das 07h às 22h</p>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-third p-4">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          <span className="flex gap-1 text-sm text-gray-100 sm:text-center">
            © {currentYear}{" "}
            <FooterLink href="/" text="Baratão Supermercados." />
            Todos os Direitos Reservados.
          </span>

          <div className="flex gap-4 text-white">
            <SocialLink
              href="https://www.instagram.com/barataosupermercadosdf"
              icon="/icons/instagram.svg"
            />
            <SocialLink
              href="https://www.facebook.com/barataosupermercadosdf"
              icon="/icons/facebook.png"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
