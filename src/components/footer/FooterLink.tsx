// FooterLink.tsx
import Link from "next/link";

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink = ({ href, text }: FooterLinkProps) => (
  <li className="hover:underline list-none">
    <Link href={href}>{text}</Link>
  </li>
);

export default FooterLink;
