import React from "react";

type Project = {
  image: string;
  title: string;
  description: string;
  demo: string;
  github: string;
};

type Props = {};

const projects: Project[] = [
  {
    image: "/images/works/web-ui-ux.png",
    title: "Blog App",
    description: "Designing intuitive and engaging web interfaces.",
    demo: "https://example.com/demo-web-ui-ux",
    github: "https://github.com/yourusername/web-ui-ux"
  },
  {
    image: "/images/works/web-ui-ux.png",
    title: "Meal Connect",
    description: "Designing intuitive and  engaging web interfaces.",
    demo: "https://example.com/demo-web-ui-ux",
    github: "https://github.com/yourusername/web-ui-ux"
  },
  {
    image: "/images/works/web-ui-ux.png",
    title: "Conference",
    description: "Designing intuitive and engaging web interfaces.",
    demo: "https://example.com/demo-web-ui-ux",
    github: "https://github.com/yourusername/web-ui-ux"
  },
  {
    image: "/images/works/web-ui-ux.png",
    title: "Awesome Books",
    description: "Designing intuitive and engaging web interfaces.",
    demo: "https://example.com/demo-web-ui-ux",
    github: "https://github.com/yourusername/web-ui-ux"
  }
];

const Projects = (props: Props) => {
  return (
    <div id="our-work" className="max-w-8xl mx-auto px-4 py-20 text-center bg-[#F0F0F0]">
      <h1 className="text-3xl font-extrabold mb-4 md:text-6xl">5+ Development Services</h1>
      <h2 className="text-3xl font-bold mb-6 md:text-6xl">One Flat Fee</h2>
      <p className="mb-10 text-xl md:text-2xl">
        From app design to app development, our comprehensive range of services has got you covered.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 px-2">
        {projects.map((project, index) => (
          <ServiceCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            demo={project.demo}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};

const ServiceCard = ({ image, title, description, demo, github }: Project) => (
  <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img src={image} alt={title} className="w-full h-32 object-cover rounded-t-lg" />
    <h3 className="text-lg font-bold mt-4">{title}</h3>
    <p className="text-sm mt-2">{description}</p>
    <div className="flex justify-between mt-6 ">
      
      <a href={demo} className="text-blue-500 hover:bg-slate-200 px-2 py-1 rounded-xl bg-slate-100">Demo</a>
      <a href={github} className="text-blue-500 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-xl">GitHub</a>
    </div>
  </div>
);

export default Projects;
