import React from "react";
import BlackButton from "../BlackButton";

const WhoWeWant = () => {
  return (
    <div className="mt-8 px-20">
      <div className="text-center py-8">
        <div className="h2 text-black pb-8">Built for scale & efficiency</div>
        <p>
          Whether you’re handling individual transaction or 1,000, <br /> simplicity is
          key. We’ve built a frictionles
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <img src="./This_man.png" alt="" />
        </div>
        <div className="flex flex-col items-start gap-12">
          <div className="flex flex-col gap-4 items-start">
            <div className="h3 ">Investors</div>
            <div>
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Maxime mollitia,
            </div>
            <BlackButton />
          </div>
          <div className="flex flex-col gap-4 items-start">
            <div className="h3">Lender</div>
            <div>
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Maxime mollitia,
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start"> 
            <div className="h3">Proptech</div>
            <div>
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Maxime mollitia,
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeWant;
