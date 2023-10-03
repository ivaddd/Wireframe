import ig from "./ig.png";
import ig2 from "./ig2.png";
import tele from "./tele.png";
import tt from "./tt.png";
import d from "../navbar/d.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0 w-1/2">
          <img src={d} alt="Company Icon" className="w-24 h-24 mr-4" />
          <div>
            <h2 className="text-base font-semibold">Contact</h2>
            <p className=" text-sm ">Contact us if you have any questions</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 w-1/2 pt-2 md:pt-0">
          <a
            href="#"
            className="text-sm text-white hover:text-white flex items-center space-x-2 "
          >
            <img src={ig} alt="Company Icon" className="w-6 h-6 mr-4" />
            sosial media
          </a>
          <a
            href="#"
            className="text-sm text-white hover:text-white flex items-center space-x-2 "
          >
            <img src={ig2} alt="Company Icon" className="w-6 h-6 mr-4" />
            sosial media
          </a>
          <a
            href="#"
            className="text-sm text-white hover:text-white flex items-center space-x-2"
          >
            <img
              src={tele}
              alt="Company Icon"
              className="w-6 h-6 mr-4 text-white"
            />
            sosial media
          </a>
          <a
            href="#"
            className="text-sm text-white hover:text-white flex items-center space-x-2"
          >
            <img
              src={tt}
              alt="Company Icon"
              className="w-6 h-6 mr-4 text-white"
            />
            sosial media
          </a>
        </div>
      </div>
          
    </footer>
  );
};

export default Footer;
