import Image from "next/image";
import Link from "next/link";

interface SocialLinkProps {
  href: string;
  icon: string;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => (
  <Link
    className="rounded-full bg-secondary p-2 hover:scale-105 hover:brightness-90"
    target="_blank"
    href={href}
  >
    <Image src={icon} alt="Ícone da rede social" width={24} height={24} />
  </Link>
);

export default SocialLink;
