import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-8 text-center text-gray-500">
      <p>Designed with ♥️ from Togo </p>
      <div className="mt-4 flex flex-wrap justify-center space-x-2">
        <a href="#" className="text-cyan-500 hover:underline mx-2">
          Services
        </a>
        <a href="#" className="text-cyan-500  hover:underline mx-2">
          Pricing
        </a>
        <a href="#" className="text-cyan-500  hover:underline mx-2">
          Our Work
        </a>
        <a href="#" className="text-cyan-500  hover:underline mx-2">
          FAQ
        </a>
        <a href="#" className="text-cyan-500 hover:underline mx-2">
          Company
        </a>
        <a href="#" className="text-cyan-500  hover:underline mx-2">
          Book a Call
        </a>
        <a href="#" className="text-cyan-500  hover:underline mx-2">
          Contact
        </a>
        <a href="#" className="text-cyan-500  hover:underline mx-2">
          Privacy Policy
        </a>
        <a href="#" className="text-cyan-500 hover:underline mx-2">
          Terms of Use
        </a>
      </div>
      <p className="mt-4 bg-black text-white py-4">© 2024 TechGen.</p>
    </footer>
  );
};

export default Footer;
