import React from "react";
import {content} from "./content";

const Homepage = () => {
  return (
    <main className="text-center pt-32 pyx-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        {content.homepage.title}
      </h1>
      <p className="max-w-[750px] mx-auto leading-8">
        {content.homepage.paragraph}
      </p>
    </main>
  );
};

export default Homepage;
