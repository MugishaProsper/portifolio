import { socialMedia } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[9pc]" />
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[28px] h-[28px] object-contain cursor-pointer ${
              index !== socialMedia.length -1  ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
