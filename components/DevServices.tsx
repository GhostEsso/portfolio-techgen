import React from "react";

type Props = {};

const DevServices = (props: Props) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 border-red-600 text-center">
      <h1 className="text-3xl font-extrabold mb-4 md:text-6xl">
        5+ Development services
      </h1>
      <h2 className="text-3xl font-bold mb-6 md:text-6xl">One Flat Fee</h2>
      <p className="mb-6 text-xl md:text-2xl">
        From app design to app development, our comprehensive range of services
        has got you covered.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left md:text-center">
        <ServiceCard title="Web UI/UX" />
        <ServiceCard title="Mobile App UI/UX" />
        <ServiceCard title="Web App Development" />
        <ServiceCard title="Mobile App Development" />
        <ServiceCard title="Webflow" />
        <ServiceCard title="Social Media" />
      </div>
    </div>
  );
};

const ServiceCard = ({ title }: { title: string }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-lg font-bold">{title}</h3>
  </div>
);

export default DevServices;
