import React from "react";

const metadata = {
  title: "Baratao Supermercados | O Herói dos Preços Baixos!",
  description:
    "O herói dos preços baixos! Faça suas compras com economia no Baratão Supermercados. Ofertas imperdíveis em produtos de alta qualidade.",
  openGraph: {
    title: "Baratão Supermercados",
    description:
      "O herói dos preços baixos! Faça suas compras com economia no Baratão Supermercados. Ofertas imperdíveis em produtos de alta qualidade.",
    url: "https://barataosupermercadosdf.com.br",
    images: [
      {
        url: "https://barataosupermercadosdf.com.br/images/banner/slide-01.jpg",
        width: 1200,
        height: 300,
        alt: "Banner do Baratão Supermercados",
      },
      {
        url: "https://barataosupermercadosdf.com.br/images/banner/slide-02.png",
        width: 1200,
        height: 300,
        alt: "Banner do Baratão Supermercados",
      },
      {
        url: "https://barataosupermercadosdf.com.br/images/banner/slide-03.png",
        width: 1200,
        height: 300,
        alt: "Banner do Baratão Supermercados",
      },
      {
        url: "https://barataosupermercadosdf.com.br/images/banner/slide-04.png",
        width: 1200,
        height: 300,
        alt: "Banner do Baratão Supermercados",
      },
    ],
  },
};

export const Head = () => {
  return (
    <>
      <meta name="description" content={metadata.description} />
      <meta property="og:title" content={metadata.openGraph.title} />
      <meta
        property="og:description"
        content={metadata.openGraph.description}
      />
      <meta property="og:url" content={metadata.openGraph.url} />
      {metadata.openGraph.images.map((image, index) => (
        <meta
          property="og:image"
          key={index}
          content={image.url}
          data-width={image.width}
          data-height={image.height}
        />
      ))}

      <meta
        name="google-site-verification"
        content="o14hO003aYPXQna83X-zhth8LjY2mi7UOM4mLFblaVQ"
      />
      <meta name="google-adsense-account" content="ca-pub-9125682874703477" />
      <meta name="robots" content="all" />

      <link rel="icon" href="favicon.png" sizes="any" />
      <title>Baratao Supermercados | O Herói dos Preços Baixos!</title>
    </>
  );
};
