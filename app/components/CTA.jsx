import Image from "next/image";
import Button from "./common/Button";
import Container from "./common/container";
import { getStrapiImage } from "../utils/strapiFetch";
import Link from "next/link";

export const CTA = ({ ctaContent }) => {
  return (
    <section className=" relative h-auto  md:max-h-[30rem] flex items-center justify-center">
      <Image
        src={getStrapiImage(ctaContent.backgroundImage.url)}
        fill
        alt={
          ctaContent.backgroundImage.alternativeText ?? "cta background image"
        }
        className="object-cover object-[20%_25%] -z-10"
      />
      <div className="backdrop-brightness-50 size-full flex flex-col gap-8 justify-center items-center px-[7%] py-20">
        <h3 className="text-orange-50 text-3xl text-center md:text-left">
          {ctaContent.title}
        </h3>
        <p className="md:max-w-[65ch] text-orange-100 text-center">
          {ctaContent.description}
        </p>
        {ctaContent.ctaLink ? (
          <Link
            href={ctaContent.ctaLink.url}
            className={ctaContent.ctaLink.style}
          >
            {ctaContent.ctaLink.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
};
