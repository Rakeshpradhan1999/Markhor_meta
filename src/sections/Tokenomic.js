import TokenomicImage from "../assets/tokenomic-image.png";

const cardData = [
  {
    title: "HUGE MARKETING TECHNIQUES",
    text: "We have kept 25 million of MM airdrop so we can fuel the Markhor Meta project to active community.",
  },
  {
    title: "3% AUTO GROWING LIQUIDITY",
    text: "Markhor Meta has unique auto LIQUIDITY growing feature which will help MM to boost it's LP pool. On every buy 1% and on every sell 2% automatically Liquidity pool will be increased",
  },
  {
    title: "BNB 2% on every transaction ",
    text: "2% BNB will be sent on every buy & sell to the marketing wallet which money will be used to buy MM and burn to reduce total supply.",
  },
];

const Tokenomic = () => {
  return (
    <section>
      <h2 className="text-4xl font-light text-center">TOKENOMICS</h2>
      <div className="container">
        <div className="grid grid-cols-2 gap-8 mt-10">
          <div>
            <img src={TokenomicImage} alt="" className="w-full" />
          </div>
          <div className="flex flex-col items-center justify-center">
            {cardData.map((val, i) => (
              <div
                className="px-8 py-8 font-serif bg-gradient max-h-max mb-8"
                key={i}
              >
                <h3 className=" font-bold text-lg mb-2">{val.title}</h3>
                <p>{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomic;
