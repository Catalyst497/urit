import React from "react";

function BlackButton({ children = "Learn More" }) {
  return (
    <button className="text-white bg-black px-4 py-2 rounded-[41px]">
      {children}
    </button>
  );
}

export default BlackButton;
