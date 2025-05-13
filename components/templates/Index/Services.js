import React from "react";
import ServiceItem from "@/components/modules/ServiceItem/serviceItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faTruck,
  faMugHot,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

const iconsMap = {
  faCoffee: faCoffee,
  faTruck: faTruck,
  faMugHot: faMugHot,
  faLeaf: faLeaf,
};

function Services({ services }) {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 className="display-4">Fresh & Organic Beans</h1>
        </div>
        <div className="row">
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              title={service.title}
              img={service.img}
              desc={service.description}
              icon={
                <FontAwesomeIcon
                  icon={iconsMap[service.icon]}
                  size="2x"
                  className="text-primary mb-3"
                />
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
