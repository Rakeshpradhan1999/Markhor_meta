/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import Footer1 from "../assets/footer1.png";
import Footer2 from "../assets/footer2.png";
import Footer3 from "../assets/footer3.png";
import Footer4 from "../assets/footer4.png";
import Footer5 from "../assets/footer5.png";
import emailjs from "@emailjs/browser";
const footerImages = [Footer1, Footer2, Footer3, Footer4, Footer5];
const Footer = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aiuyigr",
        "template_krnvlhd",
        form.current,
        "user_wEjuiKkTKbHLC6Wmi7FoW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const inputHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <footer className="pt-20">
      <div className="container font-serif">
        <p className="text-xl  text-center font-light " data-aos={"fade-up"}>
          Get in touch with us
        </p>
        <div className="mt-10">{/* <Input /> */}</div>
        {/* <p className="text-center font-light mt-8">
          Subscribe now and be the first to find about our latest products.
        </p> */}
        <div className="max-w-md mx-auto">
          <form ref={form} onSubmit={sendEmail} data-aos={"fade-up"}>
            <div className="bg-white border border-gray-600 mb-4 rounded-lg overflow-hidden">
              <input
                type="text"
                className="p-2 px-4 w-full focus:outline-none"
                placeholder="Name"
                name="user_name"
                value={formData.user_name}
                onChange={inputHandler}
              />
            </div>
            <div className="bg-white border border-gray-600 mb-4 rounded-lg overflow-hidden">
              <input
                type="text"
                className="p-2 px-4 w-full focus:outline-none"
                placeholder="Email"
                name="user_email"
                value={formData.user_email}
                onChange={inputHandler}
              />
            </div>
            <div className="bg-white border border-gray-600 mb-4 rounded-lg overflow-hidden">
              <textarea
                id="message"
                rows="4"
                cols="100"
                className="p-2 px-4 w-full focus:outline-none"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={inputHandler}
              ></textarea>
            </div>
            <button className="bg-gradient shadow-md  text-black w-full py-2 rounded-full">
              Submit
            </button>
          </form>
        </div>
        <p className="text-center font-light mt-8 text-sm">
          Copyright 2022, Markhor Meta
        </p>
      </div>
      <div className="bg-gradient mt-10">
        <div className="container  flex justify-between py-4 items-center">
          {footerImages.map((val, i) => (
            <div key={i} className="ml-2">
              <img src={val} alt="" className=" mx-auto" />
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
