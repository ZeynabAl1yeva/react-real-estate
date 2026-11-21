import { LuMapPin } from "react-icons/lu";
import StatusBadge from "./StatusBadge";
import PropertyFeatures from "./PropertyFeatures";

const PropertyCard = ({ title, location, price, bedrooms, bathrooms, area, image, type, isFeatured }) => {
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={image} alt={title} />
        {isFeatured && <StatusBadge text="Featured" variant="featured" />}
        <StatusBadge text={type} variant="type" />
      </div>
      <div className="property-body">
        <div className="property-top">
          <h3>{title}</h3>
          <span className="price">${price.toLocaleString("en-US")}</span>
        </div>
        <p className="location">
          <LuMapPin size={16} /> {location}
        </p>
        <PropertyFeatures
          bedrooms={bedrooms}
          bathrooms={bathrooms}
          area={area}
        />
      </div>
    </div>
  );
};

export default PropertyCard;