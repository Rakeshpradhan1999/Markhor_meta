import poster from "../assets/how-to-buy-video.png";
const HowToBuy = () => {
  return (
    <section className="how-to-buy py-28">
      <div className="container grid grid-cols-2 items-center">
        <div>
          <h2 className=" text-5xl font-light">
            How to Buy <br /> Markhor Meta?
          </h2>
        </div>
        <div>
          <img src={poster} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
