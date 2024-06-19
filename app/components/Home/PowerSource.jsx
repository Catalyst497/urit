import React from "react";
import BlackButton from "../BlackButton";

function PowerSource() {
  return (
    <div className="flex justify-evenly">
      <div>
        <div>
          <div className="h2">
            <div>Powered By</div>
            <div>Dedicated Expertise</div>
          </div>
          <p>
            We are seaosned real estate experts who understand that the <br />{" "}
            landscape is changing - and believe it's for the better.
          </p>
        </div>
        <div>
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
          <BlackButton/>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default PowerSource;
