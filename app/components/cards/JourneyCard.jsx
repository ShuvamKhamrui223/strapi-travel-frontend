import Image from "next/image";
import { getStrapiImage } from "../../utils/strapiFetch";
import { formatCurrency } from "../../utils/formatter";
const JourneyCard = ({ journeyCardContent }) => {
  return (
    <div className="relative h-[30rem] w-auto group overflow-hidden">
      {journeyCardContent.coverImage ? (
        <Image
          src={getStrapiImage(journeyCardContent.coverImage.url)}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          alt={
            journeyCardContent.coverImage.alternativeText ||
            journeyCardContent.tripName
          }
        />
      ) : null}
      <div className="absolute top-0 left-0 size-full bg-orange-800/50 group-hover:bg-orange-400/60 transition-colors duration-700 flex flex-col items-center justify-center gap-2">
        <h4 className="text-background text-xl capitalize">
          {journeyCardContent.tripName}
        </h4>
        <h5 className="text-brand font-bold bg-orange-100 px-4 py-2.5 w-fit">
          {formatCurrency(journeyCardContent.price)}
        </h5>
      </div>
    </div>
  );
};

export default JourneyCard;
