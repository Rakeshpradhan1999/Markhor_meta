/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Logo from "../assets/Logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
const Header = () => {
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="flex justify-between relative">
      <div>
        <img src={Logo} alt="" className="logo" />
      </div>
      <div className="flex-1 hidden md:block">
        <ul className="flex bg-white justify-between lg:ml-60 items-center rounded-b-xl px-4 bg-opacity-70 ">
          {linkList.map((val, i) => (
            <li key={i}>
              <a href="#" className="text-base font-medium font-serif ">
                {val.text}
              </a>
            </li>
          ))}
          <div>
            <button className="py-1 px-6 font-serif bg-primary-400 my-2 rounded-xl border border-black">
              Connect
            </button>
          </div>
        </ul>
      </div>
      <div className="flex-1 md:hidden">
        <ul className="rounded-xl bg-white flex justify-end w-full p-2">
          <button className="text-3xl" onClick={showHandler}>
            <HiMenuAlt3 />
          </button>
        </ul>
      </div>
      <ul
        className={`mobile-nav md:hidden bg-secondary-400 absolute ${
          show ? "active " : ""
        }`}
      >
        <div className=" pb-10 px-4 pt-4">
          {linkList.map((val, i) => (
            <li key={i}>
              <a
                onClick={showHandler}
                href="#"
                className="text-lg border-b border-gray-700 block sm:text-base font-normal  sm:font-medium font-serif py-2"
              >
                {val.text}
              </a>
            </li>
          ))}
          <li>
            <a
              onClick={showHandler}
              href="#"
              className="text-lg  block sm:text-base font-normal  sm:font-medium font-serif py-2"
            >
              Connect
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Header;

const linkList = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Audit",
    link: "/",
  },
  {
    text: "White Paper",
    link: "/",
  },
  {
    text: "Wallet tracker",
    link: "/",
  },
];
