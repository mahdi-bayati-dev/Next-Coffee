import React from "react";

function ServiceItem({ title, img, icon, desc }) {
  return (
    <div className="col-lg-6 mb-5">
      <div className="row align-items-center">
        <div className="col-sm-5">
          <img className="img-fluid mb-3 mb-sm-0" src={img} alt={title} />
        </div>
        <div className="col-sm-7">
          <h4 className="d-flex align-items-center gap-2">
            {icon}
            {title}
          </h4>
          <p className="m-0">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
