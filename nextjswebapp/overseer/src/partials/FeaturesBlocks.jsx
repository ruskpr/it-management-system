import React from "react";
import {
  FcOvertime,
  FcBullish,
  FcWorkflow,
  FcConferenceCall,
} from "react-icons/fc";

function FeaturesBlocks() {
  return (
    <section className="relative border bg-gray-900">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="mb-4 text-white text-3xl">
              Manage your team with ease
            </h2>
            <p className="text-xl text-gray-400">
              Improve your management by easily monitoring your team. Simplify
              communication and maximize productivity.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <FcOvertime className="text-6xl mb-3" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Initial Contact
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <FcBullish className="text-6xl mb-3" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Discovery Session
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <FcWorkflow className="text-6xl mb-3" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Contracting
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <FcConferenceCall className="text-6xl mb-3" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Fast Prototyping
              </h4>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
