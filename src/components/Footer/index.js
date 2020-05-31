import React from "react";
import shortLogoLight from "../../assets/light/shortLogo.png";
import mediumLight from "../../assets/light/medium.png";
import mediumDark from "../../assets/dark/medium.png";
import linkedinLight from "../../assets/light/linkedin.png";
import linkedinDark from "../../assets/dark/linkedin.png";
import shortLogoDark from "../../assets/dark/shortLogo.png";

const Footer = ({ theme }) => {
  return (
    <div className="p-4 lg:p-12 lg:pb-8 text-primary">
      <div className="w-full flex items-center flex-col lg:flex-row  box-border flex-col-reverse">
        <div className="lg:w-3/12 w-full mt-4">
          <div className="text-xl">Careers</div>
          <div className="text-sm">careers@productride.com</div>
        </div>
        <div className="lg:w-3/12 w-full mt-4">
          <div className="text-xl">Send us an email</div>
          <div className="text-sm">info@productride.com</div>
        </div>
        <div className="lg:w-1/12 w-full mt-4" />
        <div className="lg:w-5/12 w-full mt-4">
          <img
            className="mb-4"
            src={theme === "light" ? shortLogoLight : shortLogoDark}
            alt="Product ride Logo"
          />
          <div className="text-sm">
            Product Ride is a product development company specializing in
            designing, building innovative tech products and helping startups
            and businesses to bring their ideas to reality faster and better.
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        <div className="mr-4">
          <a href="https://www.linkedin.com/company/product-ride/">
            <img
              src={theme === "light" ? linkedinLight : linkedinDark}
              alt="Product ride Linkedin"
            />
          </a>
        </div>
        <div className="mr-4">
          <a href="https://medium.com/product-ride">
            <img
              src={theme === "light" ? mediumLight : mediumDark}
              alt="Product ride medium"
            />
          </a>
        </div>
      </div>
      <hr className="bg-primary text-primary w-full my-6" />
      <div className="flex items-start justify-center">
        Made with
        <span role="img" aria-label="heart" className="text-red-600 mx-1">
          ❤️️
        </span>
        in Germany
      </div>
    </div>
  );
};

export default Footer;
