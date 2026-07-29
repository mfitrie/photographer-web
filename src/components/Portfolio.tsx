import CarouselScale from "./shadcn-studio/carousel/carousel-11";





export default function Portfolio() {
    return (
        <section
            id="portfolio"
            className="container py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Portfolio</span>
            </h2>
            <div className="px-4">
                <CarouselScale />
            </div>
        </section>
    );
};
