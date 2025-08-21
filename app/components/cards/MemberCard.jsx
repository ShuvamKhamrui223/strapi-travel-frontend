import Image from "next/image";
import React from "react";
import { getStrapiImage } from "../../utils/strapiFetch";

const MemberCard = ({ MemberCardContent }) => {
  if (!MemberCardContent) return null;
  return (
    <div className="flex flex-col items-center px-8 py-4 group">
      <div className="size-[15rem] relative overflow-hidden">
        <Image
          src={getStrapiImage(MemberCardContent.memberProfilePic.url)}
          fill
          alt={
            MemberCardContent.memberProfilePic.alternativeText ||
            MemberCardContent.memberName
          }
          loading="lazy"
          className="group-hover:scale-125 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col items-center  py-4">
        <h4 className="text-lg capitalize">{MemberCardContent.memberName}</h4>
        <p className="text-gray-400 uppercase text-sm">
          {MemberCardContent.designation}
        </p>
        {/* <p className="text-center text-foreground text-sm">{MemberCardContent.memberBio}</p> */}

        <div className="flex items-center justify-center gap-2 mt-5">
          {MemberCardContent.socialLinks.length > 0
            ? MemberCardContent.socialLinks.map((sl) => (
                <div className="bg-orange-100 p-2">
                  <Image
                    src={getStrapiImage(sl.platformIcon.url)}
                    height={20}
                    width={20}
                    className="fill-red-400 hover:scale-125 transition-transform duration-200 cursor-pointer sepia-100"
                    alt={sl.platformName || "social link"}
                  />
                </div>
              ))
            : "no links"}
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
