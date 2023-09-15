import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";

const banners = [
  {
    title: "Dia de Economizar Muito!",
    path: "/images/banners/slide-01.jpg",
    href: "/ofertas",
  },
  {
    title: "Economize Hoje! As melhores Carnes é aqui.",
    path: "/images/banners/slide-02.png",
    href: "/ofertas",
  },
  {
    title: "Whatsapp com Ofertas Incríveis!",
    path: "/images/banners/slide-03.png",
    href: "https://api.whatsapp.com/send?phone=5561999784112&text=Ol%C3%A1%2C%20quero%20receber%20as%20melhores%20ofertas.",
  },
  {
    title: "Mega Feirão de Ofertas",
    path: "/images/banners/slide-04.png",
    href: "/ofertas",
  },
];

// Função para ordenar aleatoriamente os banners
const shuffleBanners = (banners: { title: string; path: string; href: string; }[]) => {
  return [...banners].sort(() => Math.random() - 0.5);
};

export const CarouselComponent = () => {
  // Embaralhar os banners
  const shuffledBanners = shuffleBanners(banners);

  return (
    <div className="carousel-container">
      <Carousel
        autoFocus
        autoPlay
        interval={5000}
        transitionTime={500}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
      >
        {shuffledBanners.map((banner, index) => (
          <Link key={index} href={banner.href}>
            <div className="relative">
              <Image
                src={banner.path}
                alt={banner.title}
                className="banner-image"
                width={1280}
                height={300}
              />
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};
