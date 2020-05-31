import React from "react";
import i2Light from "../../assets/light/i2.png";
import i2Dark from "../../assets/dark/i2.png";
import greenLine from "../../assets/Icons/greenLine.svg";
import bithyve from "../../assets/Icons/bithyve.svg";
import bithyveLight from "../../assets/Icons/bithyve.svg";
import msb from "../../assets/Icons/msb.svg";
import aws from "../../assets/Icons/aws.svg";
import kln from "../../assets/Icons/kln.svg";
import klnLight from "../../assets/Icons/kln.svg";
import playa from "../../assets/Icons/playa.svg";

const Circle = ({ theme }) => {
  return (
    <>
      <div className="lg:pt-8 lg:pb-8 text-primary lg:flex lg:justify-start">
        <div className="lg:w-1/2 w-full lg:px-12 px-0 flex-1">
          <img
            className="w-full h-full object-contain"
            alt="Software Roadmap"
            src={theme === "light" ? i2Light : i2Dark}
          />
        </div>
        <div className="lg:w-1/2 w-full flex-1 lg:px-12 box-border p-4">
          <img src={greenLine} alt="Ideas to realty" className="mb-6 mt-10" />
          <div className="text-5xl font-bold leading-none">
            Always ready for new challenges
          </div>
          <div className="text-lg mt-4 mb-12">
            From startups to million dollar companies our products handcrafted
            by experts does the talk.
          </div>
          <div className="flex flex-wrap lg:flex-row flex-col">
            <div className="lg:w-1/2 w-full mb-6">
              <span className="mr-4 text-2xl">&#8226;</span> User experience
              design
            </div>
            <div className="lg:w-1/2 w-full mb-6">
              <span className="mr-4 text-2xl">&#8226;</span> Business strategy
            </div>
            <div className="lg:w-1/2 w-full mb-6">
              <span className="mr-4 text-2xl">&#8226;</span> Mobile app
              development
            </div>
            <div className="lg:w-1/2 w-full mb-6">
              <span className="mr-4 text-2xl">&#8226;</span> Product management
            </div>
            <div className="lg:w-1/2 w-full mb-6">
              <span className="mr-4 text-2xl">&#8226;</span> Front end
              development
            </div>
            <div className="lg:w-1/2 w-full mb-6">
              <span className="mr-4 text-2xl">&#8226;</span> VR, AR, Mixed
              reality
            </div>
            <div className="lg:w-1/2 w-full mb-6">
              <span className="mr-4 text-2xl">&#8226;</span> Back end
              development
            </div>
            <div className="lg:w-1/2 w-full mb-6">
              <span className="mr-4 text-2xl">&#8226;</span> Growth hacking
            </div>
          </div>
        </div>
      </div>
      {/* Companies */}
      <div className="lg:pb-16 pb-4">
        <div className="flex justify-center items-center text-subtle mb-6 p-4 text-center">
          Our products are used by people working in
        </div>
        <div className="flex justify-center items-center w-full lg:flex-row flex-col">
          <div className="w-2/12 flex justify-center items-center flex-col mt-6">
            <img
              src={theme === "light" ? bithyveLight : bithyve}
              alt="Bit Hyve"
            />
            <p className="text-subtle mt-5">London</p>
          </div>
          <div className="w-2/12 flex justify-center items-center flex-col mt-6">
            <img src={msb} alt="MSB" />
            <p className="text-subtle mt-5">Brazil</p>
          </div>
          <div className="w-2/12 flex justify-center items-center flex-col mt-6">
            <img src={aws} alt="Amazon Web Services" />
            <p className="text-subtle mt-5">Ohio,USA</p>
          </div>
          <div className="w-2/12 flex justify-center items-center flex-col mt-6">
            <img src={theme === "light" ? klnLight : kln} alt="KLN" />
            <p className="text-subtle mt-5">Malaysia</p>
          </div>
          <div className="w-2/12 flex justify-center items-center flex-col mt-6">
            <img src={playa} alt="Playa" />
            <p className="text-subtle mt-5">Mexico</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Circle;
