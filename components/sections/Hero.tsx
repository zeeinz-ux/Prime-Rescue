import Image from "next/image";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import armadaImg from "@/public/images/armada-1.webp";

const TRUST_POINTS = ["Operasional 24/7", "Tim Terlatih", "Respons Cepat"];

export default function Hero() {
  return (
    <section id="beranda" className="bg-clinical-white py-12 md:py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="lg:order-2">
            <h1 className="text-4xl font-semibold leading-tight text-navy-dark md:text-5xl">
              Ambulans 24 Jam Siap Membantu Anda
            </h1>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <WhatsAppButton trackLabel="hero" className="w-full sm:w-auto">
                Hubungi Via WhatsApp
              </WhatsAppButton>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {TRUST_POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <Icon name="check" className="h-5 w-5 text-medical-green" />
                  <span className="text-sm font-medium text-navy-dark">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:order-1">
            <Image
              src={armadaImg}
              alt="Ambulans Prima Rescue siap melayani 24 jam di Gunung Sindur, Bogor"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
