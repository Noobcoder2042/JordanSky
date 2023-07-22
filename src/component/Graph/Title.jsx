import React from "react";

const Title = ({ title }) => {
  return (
    <h1 className="text-3xl font-bold text-blue-500 text-center mb-6 md:mb-8">
      {title}
    </h1>
  );
};

export default Title;
