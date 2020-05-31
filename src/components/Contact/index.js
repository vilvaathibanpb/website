import React from "react";
import blueLine from "../../assets/Icons/blueLine.svg";

const Contact = ({ theme }) => {
  return (
    <>
      <div className="lg:p-12 text-primary flex p-4 lg:flex-row flex-col" id="contact_form">
        <div className="lg:w-7/12 w-full">
          <img src={blueLine} alt="Ideas to realty" className="mb-6" />
          <div className="text-5xl font-bold leading-none lg:w-9/12">
            Are you ready to start building your modern digital business?
          </div>
          <div className="text-lg mt-4 mb-12 lg:w-9/12">
            Partnering now with companies at all stages of growth.
          </div>
        </div>
        <div className="lg:w-5/12 w-full flex flex-col  items-end">
          <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <input
              name="name"
              className="lg:w-10/12 w-full bg-gray1 text-primary rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
              placeholder="Full name"
              type="text"
              required
            />
            <input
              name="company"
              className="lg:w-10/12 w-full bg-gray1 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
              placeholder="Company name (optional)"
              type="text"
            />
            <input
              name="email"
              className="lg:w-10/12 w-full bg-gray1 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
              placeholder="Business email"
              type="email"
              required
            />
            <textarea
              name="message"
              className="lg:w-10/12 w-full bg-gray1 rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
              placeholder="Message"
            />
            <div className="lg:w-10/12 w-full">
              <button
                type="submit"
                className="rounded-md bg-secondary text-white py-5 px-20 mt-6 text-base font-bold box-border w-full"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="flex w-full bg-gray1 text-primary justify-center items-center py-6 cursor-pointer"
        onClick={() => window.scrollTo(0, 0)}
      >
        &#8593; Back to top
      </div>
    </>
  );
};

export default Contact;
