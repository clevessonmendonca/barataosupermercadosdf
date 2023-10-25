import React from "react";
import { CarouselComponent } from "./CarouselComponent";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl">
        <CarouselComponent />

        <div className="max-w-7xl max-h-24 mx-auto py-2">
          <video
            width={0}
            height={0}
            className="w-full h-[300]"
            style={{ objectFit: "contain" }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source type="video/mp4" src="/images/banners/banner-main.mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
