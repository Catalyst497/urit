import Image from "next/image";
import Hero from "./components/Home/Hero";
import Nav from "./components/Home/Nav";
import Services from "./components/Home/Services";
import WhoWeWant from "./components/Home/WhoWeWant";
import OurReach from "./components/Home/OurReach";
import PowerSource from "./components/Home/PowerSource";
import Footer from "./components/Home/Footer";

export default function Home() {
  return (
    <main className="bg-[#fafafa]">
      <div className="nav-ati-hero bg-primary regular-white">
        <Nav />
        <Hero />
      </div>
      <div className="services-ati-who-we-want regular-black ">
        <Services />
        <WhoWeWant />
      </div>
      <OurReach />
      <PowerSource />
      <Footer />
    </main>
  );
}
