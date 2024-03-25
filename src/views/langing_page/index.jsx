import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import "../../index.css";
import AboutUs from "./sections/about_us";
import FeatureSection from "./sections/feature_section";
import ServiceSection from "./sections/service_section";
import TestimonySection from "./sections/testimony_section";
import WelcomeSection from "./sections/welcome_section";

const LandingPage = () => {
  return (
    <>
      <div className="w-full h-screen ">
        <Navbar></Navbar>
        <WelcomeSection />
        <AboutUs />
        <ServiceSection />
        <FeatureSection />
        {/* <GalerySection /> */}
        <TestimonySection />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
