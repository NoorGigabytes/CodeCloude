import React from "react";

const Logo = () => {
  return (
    <div className="w-fit h-fit flex justify-center items-center space-x-2 sm:w-64 w-52">
      <div className="flex justify-center items-center space-x-1">
        <div className="w-2 md:h-8 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 rotate-12"></div>
        <div className="w-2 md:h-10 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 rotate-12"></div>
        <div className="w-2 md:h-12 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 rotate-12"></div>
        <div className="w-2 md:h-6 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 rotate-12"></div>
      </div>
      <h1 className="font-bold tracking-tight md:text-4xl text-2xl font-logoFont">
        CodeCloude
      </h1>
    </div>
  );
};

export default Logo;
