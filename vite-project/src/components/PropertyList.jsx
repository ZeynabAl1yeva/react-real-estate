import { useState } from "react";
import PropertyCard from "./PropertyCard";

const filters = ["All", "Apartment", "Villa", "House"];

const PropertyList = ({ properties }) => {
  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All"
      ? properties
      : properties.filter((property) => property.type === selected);
  return (
    <section className="property-section">
      <div className="section-top">
        <h2 className="section-title">Featured Properties</h2>
        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={selected === filter ? "filter active" : "filter"}
              onClick={() => setSelected(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="property-grid">
        {filtered.map((property) => (
          <PropertyCard
            key={property.id}
            title={property.title}
            location={property.location}
            price={property.price}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            area={property.area}
            image={property.image}
            type={property.type}
            isFeatured={property.isFeatured}
          />
        ))}
      </div>
    </section>
  );
};

export default PropertyList;