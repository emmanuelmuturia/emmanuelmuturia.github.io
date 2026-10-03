import React from "react";
import "./Products.scss";
import {productsSection} from "../../portfolio";
import {Fade} from "react-awesome-reveal";

export default function Products() {
  if (!productsSection.display) {
    return null;
  }

  return (
    <div id="products">
      <Fade bottom duration={1000} distance="20px">
        <div className="products-container">
          <h1 className="products-heading">Products</h1>
          <p>Coming Soon...</p>
        </div>
      </Fade>
    </div>
  );
}
