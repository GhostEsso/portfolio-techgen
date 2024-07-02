import React from "react";

type Props = {};

const DevApproach = (props: Props) => {
    return (
        <div id="how-it-works" className="bg-cyan-200 rounded-3xl p-8 md:p-10 lg:p-16 text-center mx-5 md:mx-16 my-20 mb-20">
          <h2 className="text-3xl font-bold mb-10 md:text-5xl">Our App Development Approach</h2>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="md:w-1/2 md:pr-6">
              <h3 className="text-2xl font-bold mb-4">Choose Your Plan</h3>
              <p className="text-lg mb-6">
                Subscribe to a plan and request as many designs as you need, anytime.
              </p>
              <h3 className="text-2xl font-bold mb-4">Choose Your Plan</h3>
              <p className="text-lg mb-6">
                Subscribe to a plan and request as many designs as you need, anytime.
              </p>
            </div>
            <div className="md:w-1/2 md:pr-6">
              <h3 className="text-2xl font-bold mb-4">Choose Your Plan</h3>
              <p className="text-lg mb-6">
                Subscribe to a plan and request as many designs as you need, anytime.
              </p>
              <h3 className="text-2xl font-bold mb-4">Choose Your Plan</h3>
              <p className="text-lg mb-6">
                Subscribe to a plan and request as many designs as you need, anytime.
              </p>
            </div>
          
            <div className="md:w-1/2 md:pl-6">
              <h3 className="text-2xl font-bold mb-4">Receive Your Designs</h3>
              <p className="text-lg mb-6">
                We aim to deliver your designs
              </p>
              <h3 className="text-2xl font-bold mb-4">Get Satisfied</h3>
              <p className="text-lg mb-6">
                We wont stop until youre 100% satisfied. Enjoy unlimited revisions.
              </p>
            </div>
            
          </div>
        </div>
      );
    };
    

export default DevApproach;
