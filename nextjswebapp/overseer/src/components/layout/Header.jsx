import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Modal from "@/components/utils/Modal";
import { GrMenu } from "react-icons/gr";
import Portal from "@/components/utils/Portal";
import { useSession, signOut } from "next-auth/react";
import OverseerLogo from "../ui/OverseerLogo";

function Header() {
  const [top, setTop] = useState(true);
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const { data: session, status } = useSession();

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  let navItems;

  if (status === "authenticated") {
    navItems = (
      <>
        <li>
          <Button primary rounded>
            <Link href="/dashboard/login">Dashboard</Link>
          </Button>
        </li>
        <li>
          <Button neutral rounded onClick={() => signOut()}>
            Sign out
          </Button>
        </li>
      </>
    );
  } else {
    navItems = (
      <>
        <li>
          <Button outline rounded>
            <Link href="/auth/signup">Sign up</Link>
          </Button>
        </li>
        <li>
          <Button neutral rounded>
            <Link href="/dashboard/login">Login</Link>
          </Button>
        </li>
      </>
    );
  }

  return (
    <header
      className={`fixed w-full bg-white z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && "bg-white bg-opacity-90 shadow-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link href="/">
              <OverseerLogo className="text-3xl" />
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <div className="flex flex-grow justify-end gap-3 flex-wrap items-center sm:hidden flex">
              <Button
                className="border-0"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setMenuModalOpen(true);
                }}
              >
                <GrMenu className="text-3xl border-0" />
              </Button>
            </div>
            <ul className="flex flex-grow justify-end gap-3 flex-wrap items-center hidden sm:flex">
              {navItems}
            </ul>
          </nav>

          {/* Modal */}
          <Portal id="#menuPortal">
            <Modal
              id="modal"
              ariaLabel="modal-headline"
              show={menuModalOpen}
              className="hidden sm:flex bg-black flex justify-center w-screen "
              handleClose={() => setMenuModalOpen(false)}
            >
              <div className="w-fit h-fit bg-transparent flex justify-center">
                <ul className="flex flex-col justify-center bg-transparent gap-3 h-fit flex-column items-center">
                  <li>
                    <Button neutral rounded>
                      <Link href="/" target="_parent">
                        Home
                      </Link>
                    </Button>
                  </li>
                  {navItems}
                </ul>{" "}
              </div>
            </Modal>
          </Portal>
        </div>
      </div>
    </header>
  );
}

export default Header;
