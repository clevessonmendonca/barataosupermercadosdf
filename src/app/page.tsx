"use client";
import React from "react";
import { Head } from "./Head";
import Hero from "@/components/home/Hero";
import { Offers } from "@/components/Offers";
import { Stores } from "@/components/Stores/Stores";
import { AdOffers } from "@/components/AdOffers";
import { JoinTeam } from "@/components/JoinTeam";
import { Contact } from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Head />
      <main>
        <div>
          <Hero />
          <Offers />
          <JoinTeam />
          <Stores />
          <AdOffers />
          <Contact />
        </div>

        <WhatsAppButton />
      </main>
    </>
  );
}
