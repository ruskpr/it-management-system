import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { GrMenu } from "react-icons/gr";

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link href="/">
              <Image
                priority
                src="/overseerlogo.svg"
                height={64}
                width={64}
                alt="Overseer"
              />
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <div className="flex flex-grow justify-end gap-3 flex-wrap items-center sm:hidden flex">
              <Button className="border-0"><GrMenu className="text-3xl border-0" /></Button>
            </div>
            <ul className="flex flex-grow justify-end gap-3 flex-wrap items-center hidden sm:flex">
              <li>
                <Button outline rounded>
                  <Link href="/auth/signup">Sign up</Link>
                </Button>
              </li>
              <li>
                <Button neutral rounded>
                  <Link href="/auth/login">Login</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
