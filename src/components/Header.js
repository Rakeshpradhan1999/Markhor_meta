/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../assets/Logo.png";
const Header = () => {
  return (
    <div className="flex justify-between">
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="flex-1">
        <ul className="flex bg-white justify-between ml-60 items-center rounded-b-xl px-4 bg-opacity-70">
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
