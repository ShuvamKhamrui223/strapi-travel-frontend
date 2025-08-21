import Container from "./container";
import Link from "next/link";

const Footer = ({ footerContent }) => {
  if (!footerContent) return null;
  return (
    <footer className="bg-[hsl(15_60%_5%)] py-20">
      <Container>
        <section className="grid md:grid-cols-3 grid-flow-row grid-rows-3 md:grid-rows-1 md:gap-4 items-center md:items-start md:justify-items-center">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-gray-500">
              {footerContent.footerHeading}
            </h3>
            <p className="text-orange-600 ">
              {footerContent.footerDescription}
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <h4 className="text-gray-400 text-lg capitalize">
              important links
            </h4>
            {footerContent.otherLinks.map((item) => (
              <Link
                key={item.linkLabel}
                href={item.linkURL}
                className="text-gray-300 text-sm"
              >
                {item.linkLabel}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h4 className="text-xl text-gray-400 capitalize">contact info</h4>
            <p className="text-gray-300 text-sm">
              {footerContent.contactInfo.address}
            </p>
            <p className="text-gray-300 text-sm">
              {footerContent.contactInfo.emailAddress}
            </p>
            <p className="text-gray-300 text-sm">
              {footerContent.contactInfo.phNo}
            </p>
          </div>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
