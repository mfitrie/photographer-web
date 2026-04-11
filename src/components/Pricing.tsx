import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon } from "@iconify/react";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  handleButtonClick: () => void,
  benefitList: string[];
}

const whatsappNumber = "60133527921";
const BASE_WHATSAPP_URL = `https://wa.me/${whatsappNumber}?`
const pricingList: PricingProps[] = [
  {
    title: "General Photography",
    popular: 0,
    price: 300,
    description: "Untuk semua momen, semua cerita 📸",
    buttonText: "Contact",
    handleButtonClick: () => {
      const url = new URL(BASE_WHATSAPP_URL);
      const message = "Hai, saya berminat dengan pakej General Photography anda";
      url.searchParams.append("message", message);
      window.open(url.toString(), "_blank")
    },
    benefitList: [
      "Unlimited Shot Coverage",
      "Professional Lightroom Editing",
      // "Transportation Covered",
      "High-Resolution Soft Copy via Google Drive"
    ],
  },
  {
    title: "Tunang / Nikah Photography",
    popular: 1,
    price: 400,
    description: "Momen sekali seumur hidup, diabadikan dengan penuh makna 💍",
    buttonText: "Contact",
    handleButtonClick: () => {
      const url = new URL(BASE_WHATSAPP_URL);
      const message = "Hai, saya berminat dengan pakej Tunang / Nikah Photography anda";
      url.searchParams.append("message", message);
      window.open(url.toString(), "_blank")
    },
    benefitList: [
      "Unlimited Shot Coverage",
      "Professional Lightroom Editing",
      "Transportation Covered",
      "High-Resolution Soft Copy via Google Drive"
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Pricing{" "}
        </span>
      </h2>
      {/* <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        reiciendis.
      </h3> */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {/* //TODO: do later */}
                {/* {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Paling Popular
                  </Badge>
                ) : null} */}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">RM{pricing.price}</span>
              </div>
              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button
                className="w-full cursor-pointer flex flex-row items-center gap-1"
                onClick={pricing.handleButtonClick}
              >
                {pricing.buttonText}
                <Icon icon="ic:baseline-whatsapp" width="24" height="24" />
              </Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
