import React, { useState } from "react";

const WebflowDevelopment = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleQuestion = (index: any) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Webflow Development?",
      answer: "Webflow Development is a process of building websites using the Webflow platform, which allows for rapid creation and customization."
    },
    {
      question: "How long does it take to build a Webflow site?",
      answer: "Typically, it takes about 5 days to build a standard 5-page website on Webflow."
    },
    {
      question: "Can I make changes to my site after it's built?",
      answer: "Yes, with Webflow, you can easily make changes to your site even after it's built. It's a very flexible platform."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with the service."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-5">
      <div className="max-w-3xl w-full space-y-6">
        <div className="bg-black text-white px-4 py-4 text-center rounded-3xl">
          <h1 className="text-3xl font-extrabold mb-5 md:text-4xl lg:text-5xl">Webflow development</h1>
          <p className="text-lg mb-2">
            Experience accelerated website creation through Webflow development.
          </p>
          <p className="text-md bg-slate-900 rounded-2xl md:mx-48 py-1 mb-2">
            5 pages <span className="text-red-600">•</span> 5-day turnaround <span className="text-red-600">•</span> 100% yours
          </p>
          <p className="text-2xl font-bold">$799</p>
          <p className="text-sm">per website</p>
          <button className="bg-cyan-500 text-white px-4 py-2 rounded mt-4">
            Get started
          </button>
        </div>

        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mt-8 text-center">
          FAQ
        </h2>
        <div className="space-y-8">
          {faqData.map((item, index) => (
            <div key={index}>
              <button
                className="text-left w-full px-4 py-2 text-lg font-medium text-gray-900 bg-gray-200 rounded-lg focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                {item.question}
              </button>
              {openQuestionIndex === index && (
                <div className="px-4 py-2 text-gray-600 bg-gray-100 rounded-b-lg">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebflowDevelopment;
