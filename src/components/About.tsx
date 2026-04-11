import { Statistics } from "./Statistics";


export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={"/assets/pilot.png"}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Me
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Semua bermula dari rasa curious, apa yang orang lain tak perasan, tu lah yang saya kejar. Saya suka travel, cari cahaya yang best, dan tangkap momen-momen kecil yang selalu orang terlepas pandang. Setiap gambar saya edit elok-elok dalam Lightroom, dan video pula saya siapkan dalam DaVinci Resolve.
                Sebab bagi saya, masa yang dah lepas tu, boleh hidup balik bila tengok gambar yang kita ambil.
              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
