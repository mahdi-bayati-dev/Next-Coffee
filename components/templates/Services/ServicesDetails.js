import React from "react";
import ServiceItem from "@/components/modules/ServiceItem/serviceItem";

function ServicesDetails({ data }) {
  return (
    // <!-- Service Start -->
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>
            Our Services
          </h4>
          <h1 className="display-4">Fresh & Organic Beans</h1>
        </div>
        <div className="row">
          {data.map((item) => (
            <ServiceItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesDetails;
