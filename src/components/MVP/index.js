import React from "react";
import yellowLine from "../../assets/Icons/yellowLine.png";
import discoverLight from "../../assets/light/discover.png";
import executeLight from "../../assets/light/execute.png";
import strategyLight from "../../assets/light/strategy.png";
import launchLight from "../../assets/light/launch.png";
import discoverDark from "../../assets/dark/discover.png";
import executeDark from "../../assets/dark/execute.png";
import strategyDark from "../../assets/dark/strategy.png";
import launchDark from "../../assets/dark/launch.png";

import Button from "../Button";

const MVP = ({ theme }) => {
  return (
    <div className="bg-section2 lg:p-12 text-primary p-4">
      <div className="flex justify-between w-full">
        <div className="lg:w-7/12 w-full">
          <img src={yellowLine} alt="Ideas to realty" className="mb-6" />
          <div className="text-5xl font-bold leading-none">
            MVP program for early stage startups
            <span role="img" aria-label="Startups">
              🚀
            </span>
          </div>
          <div className="text-lg mt-4 mb-12">
            Shape ideas to products with #lessthanamonth MVP program
          </div>
        </div>
        <div className="h-16 lg:block hidden">
          <Button
            onClick={() =>
              document.getElementById("contact_form").scrollIntoView()
            }
            title="Join MVP Program"
          ></Button>
        </div>
      </div>

      <div className="w-full flex lg:flex-row flex-col">
        <div className="lg:w-3/12 w-full p-4">
          <div>
            <img
              src={theme === "light" ? discoverLight : discoverDark}
              alt="Ideate"
            />
          </div>
          <div className="text-2xl font-bold mt-6">Discover</div>
          <div className="text-base ">
            Have an idea? We listen to your need, gather data to find the
            problem source. Yes we ask a lot of questions to understand idea and
            give you best recommendations
          </div>
        </div>

        <div className="lg:w-3/12 w-full p-4">
          <div>
            <img
              src={theme === "light" ? strategyLight : strategyDark}
              alt="Ideate"
            />
          </div>
          <div className="text-2xl font-bold mt-6">Strategize</div>
          <div className="text-base ">
            We are a product team. We bring product managers, designers,
            developers and UX writers on one table and then let the spec guide
            the development.
          </div>
        </div>

        <div className="lg:w-3/12 w-full p-4">
          <div>
            <img
              src={theme === "light" ? executeLight : executeDark}
              alt="Ideate"
            />
          </div>
          <div className="text-2xl font-bold mt-6">Execute</div>
          <div className="text-base ">
            Our best-in-class developers and user experience designers build the
            foundation of the product strong and scalable.
          </div>
        </div>

        <div className="lg:w-3/12 w-full p-4">
          <div>
            <img
              src={theme === "light" ? launchLight : launchDark}
              alt="Ideate"
            />
          </div>
          <div className="text-2xl font-bold mt-6">Launch</div>
          <div className="text-base ">
            Our user-focused approach keeps us on toes at all times. As you
            expand your horizon of services or optimize funnels.
          </div>
        </div>
      </div>

      <div className="h-16 lg:hidden block">
        <button
          onClick={() =>
            document.getElementById("contact_form").scrollIntoView()
          }
          className="rounded-md bg-secondary text-white py-5 px-10 text-base font-bold box-border w-full"
        >
          Join MVP Program
        </button>
      </div>
    </div>
  );
};

export default MVP;
