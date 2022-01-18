import Image from "../assets/banner-image.png";
import Header from "../components/Header";
import { FiChevronDown } from "react-icons/fi";

const account = "0xbB19Ac7AFCd532B13158810FF66c16f17635De87";

const Banner = () => {
  return (
    <div className="banner">
      <Header />
      <div className="container grid grid-cols-2 items-center">
        <div className="mt-40">
          <h1 className="font-sans font-medium text-5xl">
            <span className="text-blue ">Welcome</span> To
            <br /> Markhor Meta (MM)
          </h1>
          <p className="font-serif font-normal mt-4 max-w-lg w-full">
            The Metaverse technology It's a combination of multiple elements of
            technology, including virtual reality, augmented reality and video
            where users “live” within a digital universe. Markhor Meta NFT block
            gaming free to play , play to earn, NFT market place ,staking pool.
          </p>

          <div className="font-serif mt-36">
            <div className="flex">
              <div className="border border-black rounded-lg py-3 px-4 border-opacity-60 bg-white flex justify-between">
                <div className="flex items-center">
                  MM{" "}
                  <span className="ml-1">
                    <FiChevronDown />
                  </span>
                </div>
                <p className="ml-2 px-2">{account}</p>
              </div>
              <button className="px-6 rounded-lg py-2 block ml-4 bg-white shadow-lg ">
                Copy Link
              </button>
            </div>
            <div className="grid grid-flow-col gap-6 justify-start mt-10">
              <button className="bg-blue rounded-xl px-16 py-3 text-white max-w-max">
                Buy
              </button>
              <button className="bg-white rounded-xl px-10 py-3 shadow-lg max-w-max">
                Live Chart
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src={Image} className="banner-right-image" alt="" />
    </div>
  );
};

export default Banner;
