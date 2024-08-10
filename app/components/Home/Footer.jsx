import React, { useState, useEffect } from "react";
import useScreenSize from "@/app/hooks/useScreenSize";

function SignUpOffer() {
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
      className={`md:absolute flex ${
        desktopState ? "" : "flex-col gap-8"
      } justify-between md:rounded-[51px] px-6 md:px-8 py-14 md:py-20 md:w-[80%] bg-primary md:left-[50%] md:-translate-x-[50%] md:top-0 md:-translate-y-[50%]`}
    >
      <div>
        <div className="h2 text-white">
          Sign Up For <br /> Special Offer
        </div>
      </div>
      <div className={`${desktopState ? "" : "regular-white"}`}>
        <p className="md:text-end ">
          Lorem ipsum dolor sit amet consectetur <br />
          adipisicing elit. Maxime mollitia,{" "}
        </p>
        <div className="input"></div>
      </div>
    </div>
  );
}
function Footer() {
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
    <>
      {!isDesktop && <SignUpOffer />}
      <footer className="regular-white bg-[#000000] relative px-4 md:py-8 py-14 md:pt-[10rem]">
        {isDesktop && <SignUpOffer />}
        <div
          className={`footer-main flex ${
            desktopState ? "" : "flex-col gap-16"
          } justify-between mt-[5%]`}
        >
          <div className={`${desktopState ? '' : 'flex flex-col gap-6'}`}>
            <div className={`${desktopState ? '' : 'flex flex-col gap-6'}`}>
              <div className={`flex gap-4 ${desktopState ? '' : ''}`}>
                <img src="./logo-white.png" alt="" />
                <span className="text-white text-[35px] font-semibold">
                  Urit
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet <br />
                consectetur adipisicing elit. Maxime <br />
                mollitia, molestiae quas vel sint.
              </p>
            </div>
            <div className="flex gap-4">
              <img src="./instagram.png" alt="" />
              <img src="./twitter.png" alt="" />
              <img src="./linkedIn.png" alt="" />
            </div>
          </div>
          <div
            className={`flex ${desktopState ? "gap-4" : "flex-wrap gap-8"} `}
          >
            <div>
              <div className="h3">Company</div>
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Customer Care</li>
              </ul>
            </div>
            <div>
              <div className="h3">Who we help</div>
              <ul>
                <li>Lendors</li>
                <li>Investors</li>
                <li>Propitech</li>
              </ul>
            </div>
            <div>
              <div className="h3">Resources</div>
              <ul>
                <li>API</li>
                <li>Blog</li>
                <li>Reports</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
