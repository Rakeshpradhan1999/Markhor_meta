import React from "react";
import { BsChevronRight } from "react-icons/bs";
import Footer1 from "../assets/footer1.png";
import Footer2 from "../assets/footer2.png";
import Footer3 from "../assets/footer3.png";
import Footer4 from "../assets/footer4.png";
import Footer5 from "../assets/footer5.png";

const footerImages = [Footer1, Footer2, Footer3, Footer4, Footer5];
const Footer = () => {
  return (
    <footer className="pt-20">
      <div className="container font-serif">
        <p className="text-xl  text-center font-light">Stay updated with us</p>
        <div className="mt-10">
          <Input />
        </div>
        <p className="text-center font-light mt-8">
          Subscribe now and be the first to find about our latest products.
        </p>
        <p className="text-center font-light mt-8 text-sm">
          Copyright 2019, Crypto ICO, Lorem Ipsum
        </p>
      </div>
      <div className="bg-gradient mt-10">
        <div className="container  flex justify-between py-4 items-center">
          {footerImages.map((val, i) => (
            <div key={i}>
              <img src={val} alt="" className="mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const Input = () => (
  <div className="border max-w-sm mx-auto border-gray-500 rounded-full flex w-full overflow-hidden">
    <input
      type="text"
      className="flex-1 focus:outline-none px-4 border-none outline-none bg-transparent placeholder:font-light placeholder:text-sm"
      placeholder="Enter your Email address "
    />
    <button className=" bg-gradient py-3 h-full px-4 rounded-full">
      <BsChevronRight />
    </button>
  </div>
);
