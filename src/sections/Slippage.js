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
      <div>
        <h2 className="text-4xl font-light text-center">MARKHOR SLIPPAGE</h2>
        <div className="flex font-serif mt-20 justify-between">
          <div className="slippage-card1 px-16 py-16 bg-white  bg-opacity-50 shadow-lg">
            <h3 className="font-bold text-lg ">{slippageData[0].title}</h3>
            <ul>
              {slippageData[0].list.map((val, i) => (
                <li className="my-3 font-medium max-w-xs" key={i}>
                  ⇋ {val}
                </li>
              ))}
            </ul>
          </div>
          <div className="slippage-card2 px-16 py-16 bg-white  bg-opacity-50 shadow-lg text-right">
            <h3 className="font-bold text-lg ">{slippageData[1].title}</h3>
            <ul>
              {slippageData[1].list.map((val, i) => (
                <li className="my-3 font-medium max-w-xs" key={i}>
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
