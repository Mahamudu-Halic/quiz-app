import React from "react";

const WelcomeMessageComponent = () => {
  return (
    <div className="flex-1">
      <div className="mb-5 lg:mb-10">
        <p className="md:text-4xl text-2xl">Welcome to the</p>
        <h1 className="md:text-5xl text-3xl font-bold">Frontend Quiz!</h1>
      </div>
      <p className="text-sm mb-5">Pick a subject to get started.</p>
    </div>
  );
};

export default WelcomeMessageComponent;
