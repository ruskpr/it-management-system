import React, { useState } from "react";
import Modal from "../utils/Modal";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">
      {/* Illustration behind hero content */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Welcome to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Overseer
              </span>
            </h1>
            <h1
              className="text-3xl md:text-3xl leading-tighter tracking-tighter mb-8"
              data-aos="zoom-y-out"
            >
              Manage your team the{" "}
              <span className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                smart
              </span>{" "}
              way
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-16"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Develop and maintain highly effective, reliable, secure, and
                innovative information systems to support instructional,
                administrative and research functions. Facilitate the
                collection, storage, security and integrity of electronic data
                while ensuring appropriate access.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <Button primary rounded noBorder>
                    <Link href="/auth/signup">Get started</Link>
                  </Button>
                </div>
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
