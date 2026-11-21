import { LuBedDouble, LuBath, LuMaximize } from "react-icons/lu";

const PropertyFeatures = ({ bedrooms, bathrooms, area }) => {
  return (
    <div className="features">
      <p>
        <LuBedDouble size={18} /> {bedrooms} {bedrooms === 1 ? "Bed" : "Beds"}
      </p>
      <p>
        <LuBath size={18} /> {bathrooms} {bathrooms === 1 ? "Bath" : "Baths"}
      </p>
      <p>
        <LuMaximize size={18} /> {area} m²
      </p>
    </div>
  );
};

export default PropertyFeatures;