"use client";
import React, { useEffect, useState } from "react";
import useScreenSize from "@/app/hooks/useScreenSize";
function Hero() {
  const { isMobile, isDesktop } = useScreenSize();
  const [mobileState, setMobileState] = useState(false);
  const [desktopState, setDesktopState] = useState(false);

  useEffect(() => {
    setMobileState(isMobile);
  }, [isMobile]);
  useEffect(() => {
    setDesktopState(isDesktop);
  }, [isDesktop]);
  return (
      <div
      className={`${
        mobileState ? "flex flex-col gap-16" : ""
      } relative items-center min-h-screen overflow-y-hidden`}
    > 
      <div className={`md:absolute flex flex-col items-start gap-10 top-0 left-0 w-full ${isDesktop ? '' : 'px-6 pt-6'} md:pl-20 md:pt-10`}>
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
          <div className="flex gap-4 items-center">
            <img src="./tick.png" alt="" />
            <div className="text-lemon">Try for Free 30 Mins Consultation</div>
          </div>
          <div>
            <div className="h3 text-white">Customer Review</div>
            <div>They felt satisfied and helped</div>
          </div>
        </div>
      </div>

      <div className="hero-illustration md:absolute top-[-6.5rem] right-0 h-[120%] mr-10 z-[99]">
        <img
          src="./Hero image.png"
          className="max-w-full max-h-full"
          alt="hero image"
        />
      </div>
      {/* {!mobileState ? (
        <div className="sponsors absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.18)]">
          <div className="flex ml-20 gap-36">
            <img src="./logo_maze.svg" alt="logo_maze" />
            <img src="./logo_loom.svg" alt="logo_loom" />
          </div>
        </div>
      ) : (
        <></>
      )}  */}
    </div>
  );
}

export default Hero;
