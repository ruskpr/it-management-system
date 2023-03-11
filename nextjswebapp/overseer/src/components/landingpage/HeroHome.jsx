import React, { useState } from "react";
import Modal from "../utils/Modal";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useSession } from "next-auth/react";
function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const { data: session, status } = useSession();
 
  let headerOne;
  let headerTwo;
  let desc;
  let button;
  
  // hero content
  if (status === "authenticated") {
    headerOne = (
      <>
        <h1
          className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
          data-aos="zoom-y-out"
        >
          Hi, {session.user.name.split(" ")[0]}
        </h1>
      </>
    );
    headerTwo = "";
    desc = "";
    button = (
      <Button neutral rounded noBorder>
        <Link href="/dashboard" className="flex items-center">
          Go to my dashboard
          <span className="ml-3 text-2xl">
            <HiArrowNarrowRight />
          </span>
        </Link>
      </Button>
    );
  } else {
    headerOne = (
      <>
        <h1
          className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
          data-aos="zoom-y-out"
        >
          Welcome to{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Overseer
          </span>
        </h1>
      </>
    );
    headerTwo = (
      <>
        <h1
          className="text-4xl md:text-4xl leading-tighter tracking-tighter mb-8"
          data-aos="zoom-y-out"
        >
          Manage your team the{" "}
          <span className="text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            smart
          </span>{" "}
          way
        </h1>
      </>
    );
    desc =
      "Develop and maintain your team with a reliable and secure groundwork to facilitate the collection, storage, security and integrity of electronic data.";

    button = (
      <Button neutral rounded noBorder>
        <Link href="/auth/signup" className="flex items-center">
          Get started for free
          <span className="ml-3 text-2xl">
            <HiArrowNarrowRight />
          </span>
        </Link>
      </Button>
    );
  }

  return (
    <section className="relative">
      {/* Illustration behind hero content */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            {headerOne}
            {headerTwo}
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-16"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                {desc}
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none  flex justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>{button}</div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div
              className="relative flex justify-center mb-8"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <div className="flex flex-col justify-center"></div>
              <Button outline rounded>
                <Link
                  href="https://github.com/ruskpr/it-management-system"
                  className="flex items-center"
                  target="_blank"
                >
                  <FaGithub className="w-6 h-6  text-gray-400 flex-shrink-0" />

                  <span className="ml-3">View us on Github</span>
                </Link>
              </Button>
            </div>

            {/* Modal */}
            <Modal
              id="modal"
              ariaLabel="modal-headline"
              show={videoModalOpen}
              handleClose={() => setVideoModalOpen(false)}
            >
              <div className="relative pb-9/16">
                <iframe
                  className="absolute w-full h-full"
                  src="https://player.vimeo.com/video/174002812"
                  title="Video"
                  allowFullScreen
                ></iframe>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
