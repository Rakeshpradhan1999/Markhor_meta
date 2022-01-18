const slippageData = [
  {
    title: "BUY SLIPPAGE",
    list: [
      "Buy slippage: 7%",
      " 1% Liquidity Pool ",
      "2% BNB rewards amongst the holders",
      "2% BNB Marketing wallet to buy back MM token and burn",
      "2% BNB to the Development funds",
    ],
  },
  {
    title: "SELL SLIPPAGE",
    list: [
      "Sell Slippage 8%",
      "2% to Liquidity Pool",
      "2% BNB amongst the holders ",
      "2% BNB Marketing wallet to buy back MM token and burn",
      "2% BNB Development funds wallet",
    ],
  },
];

const Slippage = () => {
  return (
    <section className="slippage pt-40 pb-10 ">
      <div className="px-8 md:px-0">
        <h2 className="text-lg sm:text-4xl font-light text-center">
          MARKHOR SLIPPAGE
        </h2>
        <div className="flex  flex-col md:flex-row  font-serif mt-20 justify-between">
          <div className="slippage-card1 px-8 lg:px-16 py-16 bg-white   bg-opacity-50 shadow-lg">
            <h3 className="font-bold text-lg ">{slippageData[0].title}</h3>
            <ul>
              {slippageData[0].list.map((val, i) => (
                <li className="my-3 font-medium md:max-w-xs" key={i}>
                  ⇋ {val}
                </li>
              ))}
            </ul>
          </div>
          <div className="slippage-card2 px-8 lg:px-16 py-16 bg-white  bg-opacity-50 shadow-lg text-right mt-10 md:mt-0">
            <h3 className="font-bold text-lg ">{slippageData[1].title}</h3>
            <ul>
              {slippageData[1].list.map((val, i) => (
                <li className="my-3 font-medium md:max-w-xs" key={i}>
                  ⇋ {val}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slippage;
