import React from "react";

const Hero = ({ name, bio }) => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I'm {name}</h1>
      <p className="text-xl mb-6 max-w-xl">{bio}</p>
      <a
        href="#projects"
        className="bg-white text-purple-700 font-semibold px-6 py-3 rounded shadow hover:bg-gray-200 transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
