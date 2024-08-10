import React, {useState, useEffect} from "react";
import BlackButton from "../BlackButton";
import useScreenSize from "@/app/hooks/useScreenSize";

function Services() {
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
    <div className="mt-20 md:mt-28 px-6 md:px-20">
      <div className={`flex ${desktopState ? '' : 'flex-col'} justify-between items-stretch`}>
        <div className="h2 text-black">
          <div className="primary-text-gradient">End to end title</div>
          <div>& closing services</div>
        </div>
        <div className="flex flex-col gap-6 items-start">
          <p>
            Spruce provides title insurance, coordination <br /> escrow and
            recording services.
          </p>
          <BlackButton />
        </div>
      </div>

      <div className={`flex justify-center ${desktopState ? '' : 'gap-10 flex-wrap'} md:justify-between services-slide mt-20`}>
        <div className={`service-example ${desktopState ? '' : 'w-[90%]'}`}>
          <div className="service-icon">
            <img src="./people.svg" alt="" />
          </div>
          <div className="service-text">
            <div className="title grid grid-flow-col gap-[1rem]">
              <div className="h-full w-1 bg-blueGreen rounded-lg"></div>
              <div className="title-text h3">Closing Experience</div>
            </div>
            <p>
              Lorem ipsum dolor sit<br/> amet consectetur<br/> adipisicing elit. Maxime
            </p>
          </div>
        </div>
        <div className={`service-example active ${desktopState ? '' : 'w-[90%]'}`}>
          <div className="service-icon">
            <img src="./digita.svg" alt="" />
          </div>
          <div className="service-text">
            <div className="title grid grid-flow-col gap-[1rem] text-lemon">
              <div className="h-full w-1 bg-lemon rounded-lg"></div>
              <div className="title-text h3 text-lemon">Digital Transaction</div>
            </div>
            <p className="text-white/65">
              Lorem ipsum dolor sit<br/> amet consectetur<br/> adipisicing elit. Maxime
            </p>
          </div>
        </div>
        <div className={`service-example ${desktopState ? '' : 'w-[90%]'}`}>
          <div className="service-icon">
            <img src="./team.svg" alt="" />
          </div>
          <div className="service-text">
            <div className="title grid grid-flow-col gap-[1rem]">
              <div className="h-full w-1 bg-blueGreen rounded-lg"></div>
              <div className="title-text h3">Dedicated Team</div>
            </div>
            <p className="">
              Lorem ipsum dolor sit<br/> amet consectetur<br/> adipisicing elit. Maxime
            </p>
          </div>
        </div>
        <div className={`service-example ${desktopState ? '' : 'w-[90%]'}`}>
          <div className="service-icon">
            <img src="./Api.svg" alt="" />
          </div>
          <div className="service-text">
            <div className="title grid grid-flow-col gap-[1rem]">
              <div className="h-full w-1 bg-blueGreen rounded-lg"></div>
              <div className="title-text h3">API Integration</div>
            </div>
            <p>
              Lorem ipsum dolor sit<br/> amet consectetur<br/> adipisicing elit. Maxime
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
