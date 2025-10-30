import React from "react";

const Loader: React.FC = () => (
  <div className="flex items-center justify-center h-[70vh]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-600"></div>
  </div>
);

export default Loader;
