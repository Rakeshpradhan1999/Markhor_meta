import roadmap1 from "../assets/roadmap1.png";
import roadmap2 from "../assets/roadmap2.png";
import roadmap3 from "../assets/roadmap3.png";
import roadmap4 from "../assets/roadmap4.png";
import { BsCalendarRange } from "react-icons/bs";
const roadmapData = [
  {
    title: "Phase 1",
    img: roadmap1,
    textList: [
      "Project planing",
      "Team building",
      "Smart contract development",
      "5000 telegram members",
      "Website (beta) launch",
      "Social media presence",
      "Detailed White paper",
      "Social media marketing push",
      "Target crypto community ",
      "Agreesive marketing",
      "Website Launch (Beta) Social Media",
      "Youtube Influencer Promotions",
      "Introducing Vesting method system machanisam ",
      "presale buyers will recieve",
    ],
  },
  {
    title: "Phase 2",
    img: roadmap2,
    textList: [
      "Markhor Meta token Presale 40,000 $ softcap ,100,000 $ hardcap",
      "Markhor Meta token launch",
      "Initially Liquidity lock for 6 months to 1 year before",
      "5000 telegram members",
      "launch",
      "AMA Session",
      "Contract Audit",
      "Grow Social Media Presence",
      "Influencer Promotions",
      "Partnerships With Other Communities",
      "Coinsniper ,Coinboom,Coin vote listing",
      "Partnership with Technology & Advisory Firm Final",
      "Website Launch ",
      "Listings on CMC and CoinGecko",
    ],
  },
  {
    title: "Phase 3",
    img: roadmap3,
    textList: [
      "Metaverse game nft block chain free to play, play to earn",
      "Listings on CEX",
      "More Marketing",
      "5000 to 20000 organic telegram and discord community",
      "Secure crypto wallet",
    ],
  },
  {
    title: "Phase 4",
    img: roadmap4,
    textList: [
      "Nft Market place ,where people can create ,mint ,buy & sell their art",
      "More Marketing community growth",
      "Staking option (stake Markhor Meta (MM) to earn free rewards )",
      "More things coming soon; stay tuned",
    ],
  },
];

const Roadmap = () => {
  return (
    <div className="py-10 sm:py-20">
      <h2 className="text-4xl font-light text-center">Roadmap</h2>
      <div className="container mt-10">
        {roadmapData.map((val, i) => (
          <div
            className={`grid grid-cols-10 items-center gap-4 sm:gap-0 `}
            key={i}
          >
            <div className="col-span-8  md:col-span-4">
              <div className="bg-gradient px-8 p-6 font-serif md:hidden mt-4">
                <h4 className="text-xl sm:text-2xl mb-3 font-bold">
                  {val.title}
                </h4>
                <ul>
                  {val.textList.map((val, i) => (
                    <li className="text-sm sm:text-lg my-1" key={i}>
                      {val}
                    </li>
                  ))}
                </ul>
              </div>
              {i % 2 === 0 ? (
                <div className="bg-gradient px-8 p-6 font-serif hidden md:block">
                  <h4 className="text-2xl mb-3 font-bold">{val.title}</h4>
                  <ul>
                    {val.textList.map((val, i) => (
                      <li className="text-lg my-1" key={i}>
                        {val}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="p-4 hidden md:block">
                  <img
                    src={val.img}
                    alt=""
                    className=" max-w-xs mx-auto w-full"
                  />
                </div>
              )}
            </div>
            <div className=" col-span-2 h-full">
              <div className="flex flex-col h-full">
                <div
                  className={`${
                    i === 0 ? "bg-transparent" : "bg-gradient"
                  }  w-1 h-full flex-1 mx-auto`}
                ></div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 text-opacity-50 rounded-full text-xl bg-secondary-400 grid place-content-center mx-auto">
                  <BsCalendarRange />
                </div>
                <div
                  className={`${
                    i === roadmapData.length - 1
                      ? "bg-transparent"
                      : "bg-gradient"
                  }  w-1 h-full flex-1 mx-auto`}
                ></div>
              </div>
            </div>
            <div className=" hidden md:block col-span-4">
              {i % 2 === 1 ? (
                <div className="bg-gradient px-8 p-6 font-serif">
                  <h4 className="text-2xl mb-3 font-bold">{val.title}</h4>
                  <ul>
                    {val.textList.map((val, i) => (
                      <li className="text-lg my-1" key={i}>
                        {val}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="p-4">
                  <img
                    src={val.img}
                    alt=""
                    className=" max-w-xs mx-auto w-full"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
