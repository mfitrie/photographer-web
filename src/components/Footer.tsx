import { Icon } from "@iconify/react";
import { LogoIcon } from "./Icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-14 text-center flex flex-col justify-between items-center md:flex-row">
        <div className="col-span-full xl:col-span-2">
          <Link
            rel="noreferrer noopener"
            href="/"
            className="flex flex-row items-center gap-2 font-bold text-xl"
          >
            <Icon icon="hugeicons:camera-ai" width="24" height="24" />
            Capture The Moment
          </Link>
        </div>
        <h3>
          &copy; 2026 Landing page made by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/mfitrie"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Muhammad Fitrie
          </a>
        </h3>
      </section>
    </footer>
  );
};
