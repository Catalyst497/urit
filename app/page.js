import Image from "next/image";
import Hero from "./components/Home/Hero";
import Nav from "./components/Home/Nav";
import Services from "./components/Home/Services";
import WhoWeWant from "./components/Home/WhoWeWant";
import OurReach from "./components/Home/OurReach";

export default function Home() {
  return (
    <main className="">
      <div className="nav-ati-hero bg-primary regular-white">
        <Nav />
        <Hero />
      </div>
      <div className="services-ati-who-we-want px-8 regular-black bg-[#fafafa]">
        <Services />
        <WhoWeWant />
      </div>
      <OurReach />
    </main>
  );
}
