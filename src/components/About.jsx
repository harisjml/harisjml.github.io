import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const About = () => {
  const handleViewResume = () => {
    const resumeUrl =
      process.env.PUBLIC_URL + "/CV RESUME HARIS BIN JAMALUDIN.pdf";
    window.open(resumeUrl, "_blank");
  };

  const handleViewTranscript = () => {
    // Show a toast notification
    toast.warning(
      "Sorry, Academic Transcript is not available. Will be updating it soon."
    );
  };
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
          Hello, my name is <span>Haris Jamaludin</span>, lived in Shah Alam
          Selangor. I'm alumni from SMK Tinggi Klang, Kolej Matrikulasi Selangor
          and UITM Kampus Jasin Melaka. I have a strong passion for technology
          and enjoy learning and exploring new technologies to stay up-to-date
          with the rapidly evolving tech landscape. My educational journey has
          equipped me with valuable knowledge and skills, and I am dedicated to
          leveraging these skills in the field of Information Technology.
        </p>
        <br />
        <div>
          <p className="text-xl">
            Currently, I am on a mission to become an executive in an IT
            company.I believe in trusting the journey and have confidence in my
            ability to achieve my goals. To realize my mission of becoming an
            executive in an IT company, I am committed to continuous learning,
            gaining hands-on experience, and actively participating in the tech
            community. I aim to contribute my skills and knowledge to create
            innovative and impactful solutions. By staying curious, adaptable,
            and collaborative, I am confident that I will pave my way towards
            achieving my goal in the dynamic field of Information Technology.
          </p>
          <div className="flex space-x-4 mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleViewTranscript()}
            >
              View Transcript
            </button>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleViewResume()}
            >
              View Resume
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
