import React from "react";

function Hero() {
  return (
    <div className="flex items-center  px-8">
      <div>
        <div className="h1 text-white flex-1">
          <span>The Modern Title And</span>
          <br />
          <span className="text-lemon">Closing Experience</span>
        </div>
        <p>
          Combining World Class Technology With A Nationwide Team
          <br />
          Of Experts For A Simple, Efficient, And Scalable Model.
        </p>
        <div>
          <div className="flex flex-col">
            <div className="flex gap-4">
              <img src="./tick.png" alt="" />
              <div className="text-lemon">
                Try for Free 30 Mins Consultation
              </div>
            </div>
            <div>
              <div className="h3 text-white">Customer Review</div>
              <div>They felt satisfied and helped</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-illustration">
        <img src="./Hero image.png" alt="hero image" />
      </div>
    </div>
  );
}

export default Hero;
