import React from "react";
import BlackButton from "../BlackButton";

function Services() {
  return (
    <div className="mt-16">
      <div>
      <div className="flex justify-between items-stretch">
        <div className="h2 text-black">
          <div>End to end title</div>
          <div>& closing services</div>
        </div>
        <div className="flex flex-col justify-between items-start">
          <p>
            Spruce provides title insurance, coordination <br/> escrow and recording
            services.
          </p>
          <BlackButton/>
        </div>
      </div>
      </div>
      <div>
        <div></div>
      </div>
      
    </div>
  );
}

export default Services;
