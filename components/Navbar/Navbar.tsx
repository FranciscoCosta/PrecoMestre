import Link from "next/link";
import Image from "next/image";

import { SlMagnifier } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";

const navIcons = [
  {
    icon: <SlMagnifier />,
    path: "/search",
    alt: "search",
  },
  {
    icon: <FaRegHeart />,
    path: "/favorites",
    alt: "favorites",
  },
  {
    icon: <RxPerson />,
    path: "/profile",
    alt: "profile",
  },
];

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/assets/logo.png" alt="logo" width={35} height={35} />

          <p className="nav-logo">
            Preço<span className="text-primary">Mestre</span>
          </p>
            </Link>

          <div className="flex items-center gap-5">
            {navIcons.map((icon, index) => (
              <Link key={`${icon.alt}-${index}`} href={icon.path}>{icon.icon}</Link>
            ))}
          </div>
      </nav>
    </header>
  );
};

export default Navbar;
