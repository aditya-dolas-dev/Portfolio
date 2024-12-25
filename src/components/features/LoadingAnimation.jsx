import React from "react";

const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-600">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Loading...</h2>
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingAnimation;
