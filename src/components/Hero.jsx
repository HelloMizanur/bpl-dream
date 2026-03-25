import bgImg from "../assets/bg-shadow.png";
import bgMain from "../assets/banner-main.png";
const Hero = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="bg-cover bg-center mx-5 md:mx-20 bg-gray-900  text-white flex justify-center flex-col items-center py-20 space-y-5 rounded-2xl"
      >
        <img className="mt-10" src={bgMain} alt="" />
        <h1 className="text-4xl font-bold">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="text-2xl text-gray-400">
          Beyond Boundaries Beyond Limits
        </p>
        <button className="btn btn-outline btn-warning">
          Claim Free Credit
        </button>
      </div>
    </>
  );
};

export default Hero;
