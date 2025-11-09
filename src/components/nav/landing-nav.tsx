import Image from "next/image";
import logo from "@/assets/svgs/prime-x-icon.svg";
import arrowBg from "@/assets/svgs/arrow-bg.svg";
import hamburger from "@/assets/svgs/hamburger.svg";

export const LandingNav = () => {
  return (
    <nav className="fixed w-full">
      <div className="w-4/5 mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 p-2 rounded-full bg-white">
            <Image className="w-6 h-6" src={logo} alt="" />
            <p className="font-satoshi">Primex</p>
          </button>
          <div className="p-2.5 px-6 rounded-full bg-white">
            <ul className="flex items-center gap-6  text-[#111116] text-sm ">
              <li>
                <p>About</p>
              </li>
              <li>
                <p>Services</p>
              </li>
              <li>
                <p>Community</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-full p-2.5">
            <button className="flex items-center gap-2 p-2 px-4 rounded-full bg-white">
              <p className="font-satoshi text-sm">Contact us</p>
              <Image className="w-6 h-6" src={arrowBg} alt="" />
            </button>
          </div>
          <div className="p-2.5 bg-white rounded-full">
            <Image src={hamburger} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};
