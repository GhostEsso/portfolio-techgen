import React from "react";

const CallToAction = () => {

  const calendlyLink = "https://calendly.com/lilipitaham/book-call";
  return (
    <div className="flex flex-col items-center p-4 bg-cyan-500">
      <div className="w-full sm:w-3/4 lg:w-1/2 text-white">
        <h1 className="text-2xl md:text-4xl lg:text-4xl text-center">With <strong>TechGen</strong> you’re part of something bigger.</h1>
        <p className="  text-xl md:text-2xl p-4 rounded-lg text-center">
          Create your project today and receive your designs tomorrow. With our
          30-day risk-free trial, you have nothing to lose.
        </p>
      </div>
      <button className="bg-white text-black px-4 py-2 rounded mt-4"
      onClick={() => window.open(calendlyLink, "_blank")}
      >
        Book Call
      </button>
    </div>
  );
};

export default CallToAction;
