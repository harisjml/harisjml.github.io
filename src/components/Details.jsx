import React from "react";
// import { useParams } from "react-router-dom";

export const Details = ({ detail,  onClose}) => {
 
  console.log("Detail:", detail);
  return (
    <div
      name="detail"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="bg-gradient-to-b from-gray-600 to-black p-8 rounded-md shadow-md">
        <div className="flex justify-end">
            <button
              onClick={() => onClose()}
              className="text-white text-2xl cursor-pointer"
            >
              X
            </button>
          </div>
          <header className="text-center mb-4">
            <h2 className="text-4xl font-bold">{detail.title}</h2>
            <p className="text-white">{detail.skill}</p>
          </header>
          <div>
            <h3 className="text-2xl font-bold mb-2">
              {detail.project.name}
            </h3>
            <p className="text-white mb-4">
              {detail.project.description}
            </p>
            <div className="mb-4">
              <img
                src={detail.project.imageSrc}
                alt={detail.project.imageAlt}
                className="rounded-md w-3/4"
              />
            </div>
            <ul className="list-disc list-inside">
              {detail.project.points.map((point, index) => (
                <li key={index} className="text-white">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
