import { getStrapiImage } from "../../utils/strapiFetch";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ logoURL }) => {
  return (
    <div>
      <Link href={"/"}>
        {" "}
        {logoURL ? (
          <Image
            src={getStrapiImage(logoURL.url)}
            alt="logo"
            width={50}
            height={50}
          />
        ) : (
          <span className="text-3xl text-gray-100 font-semibold capitalize">
            travel<span className="text-orange-300">co</span>
          </span>
        )}
      </Link>
    </div>
  );
};

export default Logo;
