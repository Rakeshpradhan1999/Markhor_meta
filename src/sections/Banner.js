import Image from "../assets/banner-image.png";
import image2 from "../assets/banner-bg-mobile.png";
import image3 from "../assets/banner-bg-mobile-small.png";
import Header from "../components/Header";
import { FiChevronDown } from "react-icons/fi";

const account = "0xbB19Ac7AFCd532B13158810FF66c16f17635De87";

const Banner = () => {
  return (
    <div className="banner pb-10">
      <Header />
      <div className="container grid sm:grid-cols-12 items-center">
        <div className="mt-20 sm:mt-28 md:mt-40  sm:col-span-8  lg:col-span-7 ">
          <h1 className="font-sans font-normal text-2xl  sm:text-3xl  md:text-5xl w-6/12 sm:w-auto">
            <span className="text-blue ">Welcome</span> To
            <br /> Markhor Meta (MM)
          </h1>
          <p className="font-serif font-normal mt-4 w-6/12 sm:w-auto md:max-w-lg  text-sm max-w-xs sm:pr-10 md:mr-0 md:text-base">
            The Metaverse technology It's a combination of multiple elements of
            technology, including virtual reality, augmented reality and video
            where users “live” within a digital universe. Markhor Meta NFT block
            gaming free to play , play to earn, NFT market place ,staking pool.
          </p>

          <div className="font-serif mt-10 sm:mt-36">
            <div className="flex">
              <div className="border text-xxs items-center sm:text-base border-black rounded-full sm:rounded-lg py-0 sm:py-3 pl-2 pr-1 sm:px-4 border-opacity-60 bg-white flex justify-between">
                <div className="flex items-center">
                  MM{" "}
                  <span className="ml-1">
                    <FiChevronDown />
                  </span>
                </div>
                <p className="ml-1 sm:ml-2 px-2">
                  <span className="hidden sm:inline">{account}</span>
                  <span className="sm:hidden">
                    {account.slice(0, 14) +
                      "...." +
                      account.slice(account.length - 14)}
                  </span>
                </p>
              </div>
              <button className="px-6 text-xxs sm:text-base rounded-full sm:rounded-lg py-2 block ml-4 bg-white shadow-lg ">
                Copy <span className="hidden sm:inline">Link</span>
              </button>
            </div>
            <div className="grid grid-flow-col gap-6 justify-start mt-8 sm:mt-10">
              <button className="bg-blue text-xxs sm:text-base  rounded-full sm:rounded-xl px-10  py-2 sm:px-16 sm:py-3 text-white max-w-max">
                Buy
              </button>
              <button className="bg-white  text-xxs sm:text-base rounded-full sm:rounded-xl px-8  py-2 sm:px-16 sm:py-3 shadow-lg max-w-max">
                Live Chart
              </button>
            </div>
          </div>
        </div>
      </div>
      <picture>
        <source media="(max-width:992px)" srcSet={image2} />
        <source media="(max-width:768px)" srcSet={image3} />
        <img src={Image} className="banner-right-image" alt="" />
      </picture>
    </div>
  );
};

export default Banner;
