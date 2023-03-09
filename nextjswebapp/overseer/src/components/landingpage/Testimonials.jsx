import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import Link from "next/link";
function Testimonials() {
  return (
    <section className="relative">
      {/* Illustration behind content */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="text-xl font-bold mb-4">
              Trusted by over 20,000 companies all over the world
            </h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out"></p>
          </div>

          {/* logos */}
          <div className="jsx-3730048229 images-logos-component ">
            <div className="jsx-4012096777 logos new-layout">
              <div className="jsx-4012096777 images-logos-wrapper">
                <div className="images-gallery">
                  <div className="jsx-160764463 images-gallery-row flex gap-5 flex-wrap justify-center mx-16">
                    <div className="jsx-1848455873 image-gallery">
                      <picture className="jsx-4212101279 picture-component social-proof-gallery-picture">
                        <img
                          alt="Genpact"
                          className=" h-12 jsx-4212101279 "
                          src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/genpact.png"
                        />
                      </picture>
                    </div>
                    <div className=" h-12 jsx-1848455873 image-gallery">
                      <picture className=" h-12 jsx-4212101279 picture-component social-proof-gallery-picture">
                        <img
                          alt="HoltCat"
                          className=" h-12 jsx-4212101279 "
                          src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/HoltCat.png"
                        />
                      </picture>
                    </div>
                    <div className=" h-12 jsx-1848455873 image-gallery">
                      <picture className=" h-12 jsx-4212101279 picture-component social-proof-gallery-picture">
                        <img
                          alt="Canva"
                          className=" h-12 jsx-4212101279 "
                          src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/canva.png"
                        />
                      </picture>
                    </div>
                    <div className=" h-12 jsx-1848455873 image-gallery">
                      <picture className=" h-12 jsx-4212101279 picture-component social-proof-gallery-picture">
                        <img
                          alt="Coca Cola"
                          className=" h-12 jsx-4212101279 "
                          src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/coca_cola.png"
                        />
                      </picture>
                    </div>
                    <div className=" h-12 jsx-1848455873 image-gallery">
                      <picture className=" h-12 jsx-4212101279 picture-component social-proof-gallery-picture">
                        <img
                          alt="Lionsgate"
                          className=" h-12 jsx-4212101279 "
                          src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/lionsgate.png"
                        />
                      </picture>
                    </div>
                    <div className=" h-12 jsx-1848455873 image-gallery">
                      <picture className=" h-12 jsx-4212101279 picture-component social-proof-gallery-picture">
                        <img
                          alt="Hulu"
                          className=" h-12 jsx-4212101279 "
                          src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hulu.png"
                        />
                      </picture>
                    </div>
                    <div className=" h-12 jsx-1848455873 image-gallery">
                      <picture className=" h-12 jsx-4212101279 picture-component social-proof-gallery-picture">
                        <img
                          alt="BD"
                          className=" h-12 jsx-4212101279 "
                          src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/bd.png"
                        />
                      </picture>
                    </div>
                    <div className=" h-12 jsx-1848455873 image-gallery">
                      <picture className=" h-12 jsx-4212101279 picture-component social-proof-gallery-picture">
                        <img
                          alt="Electronic Arts"
                          className=" h-12 jsx-4212101279 "
                          src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/Electronic_Arts.png"
                        />
                      </picture>
                    </div>
                    <div className=" h-12 jsx-1848455873 image-gallery">
                      <picture className=" h-12 jsx-4212101279 picture-component social-proof-gallery-picture">
                        <img
                          alt="Universal Music Group"
                          className=" h-12 jsx-4212101279 "
                          src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/universal.png"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Items */}
          

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
              {/* Testimonial */}
              <div className="text-center px-12 py-8 pt-20 mx-4 md:mx-0">
                <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2"></div>
                <blockquote className="text-xl font-medium mb-4">
                  <div className="flex pl-8 mt-3 top-0 text-5xl justify-center text-gray-600 gap-6 absolute">
                    <ImQuotesLeft />
                    <ImQuotesRight />
                  </div>
                  "If your are reading this I would like to personally thank
                  your for visiting my website. Enjoy your stay and consider
                  subscibing to the newsletter."
                </blockquote>
                <cite className="block font-bold text-lg not-italic mb-1">
                  Russ K.
                </cite>
                <div className="text-gray-600">
                  <span>CEO & Founder</span>{" "}
                  <Link className="text-blue-600 hover:underline" href="https://github.com/ruskpr/it-management-system"
                  target="_Blank">
                    Overseer IT Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
