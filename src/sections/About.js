import Card1 from "../assets/about1.png";
import Card2 from "../assets/about2.png";
import Card3 from "../assets/about3.png";

const cardList = [
  {
    img: Card1,
    title: "BNB DUEL REWARDS FOR HOLDERS",
    text: "Markhor Meta is the token on Binance smart chain ( BSC ). The unique double reward reflection will be 2% BNB on every buy and sell, BNB reward on staking will be sent to your wallets.",
  },
  {
    img: Card2,
    title: "NFT BLOCKCHAIN GAME",
    text: "NFT blockchain Game is the very first usecase of Markhor Meta out of 3. Which is free to play ,play to earn. Where MM holders will connect their wallets to play this game and earn cash rewards ,daily ,weekly, monthly alot ",
  },
  {
    img: Card3,
    title: "NFT MARKET PLACE",
    text: "Markhor Meta will have it's own market place within the website it's self .where people will create,mint,buy,sell & auction their Arts, MM will be used to trade .",
  },
];

const About = () => {
  return (
    <section className="py-28">
      <div className="container grid grid-cols-3 gap-14">
        {cardList.map((val, i) => (
          <div className="about-card px-8 py-4" key={i}>
            <img src={val.img} alt="" className=" max-w-xs w-full mx-auto" />
            <div className="font-serif mt-10">
              <h2 className="font-bold text-xl text-center">{val.title}</h2>
              <p className="mt-2">{val.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
