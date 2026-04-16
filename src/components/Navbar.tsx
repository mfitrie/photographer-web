import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button, buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { LogoIcon } from "./Icons";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface RouteProps {
  href: string;
  label: string;
  onClick: () => void,
}

const routeList: RouteProps[] = [
  // {
  //   href: "#features",
  //   label: "Features",
  // },
  // {
  //   href: "#testimonials",
  //   label: "Testimonials",
  // },
  {
    href: "#pricing",
    label: "Pricing",
    onClick: () => {
      document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
    }
  },
  {
    href: "#faq",
    label: "FAQ",
    onClick: () => {
      document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
    }
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link
              rel="noreferrer noopener"
              href="/"
              className="flex flex-row items-center gap-2 ml-2 font-bold text-xl"
            >
              {/* <LogoIcon /> */}
              <Icon icon="hugeicons:camera-ai" width="24" height="24" />
              {/* //TODO: use handswriting font */}
              <span>Capture The Moment</span>
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="flex flex-row items-center gap-2 justify-center font-bold text-xl">
                    <Icon icon="hugeicons:camera-ai" width="24" height="24" />
                    <span>Capture The Moment</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {
                    routeList.map(({ href, label, onClick }: RouteProps) => (
                      <Button
                        className="cursor-pointer"
                        key={label}
                        onClick={onClick}
                        variant={"ghost"}
                      >
                        {label}
                      </Button>
                    ))
                  }
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {
              routeList.map((route: RouteProps, i) => (
                <Button
                  className="cursor-pointer"
                  key={route.label}
                  onClick={route.onClick}
                  variant={"ghost"}
                >
                  {route.label}
                </Button>
              ))
            }
          </nav>

          <div className="hidden md:flex gap-2">
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
