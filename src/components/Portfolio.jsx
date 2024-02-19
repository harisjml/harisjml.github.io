import React from "react";
import todoReacts from "../assets/portfolio/todo-reacts.png";
import todoVaadin from "../assets/portfolio/todo-vaadin.png";
import carRental from "../assets/portfolio/car-rental-project.png";
// import { Link } from "react-router-dom";

export const Portfolio = ({onDetailsClick}) => {
  const details = [
    {
      id: 1,
      title: "Todo Application (ReactJs)",
      skill: "ReactJs",
      project: {
        name: "Todo App",
        description:
          "This application is build to Practicing basic Create, Read, Update and Delete by using ReactJs",
        imageSrc: todoReacts,
        imageAlt: "Todo-ReactJs",
        points: [
          "This system was developed using ReactJs",
          "Implemented a responsive and user-friendly UI for managing todos",
          "Utilized React state and props to manage data and component communication",
          "Implemented CRUD functionality for adding, editing, and deleting todos",
          "Used local storage to persist todo data between sessions",
          "Styled the application for a clean and modern look",
          "Practiced key React concepts such as components, state, props, and lifecycle methods",
          "Enhanced accessibility and user experience",
        ],
      },
    },
    {
      id: 2,
      title: "Todo Application (Vaadin)",
      skill: "Vaadin, Java",
      project: {
        name: "Todo App",
        description:
          "This application is build to Practicing basic Create, Read, Update and Delete by using Vaadin Flow",
        imageSrc: todoVaadin,
        imageAlt: "Todo-Vaadin",
        points: [
          "Developed the frontend of the Todo application using Vaadin Flow",
          "Implemented CRUD functionality for managing todos",
          "Utilized Vaadin components for building a responsive and user-friendly UI",
          "Integrated with a Java backend to handle data operations",
          "Practiced key Vaadin concepts such as Views and Forms",
          "Enhanced the application's user experience and accessibility",
        ],
      },
    },
    {
      id: 3,
      title: "Car Rental System",
      skill: "Html, Css, Javascript",
      project: {
        name: "E-commerce Website",
        description:
          "The Car Rental System is a comprehensive e-commerce website developed as a requirement for subjects ISP451, ISP551, and ISP601 at UiTM Jasin, Melaka. The project encompasses all phases of the software development life cycle, including planning, analysis, design, implementation, and testing.",
        imageSrc: carRental,
        imageAlt: "Car-rental-system",
        points: [
          "Collaborated with team members to plan and execute the development process",
          "Conducted thorough analysis to identify and understand project requirements",
          "Designed an intuitive and user-friendly e-commerce website interface",
          "Implemented the frontend using HTML, CSS, and JavaScript for dynamic interactions",
          "Adhered to best practices in web development to ensure code quality and maintainability",
        ],
      },
    },
  ];

  const getDetailsById = (id) => {
    // Assuming details array is defined above
    return details.find((detail) => detail.id === id);
  };

  const portfolios = [
    {
      id: 1,
      src: todoReacts,
      linkcode: "https://github.com/harisjml/todo-reactjs.git",
      detail: getDetailsById(1),
    },
    {
      id: 2,
      src: todoVaadin,
      linkcode: "https://github.com/harisjml/todo-vaadin.git",
      detail: getDetailsById(2),
    },
    {
      id: 3,
      src: carRental,
      linkcode: "https://github.com/harisjml/java-web-project.git",
      detail: getDetailsById(3),
    },
  ];

  

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pb-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-14">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, detail }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <div
                  onClick={() => onDetailsClick(detail)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer "
                >
                  Details
                </div>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
      {/* <div className="mt-20">
          {selectedDetail && <Details detail={selectedDetail} onClose={handleCloseDetails} />}
        </div> */}
    </div>
    
  );
};
