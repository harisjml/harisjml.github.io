import React from "react";
import { Link } from "react-scroll";
import haris from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 p-2"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row pt-40 md:pt-40">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white sm:pt-10">
            Hye, My Name is Haris Jamaludin
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
          Born and Raised in Shah Alam, Selangor. For me, Programming isn't
            just lines of code; it's a thrilling journey where creativity knows
            no bounds and the freedom to turn ideas into reality.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={haris}
            alt="harisjml profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full "
          />
        </div>
      </div>
    </div>
  );
};
