import { LuSearch, LuArrowRight } from "react-icons/lu";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Find Your Perfect Home</h1>
        <p>Discover the best apartments, houses and villas for sale in prime locations.</p>
        <button className="btn white">
          <LuSearch size={18} /> Browse Properties <LuArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Hero;