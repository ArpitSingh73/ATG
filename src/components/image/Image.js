import React from "react";
import Home from "../../images/Home.png";

function Image() {
  return (
    //
    <>
      <div
        className="container-fluid p-0 position-relative 
        custom-bg-container"
      >
        <img src={Home} class="img-fluid" alt="Responsive image"></img>
      </div>
    </>
  );
}

export default Image;
