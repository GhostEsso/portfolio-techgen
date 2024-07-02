/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";

type Plan = {
  name: string;
  price: { monthly: number; quarterly: number; yearly: number };
  description: string[];
  isPopular?: boolean;
};

const plans: Plan[] = [
  {
    name: 'Essentials',
    price: { monthly: 299, quarterly: 299 * 3 * 0.84, yearly: 299 * 12 * 0.71 },
    description: [
      '1 Web page designed',
      '1 website',
      'Pause or cancel anytime',
      '1-3 Days turnaround',
      '30-day money back guarantee',
      'Revisions time: 24h',
      '1 task at time',
      'Front-end development (HTML/CSS/JavaScript)',
      'Back-end development (Node.js, Ruby)',
      'WordPress Development',
      'Webflow Development',
      'UX/UI design',
      'Dedicated project manager',
      'SEO optimization',
      'Basic performance optimization'
    ]
  },
  {
    name: 'Branding',
    price: { monthly: 499, quarterly: 499 * 3 * 0.85, yearly: 499 * 12 * 0.75 },
    description: [
      '2+ Web pages designed',
      '1 website',
      'Pause or cancel anytime',
      '1-3 Days turnaround',
      '30-day money back guarantee',
      'Revisions time: 24h',
      '1 task at time',
      'Front-end development (React Js)',
      'Back-end development (Node.js)',
      'WordPress Development',
      'Webflow Development',
      'UX/UI design',
      'Dedicated project manager',
      'Advanced SEO optimization',
      'Performance optimization',
      'API integrations',
    ]
  },
  {
    name: 'Growth',
    price: { monthly: 899, quarterly: 899 * 3 * 0.85, yearly: 899 * 12 * 0.75 },
    description: [
      '8+ Web pages designed',
      '3 websites',
      'Pause or cancel anytime',
      '1-3 Days turnaround',
      '30-day money back guarantee',
      'Revisions time: 24h',
      '2 task at time',
      'Front-end development (React JS, TS)',
      'Back-end development (Node.js, Ruby)',
      'WordPress Development',
      'UX/UI design',
      'Dedicated project manager',
      'Advanced SEO optimization',
      'Performance optimization',
      'Video editing',
      'Webflow Development',
      'API integrations',
      'E-commerce functionality'
    ],
    isPopular: true
  },
  {
    name: 'Business',
    price: { monthly: 1699, quarterly: 1699 * 3 * 0.85, yearly: 1699 * 12 * 0.75 },
    description: [
      '10+ Web pages designed',
      '5 websites',
      'Pause or cancel anytime',
      '1-3 Days turnaround',
      '30-day money back guarantee',
      'Revisions time: 24h',
      '4 task at time',
      'Front-end development (React JS, TS)',
      'Back-end development (Node.js, Ruby)',
      'WordPress Development',
      'UX/UI design',
      'Dedicated project manager',
      'Advanced SEO optimization',
      'Performance optimization',
      'API integrations',
      'Webflow Development',
      'E-commerce functionality',
      'Custom web applications',
      'Continuous maintenance and support'
    ]
  }
];

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');

  const handleCycleChange = (cycle: 'monthly' | 'quarterly' | 'yearly') => {
    setBillingCycle(cycle);
  };

  return (
    <div id='pricing' className="max-w-7xl mx-auto px-4 py-10 text-center bg-[#dfffea]">
      <h1 className="text-3xl font-extrabold mb-4 md:text-5xl">Pick a plan and Get started</h1>
      <p className="text-xl mb-10 md:text-2xl">One flat monthly fee. No contracts, no hidden fees</p>
      <div className="flex justify-center space-x-1 mb-10 p-2 bg-slate-200 md:mx-40 rounded-3xl lg:mx-96">
        <button
          onClick={() => handleCycleChange('monthly')}
          className={`px-4 py-2 rounded-3xl ${billingCycle === 'monthly' ? 'bg-blue-400 text-white' : 'bg-gray-200'}`}
        >
          Monthly
        </button>
        <button
          onClick={() => handleCycleChange('quarterly')}
          className={`px-4 py-2 rounded-3xl ${billingCycle === 'quarterly' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Quarterly (15% off)
        </button>
        <button
          onClick={() => handleCycleChange('yearly')}
          className={`px-4 py-2 rounded-3xl ${billingCycle === 'yearly' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Yearly (25% off)
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan) => (
          <div key={plan.name} className="relative bg-white p-6 rounded-lg shadow-lg">
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-cyan-500  text-white text-sm px-4 py-1 rounded-bl-2xl">
                Most popular
              </div>
            )}
            <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
            <p className="text-4xl font-extrabold mb-1">${plan.price[billingCycle]}</p>
            <p className="text-xl mb-6">per month</p>
            <button className="bg-cyan-500  text-white px-4 py-2 rounded-lg mb-6">Get started</button>
            <ul className="text-left">
              {plan.description.map((item, index) => (
                <li key={index} className="mb-2">
                 <FaCheckCircle className="inline-block mr-1 text-green-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
