import React from "react";

const WelcomeMessageComponent = () => {
  return (
    <div className="">
      <div className="flex flex-col mb-10">
        <p className="text-4xl">Welcome to the</p>
        <h1 className="text-5xl font-bold">Frontend Quiz!</h1>
      </div>
      <p className="text-[14px]">Pick a subject to get started.</p>
    </div>
  );
};

export default WelcomeMessageComponent;
