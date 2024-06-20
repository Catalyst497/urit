import React from "react";

function LemonButton({ children = "Learn More" }) {
  return (
    <button className="bg-lemon text-black font-semibold rounded-[41px] px-6 py-2">
      {children}
    </button>
  );
}

export default LemonButton;
