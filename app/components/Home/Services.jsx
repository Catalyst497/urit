import React from "react";
import BlackButton from "../BlackButton";

function Services() {
  return (
    <div className="mt-16 px-20">
      <div className="flex justify-between items-stretch">
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

      <div className="flex justify-between services-slide mt-20">
        <div className="service-example">
          <div className="service-icon">
            <img src="./people.svg" alt="" />
          </div>
          <div className="service-text">
            <div className="title grid grid-flow-col gap-[1rem]">
              <div className="h-full w-1 bg-blueGreen rounded-lg"></div>
              <div className="title-text">Closing Experience</div>
            </div>
            <p>
              Lorem ipsum dolor sit<br/> amet consectetur<br/> adipisicing elit. Maxime
            </p>
          </div>
        </div>
        <div className="service-example active">
          <div className="service-icon">
            <img src="./digita.svg" alt="" />
          </div>
          <div className="service-text">
            <div className="title grid grid-flow-col gap-[1rem]">
              <div className="h-full w-1 bg-blueGreen rounded-lg"></div>
              <div className="title-text">Digital Transaction</div>
            </div>
            <p>
              Lorem ipsum dolor sit<br/> amet consectetur<br/> adipisicing elit. Maxime
            </p>
          </div>
        </div>
        <div className="service-example">
          <div className="service-icon">
            <img src="./team.svg" alt="" />
          </div>
          <div className="service-text">
            <div className="title grid grid-flow-col gap-[1rem]">
              <div className="h-full w-1 bg-blueGreen rounded-lg"></div>
              <div className="title-text">Dedicated Team</div>
            </div>
            <p>
              Lorem ipsum dolor sit<br/> amet consectetur<br/> adipisicing elit. Maxime
            </p>
          </div>
        </div>
        <div className="service-example">
          <div className="service-icon">
            <img src="./Api.svg" alt="" />
          </div>
          <div className="service-text">
            <div className="title grid grid-flow-col gap-[1rem]">
              <div className="h-full w-1 bg-blueGreen rounded-lg"></div>
              <div className="title-text">API Integration</div>
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
