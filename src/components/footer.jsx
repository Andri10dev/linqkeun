import LogoOnlyBlue from "../assets/images/logo-ony-blue.png";
import FooterVector from "../assets/images/footer-vector.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  // const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //     // first prevent the default behavior
  //     e.preventDefault();
  //     // get the href and remove everything before the hash (#)
  //     const href = e.currentTarget.href;
  //     const targetId = href.replace(/.*\#/, "");
  //     // get the element by id and use scrollIntoView
  //     const elem = document.getElementById(targetId);
  //     elem?.scrollIntoView({
  //         behavior: "smooth",
  //     });
  // };

  const handleScroll = () => {};

  // const [isCollapse, setIsCollapse] = useState(true);
  // const toggleCollapse = () => {
  //     setIsCollapse(!isCollapse)
  // }
  return (
    <div id="footer" className="w-full">
      <div className="flex flex-col md:flex-row bg-custom-blue">
        <div
          className="order-5 md:order-1 md:w-[33%] h-fit grid relative overflow-hidden pl-10 py-5 bg-cover "
          style={{ backgroundImage: `url(${FooterVector})` }}
        >
          <p className="font-semibold text-4xl text-custom-blue mb-5">
            Linqkeun
          </p>
          <img
            src={LogoOnlyBlue}
            alt="Logo Linqkeun Blue"
            className="w-32 aspect-square object-contain"
          ></img>
        </div>
        <div className="order-1 md:order-2 md:w-[16.6%] 500 px-3 py-5 text-white">
          <p className="font-semibold border-b-4 mb-3 pb-3">Our Company</p>
          <div className="flex flex-col space-y-3 pl-5">
            <Link
              href="#welcomeSection"
              onClick={handleScroll}
              className="hover:scale-105 transition-all"
            >
              Home
            </Link>
            <Link
              href="#aboutUs"
              onClick={handleScroll}
              className="hover:scale-105 transition-all"
            >
              About{" "}
            </Link>
            <Link
              href="#serviceSection"
              onClick={handleScroll}
              className="hover:scale-105 transition-all"
            >
              Service
            </Link>
            <Link
              href="#featureSection"
              onClick={handleScroll}
              className="hover:scale-105 transition-all"
            >
              Feature
            </Link>
          </div>
        </div>
        <div className="order-2 md:order-3 md:w-[16.6%] 500 px-3 py-5 text-white">
          <p className="font-semibold border-b-4 mb-3 pb-3">Service</p>
          <div className="flex flex-col space-y-3 pl-5">
            <Link
              href="#serviceSection"
              onClick={handleScroll}
              className="hover:scale-105 transition-all"
            >
              Quick Service
            </Link>
            <Link
              href="#serviceSection"
              onClick={handleScroll}
              className="hover:scale-105 transition-all"
            >
              Best Quality
            </Link>
            <Link
              href="#serviceSection"
              onClick={handleScroll}
              className="hover:scale-105 transition-all"
            >
              Communication
            </Link>
            <Link
              href="#serviceSection"
              onClick={handleScroll}
              className="hover:scale-105 transition-all"
            >
              Problem Solving
            </Link>
          </div>
        </div>
        <div className="order-3 md:order-4 md:w-[16.6%] 500 px-3 py-5 text-white">
          <p className="font-semibold border-b-4 mb-3 pb-3">Contact</p>
          <div className="flex flex-col space-y-3 pl-5">
            <Link
              href="https://wa.me/6285295019309"
              className="hover:scale-105 transition-all"
            >
              <span></span>
              <span>Whatsapp</span>
            </Link>
          </div>
        </div>
        <div className="order-4 md:order-5 md:w-[16.6%]  px-3 py-5 text-white relative">
          <p className="font-semibold border-b-4 mb-3 pb-3">Map</p>
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.3706107547036!2d107.89508867124272!3d-7.198487454739975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b1ec99198943%3A0x64dc3df5f22cda10!2sPerum%20Bumi%20Anggrek%201!5e0!3m2!1sid!2sid!4v1698847197857!5m2!1sid!2sid"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full aspect-video rounded-md"
          ></iframe>
        </div>
      </div>
      <div className="text-center py-5 bg-[#111827] text-white text-sm md:text-base">
        <span>&copy;</span>
        <span> All Copyrights are Reserverd by Linqkeun</span>
      </div>
    </div>
  );
};

export default Footer;
