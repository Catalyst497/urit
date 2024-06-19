import React from "react";
import BlackButton from "../BlackButton";

const WhoWeWant = () => {
  return (
    <div className="mt-8">
      <div className="text-center">
        <div className="h2 text-black">Built for scale & efficiency</div>
        <p>
          Whether you’re handling individual transaction or 1,000, simplicity is
          key. We’ve built a frictionles
        </p>
      </div>
      <div className="flex justify-evenly">
        <div>
          <img src="" alt="" />
        </div>
        <div className="flex flex-col items-start gap-4">
          <div>
            <div className="h3">Investors</div>
            <div>
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Maxime mollitia,
            </div>
            <BlackButton />
          </div>
          <div>
            <div className="h3">Lender</div>
            <div>
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Maxime mollitia,
            </div>
          </div>
          <div>
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
