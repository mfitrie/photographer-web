import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Icon } from "@iconify/react";
import Link from "next/link";

export const HeroCards = () => {
  return (
    <div className="flex flex-row flex-wrap gap-8 relative w-[400px] h-[100px] lg:w-[700px] lg:h-[300px]">
      <Card className="flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="assets/fitrie-cappadocia.jpg"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Muhammad Fitrie</CardTitle>
          <CardDescription className="font-normal text-primary">Photographer</CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>Saya suka explore cahaya, emosi, dan momen, lepas tu biar gambar yang cakap sendiri 😊</p>
        </CardContent>

        <CardFooter>
          <div className="flex flex-row gap-4 items-center">
            <Link
              rel="noreferrer noopener"
              href="https://www.instagram.com/_mfitrie12"
              target="_blank"
              title="Instagram"
            >
              <Icon
                icon="line-md:instagram"
                width="30"
                height="30"
              />
            </Link>
            <Link
              rel="noreferrer noopener"
              href="https://www.threads.com/@_mfitrie12"
              target="_blank"
              title="Threads"
            >
              <Icon
                icon="bxl:threads"
                width="30"
                height="30"
              />
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
