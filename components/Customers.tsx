import React from 'react';

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "TechGen is the perfect solution for small businesses who need high-quality design services. Their designers are professional and easy to work with. I highly recommend them!",
    name: "Simon Bickala",
    title: "Small Business Owner",
    image: "/images/simon_bickala.jpg"
  },
  {
    quote: "I've been using TechGen for a few months now and I couldn't be happier. Their unlimited design projects have saved me a lot of money and their designers always deliver on time.",
    name: "Chris Tucker",
    title: "Community Manager",
    image: "/images/manon_imbola.jpg"
  },
  {
    quote: "TechGen with their high-quality design services at an affordable price have been crucial to our success. Their professionalism and exceptional customer service have made them a valued partner in our journey.",
    name: "Sarah Delonta",
    title: "Founder of Sa’r Delices",
    image: "/images/sarah_delonta.jpg"
  },
];

const Customers: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 text-center bg-[#fae4dc]">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-10 mx-10">
        Our customers can&apos;t imagine life without <strong>TechGen.</strong>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

const TestimonialCard: React.FC<Testimonial> = ({ quote, name, title, image }) => (
  <div className="bg-white p-6 text-left transition-transform duration-300 mx-3 shadow-md rounded-3xl">
    <img
      src={image}
      alt={name}
      className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
    />
    <p className="text-lg mb-4 italic">{quote}</p>
    <div className="flex flex-col items-start">
      <p className="font-bold">{name}</p>
      <p className="text-gray-500">{title}</p>
    </div>
  </div>
);

export default Customers;
