import React from "react";

function Hero() {
  return (
    <div className="relative items-center min-h-screen overflow-y-hidden">
      <div className="absolute flex flex-col items-start gap-10 top-0 left-0 w-full pl-20 pt-10">
        <div className="flex flex-col gap-8 items-start">
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
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex gap-4">
            <img src="./tick.png" alt="" />
            <div className="text-lemon">Try for Free 30 Mins Consultation</div>
          </div>
          <div>
            <div className="h3 text-white">Customer Review</div>
            <div>They felt satisfied and helped</div>
          </div>
        </div>
      </div>

      <div className="hero-illustration absolute top-[-6.5rem] right-0 h-[120%] mr-10">
        <img
          src="./Hero image.png"
          className="max-w-full max-h-full"
          alt="hero image"
        />
      </div>
    </div>
  );
}

export default Hero;
