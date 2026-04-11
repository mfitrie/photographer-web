"use client"

import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { Icon } from "@iconify/react";
import Link from "next/link";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid grid-cols-2 place-items-center py-20 gap-30 md:gap-10 md:py-50">
      <div className="text-center col-span-2 space-y-6 lg:col-span-1 lg:text-start">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="flex flex-row gap-2 flex-wrap">
            <span>Where</span>
            <span className="bg-linear-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">Life</span>
            <span>Become</span>
            <span className="bg-linear-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">Cinema</span>
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Capturing raw emotion and cinematic light — every frame a story worth telling forever.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button
            className="w-full md:w-1/3 cursor-pointer"
            size={"icon-lg"}
            onClick={() => {
              document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="flex flex-row items-center gap-1">
              <span>Pilih Pakej Anda</span>
              <Icon icon="line-md:arrow-down" width="24" height="24" />
            </span>
          </Button>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10 col-span-2 lg:col-span-1">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
