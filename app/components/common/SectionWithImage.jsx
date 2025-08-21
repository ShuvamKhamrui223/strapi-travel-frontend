import React from "react";
import Container from "./container";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { getStrapiImage } from "../../utils/strapiFetch";

const SectionWithImage = ({ SectionWithImageContent }) => {
  return (
    <>
      <Container>
        <section className="lg:h-[40rem] py-40 flex items-center">
          <div
            className={`w-full flex items-center justify-center gap-10 ${
              SectionWithImageContent.imageOnleft
                ? "flex-col-reverse lg:flex-row-reverse"
                : "flex-col lg:flex-row"
            }`}
          >
            <div className="space-y-3">
              <SectionHeader
                SectionHeaderContent={
                  SectionWithImageContent.sectionWithImageHeader
                }
              />
              <p className="max-w-[45ch]">
                {SectionWithImageContent.description}
              </p>
            </div>
            <Image
              src={getStrapiImage(SectionWithImageContent.sectionMedia.url)}
              alt={
                SectionWithImageContent.sectionMedia.alternativeText ??
                SectionWithImageContent.sectionWithImageHeader.backgroundTitle+" section side image"
              }
              width={500}
              height={550}
            />
          </div>
        </section>
      </Container>
    </>
  );
};

export default SectionWithImage;
