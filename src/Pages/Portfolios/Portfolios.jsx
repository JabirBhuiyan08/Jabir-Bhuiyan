import { useState } from "react";
import portfolio from "./PortfoliosJs";
import { Link } from "react-router-dom";


const Portfolio = () => {
  const [projects] = useState(portfolio);
  
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-3xl font-bold mb-10">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
        {projects.map((project) => {
          const { id, title, description, img, link, builtBy } = project;
          return (
            <div
              key={id}
              className="card border sm:w-60 shadow-md rounded-xl overflow-hidden transition-transform transform hover:scale-105"
            >
              <Link to={link} className="text-white" target="_blank">
                <figure>
                  <img src={img} alt={title} className="w-full h-40 object-cover" />
                </figure>
                <div className="card-body p-4 bg-gray-900">
                  <h2 className="card-title text-lg font-semibold text-green-600">{title}</h2>
                  <p className="text-sm text-gray-300">{description}</p>
                  <div className="text-green-300">
                    <h1>Built By : {builtBy}</h1>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
