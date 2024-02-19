import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rem,
          laborum nihil ipsum delectus commodi doloribus ea atque error
          voluptate eveniet sit voluptates neque animi sed dolorum dolores non
          nam quod repudiandae ratione reprehenderit. Sequi consequuntur
          reprehenderit ipsam vitae tenetur accusantium nisi recusandae
          architecto ex reiciendis natus, quos, obcaecati quidem.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rem,
          laborum nihil ipsum delectus commodi doloribus ea atque error
          voluptate eveniet sit voluptates neque animi sed dolorum dolores non
          nam quod repudiandae ratione reprehenderit. Sequi consequuntur
          reprehenderit ipsam vitae tenetur accusantium nisi recusandae
          architecto ex reiciendis natus, quos, obcaecati quidem.
        </p>
      </div>
    </div>
  );
};
