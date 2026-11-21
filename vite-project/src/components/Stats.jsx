import { LuHouse, LuStar, LuBuilding2 } from "react-icons/lu";

const Stats = ({ properties }) => {
  const featured = properties.filter((item) => item.isFeatured).length;
  const types = new Set(properties.map((item) => item.type)).size;
  return (
    <div className="stats">
      <div className="stat">
        <LuHouse size={44} />
        <div>
          <h3>{properties.length}</h3>
          <p>Total Properties</p>
        </div>
      </div>
      <div className="stat">
        <LuStar size={44} />
        <div>
          <h3>{featured}</h3>
          <p>Featured Properties</p>
        </div>
      </div>
      <div className="stat">
        <LuBuilding2 size={44} />
        <div>
          <h3>{types}</h3>
          <p>Property Types</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;