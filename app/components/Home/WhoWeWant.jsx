import React, { useState, useEffect } from "react";
import BlackButton from "../BlackButton";
import useScreenSize from "@/app/hooks/useScreenSize";

const WhoWeWant = () => {
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
    <div className="mt-[10rem] md:mt-[15rem] px-6 md:px-20">
      <div className="text-center py-8">
        <div className="h2 text-black pb-8">Built for scale & efficiency</div>
        <p>
          Whether you’re handling individual transaction or 1,000, <br />{" "}
          simplicity is key. We’ve built a frictionles
        </p>
      </div>
      <div
        className={`flex ${
          desktopState ? "px-8" : "flex-col"
        } justify-between `}
      >
        <div className="relative">
          { desktopState &&
            <>
              <img
                src="./calculation.png"
                className={`absolute -left-[1.9rem]  ${
                  desktopState ? "top-[4rem]" : "top-0 scale-75"
                }`}
                alt=""
              />
              <img
                src="./ledger.png"
                className={`absolute right-0 translate-x-[50%] -bottom-[15%]`}
                alt=""
              />
            </>
          }
          <img src="./Dude_with_books.png" alt="" />
        </div>
        <div className={`flex flex-col items-start justify-around gap-12 ${desktopState ? '' : 'pt-20'}`}>
          <div className="flex gap-12 items-start">
            <div>
              <img src="./suitcase_icon.svg" alt="" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="h3 ">Investors</div>
              <div>
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Maxime mollitia,
              </div>
              <BlackButton />
            </div>
          </div>
          <div className="flex gap-12 items-start">
            <div>
              <img src="code_icon.svg" alt="" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="h3">Lender</div>
              <div>
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Maxime mollitia,
              </div>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div>
              <img src="transaction_icon.svg" alt="" />
            </div>
            <div className="flex flex-col gap-5">
              <div className="h3">Proptech</div>
              <div>
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Maxime mollitia,
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeWant;
