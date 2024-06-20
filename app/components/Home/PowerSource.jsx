import React from "react";
import BlackButton from "../BlackButton";

function PowerSource() {
  return (
    <div className="regular-black flex justify-between px-20 py-16">
      <div className="flex-1 flex flex-col gap-16">
        <div className="flex flex-col gap-6">
          <div className="h2">
            <div className="primary-text-gradient">Powered By</div>
            <div>Dedicated Expertise</div>
          </div>
          <p>
            We are seaosned real estate experts who understand that the <br />{" "}
            landscape is changing - and believe it's for the better.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-start gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img src="./lemon_tick.png" alt="lemon_tick" />
              <span>We partner with forward-thinking companies to scale</span>
            </div>
            <div className="flex items-center gap-4">
              <img src="./lemon_tick.png" alt="lemon_tick" />
              <span>
                Empower their customers with transparency and predictability
              </span>
            </div>
            <div className="flex items-center gap-4">
              <img src="./lemon_tick.png" alt="lemon_tick" />
              <span>Consultation approach on emerging technology.</span>
            </div>
          </div>
          <BlackButton />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default PowerSource;
