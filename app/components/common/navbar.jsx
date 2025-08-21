"use client";
import { usePathname } from "next/navigation";
import Button from "./Button";
import Logo from "./logo";
import Link from "next/link";
import Container from "./container";

// framer
import { motion } from "framer-motion";

const Navbar = ({ navbarData }) => {
  const currentPath = usePathname();
  if (!navbarData) return null;
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <Container>
        <div className="w-full flex items-center justify-between py-4">
          <Logo logoURL={navbarData.logo} />
          <ul className="hidden md:flex items-center gap-4">
            {navbarData &&
              navbarData?.navlinks.map((item) =>
                item.isVisible ? (
                  <li
                    className={`${item.style == "ghost" && "link-ghost"} ${
                      currentPath == item.url ? "active-ghost-link" : ""
                    }`}
                    key={item.label}
                  >
                    <Link href={item.url}>{item.label}</Link>
                  </li>
                ) : null
              )}
          </ul>

          <Button textContent="contact us" href="/contact" filled />
        </div>
      </Container>
    </motion.nav>
  );
};

export default Navbar;
