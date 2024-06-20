import React from "react";
import LemonButton from "../LemonButton";

function OurReach() {
  return (
    <div className="h-[80vh] bg-primary-gradient regular-white px-20 py-20 mt-8">
      <div className="flex justify-between">
        <div>
          <div className="h2 text-white flex flex-col">
            <div className="primary-text-gradient">Coast to coast</div>
            <div>To Coverage</div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-start pt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Maxime
            mollitia,
          </p>
          <LemonButton />
        </div>
      </div>
    </div>
  );
}

export default OurReach;
