import Container from "../common/container";
import Image from "next/image";
import { getStrapiImage } from "../../utils/strapiFetch";
import Link from "next/link";

const Hero = ({ heroContent }) => {
  const textVarients = {
    initial: {
      x: -500,
    },
    animate: {
      x: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <section className="relative h-[50rem]">
      <Image
        src={getStrapiImage(heroContent.heroBanner.url)}
        alt={heroContent.heroBanner.alternativeText}
        fill
        className="object-cover object-left md:object-right h-full"
      />
      <div className="absolute inset-0 z-10 size-full  flex flex-col justify-center backdrop-brightness-75">
        <Container>
          <h1 className="text-4xl md:text-6xl text-orange-50 text-center md:text-left max-w-[20ch] font-black md:leading-16">
            {heroContent.heroTitle}
          </h1>
          <p className="max-w-[45ch] mt-4 text-orange-100 text-center md:text-left">
            {heroContent.heroDescription}
          </p>
          <div className="flex flex-col md:flex-row gap-3 mt-4">
            {heroContent.heroButtons &&
              heroContent.heroButtons?.map((heroButton) =>
                heroButton.isVisible ? (
                  <Link
                    href={heroButton.url ?? "/"}
                    key={heroButton.id ?? heroButton.label}
                    className={`${heroButton.style}`}
                  >
                    {heroButton.label}
                  </Link>
                ) : null
              )}
          </div>
        </Container>
      </div>
    </section>
  );
};
export default Hero;
