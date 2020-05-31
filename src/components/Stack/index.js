import React from "react";
import meshDark from "../../assets/dark/mesh.png";
import meshLight from "../../assets/light/mesh.png";
import lineLight from "../../assets/light/line.png";
import lineDark from "../../assets/dark/line.svg";
import greenLine from "../../assets/Icons/greenLine.png";
import swift from "../../assets/Icons/swift.svg";
import react from "../../assets/Icons/react.png";
import reactVR from "../../assets/Icons/react_vr.png";
import gql from "../../assets/Icons/gql.png";
import node from "../../assets/Icons/node.png";
import electron from "../../assets/Icons/electron.png";
import kotlin from "../../assets/Icons/kotlin.png";
import rn from "../../assets/Icons/rn.png";
import flutter from "../../assets/Icons/flutter.png";
import unity from "../../assets/Icons/unity.png";
import unityLight from "../../assets/Icons/unity_light.png";

const Stack = ({ theme }) => {
  const data = {
    web: [
      {
        name: "React JS",
        image: react,
      },
      {
        name: "GraphQL",
        image: gql,
      },
      {
        name: "Node JS",
        image: node,
      },
      {
        name: "Electron JS",
        image: electron,
      },
    ],
    mobile: [
      {
        name: "Swift",
        image: swift,
      },
      {
        name: "Kotlin",
        image: kotlin,
      },
      {
        name: "React Native",
        image: rn,
      },
      {
        name: "Flutter",
        image: flutter,
      },
    ],
    vr: [
      {
        name: "Unity",
        image: theme === "light" ? unityLight : unity,
      },
      {
        name: "React VR",
        image: reactVR,
      },
    ],
  };
  return (
    <div
      style={{ background: `url(${theme === "light" ? meshLight : meshDark})` }}
      className="flex p-4 lg:p-20 text-primary lg:flex-row flex-col flex-col-reverse"
    >
      {/* Tech Stack  */}
      <div className="lg:w-8/12 w-full">
        {/* Web */}
        <div className="flex items-center  mt-12">
          <img
            src={theme === "light" ? lineLight : lineDark}
            alt="product ride"
          />
          <div className="text-base tracking-wide font-medium ml-4">
            Web Applications
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center lg:justify-start">
          {data.web.map((e, i) => (
            <div
              key={i}
              className="flex p-6 box-border flex-col items-center justify-center h-32 w-32 bg-gray1 m-4"
            >
              <img src={e.image} alt="Swift iOS" />
              <div className="mt-5 text-xs">{e.name}</div>
            </div>
          ))}
        </div>

        {/* Mobile  */}
        <div className="flex items-center  mt-12">
          <img
            src={theme === "light" ? lineLight : lineDark}
            alt="product ride"
          />
          <div className="text-base tracking-wide font-medium ml-4">
            Mobile Applications
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center lg:justify-start">
          {data.mobile.map((e, i) => (
            <div
              key={i}
              className="flex p-6 box-border flex-col items-center justify-center h-32 w-32 bg-gray1 m-4"
            >
              <img src={e.image} alt="Swift iOS" />
              <div className="mt-5 text-xs">{e.name}</div>
            </div>
          ))}
        </div>

        {/* VR  */}
        <div className="flex items-center  mt-12">
          <img
            src={theme === "light" ? lineLight : lineDark}
            alt="product ride"
          />
          <div className="text-base tracking-wide font-medium ml-4">
            VR/AR Applications
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center lg:justify-start">
          {data.vr.map((e, i) => (
            <div
              key={i}
              className="flex p-6 box-border flex-col items-center justify-center h-32 w-32 bg-gray1 m-4"
            >
              <img src={e.image} alt="Swift iOS" />
              <div className="mt-5 text-xs">{e.name}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Text  */}
      <div className="lg:w-4/12 w-full">
        <img src={greenLine} alt="Ideas to realty" className="mb-6" />
        <div className="text-5xl font-bold leading-none">
          Always modern, future proof technologies
        </div>
        <div className="text-lg mt-4 mb-12">
          We always recommend the best to our customers but we are game for
          everything.
        </div>
      </div>

    </div>
  );
};

export default Stack;
