import React from "react";

function Footer() {
  return (
    <footer className="regular-white bg-[#000000] relative px-4 py-8">
      <div className="absolute flex justify-between rounded-[51px] px-8 w-[80%] bg-primary -translate-y-[50%] left-[50%] -translate-x-[50%]">
        <div>
          <div className="h2 text-white">
            Sign Up For <br /> Special Offer
          </div>
        </div>
        <div>
          <p className="text-end ">
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Maxime mollitia,{" "}
          </p>
          <div className="input"></div>
        </div>
      </div>
      <div className="footer-main flex justify-between mt-[5%]">
        <div>
          <div>
            <div className="flex gap-4">
              <img src="./logo-white.png" alt="" />
              <span className="text-white text-[35px] font-semibold">Urit</span>
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
        <div className="flex gap-4">
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
  );
}

export default Footer;
