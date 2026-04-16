import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Bilakah sesi fotografi anda biasanya diadakan?",
    answer: "Sesi fotografi saya hanya diadakan pada hujung minggu.",
    value: "item-1",
  },
  {
    question: "Bilakah gambar akan diserahkan kepada anda?",
    answer: "Gambar akan diserahkan dalam tempoh 2 hingga 3 hari selepas majlis.",
    value: "item-2",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4 flex flex-row items-center">
        Masih ada soalan?{" "}
        <Button
          className="font-bold cursor-pointer"
          variant="link"
          onClick={() => {
            const whatsappNumber = "60133527921";
            const BASE_WHATSAPP_URL = `https://wa.me/${whatsappNumber}?`;
            const message = "Hai, saya nak tanya tentang pakej fotografi anda.";
            const url = new URL(BASE_WHATSAPP_URL);
            url.searchParams.append("message", message);
            window.open(url.toString(), "_blank");
          }}
        >
          Hubungi saya
        </Button>
      </h3>
    </section>
  );
};
