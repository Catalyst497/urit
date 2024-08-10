"use client";
import React, { useEffect, useState } from "react";
import useScreenSize from "@/app/hooks/useScreenSize";
import { Menu } from "react-feather";

function Nav() {
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
    <nav className="flex justify-between items-center py-4 md:py-[2rem] px-6 md:px-[5rem]">
      <div className={`${isMobile ? 'scale-[.8]' : ''}`}>
        <img src="./Logo.png" alt="" />
      </div>
      {desktopState ? (
        <>
          <ul className="flex gap-[1.5rem]">
            <li>About Us</li>
            <li>Product</li>
            <li>Services</li>
            <li>Resources</li>
          </ul>

          <div>
            <img src="./Login button.png" alt="" />
          </div>
        </>
      ) : (
        <Menu />
      )}
    </nav>
  );
}

export default Nav;
