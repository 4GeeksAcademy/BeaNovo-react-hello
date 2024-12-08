
import React from "react";

const Jumbotron = () => {
  return (
    <div
      className="bg-light rounded p-4 mt-5 custom-jumbotron"
     
    >
      <div className="container py-5">
        <h1 className="display-5"  style={{ fontSize: "clamp(4rem, 9vw, 6rem)" }}>
          A Warm Welcome!
        </h1>
        <p className="col-md-8 fs-4 lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo
          suscipit erat ac feugiat. Morbi tempor eleifend lacus, eget semper
          ante volutpat at. Quisque sit amet interdum nisl. Morbi sit amet odio
          vehicula, pellentesque ipsum ac, porta neque.
        </p>
        <button type="button" className="btn btn-primary w-auto">
          Call to action!
        </button>
      </div>
    </div>
  );
};

export default Jumbotron;