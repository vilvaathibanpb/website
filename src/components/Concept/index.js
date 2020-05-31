import React from "react";
import bulbLight from "../../assets/light/bulb.svg";
import blueLine from "../../assets/Icons/blueLine.svg";
import designLight from "../../assets/light/design.svg";
import developLight from "../../assets/light/develop.svg";
import binoLight from "../../assets/light/binocular.svg";
import bulbDark from "../../assets/dark/bulb.svg";
import designDark from "../../assets/dark/design.svg";
import developDark from "../../assets/dark/develop.svg";
import binoDark from "../../assets/dark/binocular.svg";

const Concept = ({ theme }) => {
  return (
    <div className="bg-section1 lg:p-12 text-primary flex p-4 lg:flex-row flex-col">
      <div className="lg:w-6/12 w-full">
        <img src={blueLine} alt="Ideas to realty" className="mb-6" />
        <div className="text-5xl font-bold leading-none">
          Bringing ideas to reality
        </div>
        <div className="text-lg mt-4 mb-12">
          We have your back on cutting edge technologies and building products
        </div>
      </div>
      <div className="lg:w-6/12">
        <div className="flex lg:flex-row flex-col w-full">
          <div className="lg:w-6/12 w-full p-4">
            <div>
              <img
                src={theme === "light" ? bulbLight : bulbDark}
                alt="Ideate"
              />
            </div>
            <div className="text-2xl font-bold mt-6">Ideate</div>
            <div className="text-base ">
              Just conceived an idea, or trying to bring your innovation to the
              market? We help you launch while creating memorable experience for
              your users.
            </div>
          </div>
          <div className="lg:w-6/12 w-full p-4">
            <div>
              <img
                src={theme === "light" ? designLight : designDark}
                alt="Design"
              />
            </div>
            <div className="text-2xl font-bold mt-6">Design</div>
            <div className="text-base ">
              Just conceived an idea, or trying to bring your innovation to the
              market? We help you launch while creating memorable experience for
              your users.{" "}
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col w-full">
          <div className="lg:w-6/12 w-full p-4">
            <div>
              <img
                src={theme === "light" ? binoLight : binoDark}
                alt="Ideate"
              />
            </div>
            <div className="text-2xl font-bold mt-6">Market Research</div>
            <div className="text-base ">
              Our user-focused approach keeps us on toes at all times. As you
              expand your horizon of services or optimize funnels.
            </div>
          </div>
          <div className="lg:w-6/12 w-full p-4">
            <div>
              <img
                src={theme === "light" ? developLight : developDark}
                alt="Design"
              />
            </div>
            <div className="text-2xl font-bold mt-6">Develop</div>
            <div className="text-base ">
              Our user-focused approach keeps us on toes at all times. As you
              expand your horizon of services or optimize funnels.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concept;
