import React, {useState, useEffect} from "react";
import LemonButton from "../LemonButton";
import useScreenSize from "@/app/hooks/useScreenSize";

function OurReach() {
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
    <div className="bg-primary-gradient regular-white px-6 md:px-20 py-16 md:py-20 mt-8">
      <div className={`flex justify-between ${isDesktop ? '' : 'flex-col'}`}>
        <div>
          <div className="h2 text-white flex flex-col">
            <div className="primary-text-gradient">Coast to coast</div>
            <div>To Coverage</div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-start pt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            Maxime mollitia,
          </p>
          <LemonButton />
        </div>
      </div>
      <div className="map-of-reach flex justify-center mt-10">
        <img src="./map_of_reach.png" alt="map_of_reach" />
      </div>
    </div>
  );
}

export default OurReach;
