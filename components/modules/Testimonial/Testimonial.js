import React from "react";

function Testimonial({ id, img, name, profession, text }) {
  return (
    <div className="testimonial-item" key={id}>
      <div className="d-flex align-items-center mb-3">
        <img className="img-fluid" src={img} alt={name} />
        <div className="ml-3">
          <h4>{name}</h4>
          <i>{profession || "Profession"}</i>
        </div>
      </div>
      <p className="m-0">{text}</p>
    </div>
  );
}

export default Testimonial;
