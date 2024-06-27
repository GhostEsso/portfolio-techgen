/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { motion } from "framer-motion";

// Exemple de logos fictifs
const brands = [
  { name: "BrandOne", logo: "/path/to/logo1.png" },
  { name: "BrandTwo", logo: "/path/to/logo2.png" },
  { name: "BrandThree", logo: "/path/to/logo3.png" },
  { name: "BrandFour", logo: "/path/to/logo4.png" },
  { name: "BrandFive", logo: "/path/to/logo5.png" },
];

const TrustedBrands = () => {
  useEffect(() => {
    // Ajoutez des styles pour l'animation du défilement côté client
    const styles = `
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
      }

      .animate-marquee {
        display: flex;
        width: 200%;
        animation: marquee 15s linear infinite;
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }, []);

  return (
    <div className="bg-black py-8 w-full">
      <h2 className="text-center text-white text-2xl font-semibold mb-10 px-2 md:text-3xl">
        Companies that trust our Developers
      </h2>
      <div className="overflow-hidden w-full">
        <div className="flex w-full animate-marquee">
          {brands.concat(brands).map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center w-1/5"
            >
              <img src={brand.logo} alt={brand.name} className="h-20 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
