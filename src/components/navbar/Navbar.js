import React from "react";

import Prof2 from "../../images/prof2.png";
import Whole from "../../images/whole.png";
import Modal from "../modal/Modal";
import Search from "../../images/search.png";

function Navbar() {
  return (
    <>
      <div style={{ "box-shadow": "rgba(0, 0, 0, 0.12) 0px 1px 2px 0px" }}>
        <div className="container d-none d-lg-flex align-items-center justify-content-between p-3">
          <a href="/">
            <img src={Whole} width="162.57px" height="24px" alt="Logo" />
          </a>
          <form
            className="d-flex"
            style={{ width: "360px", "border-radius": "21px" }}
          >
            <button className="custom-search" type="submit">
              <img alt="Search" src={Search} width="22" height="22" />
            </button>
            <input
              className="form-control custom-input-search"
              type="search"
              placeholder="Search for your favorite groups in ATG"
              aria-label="Search"
            />
          </form>
          <div className="d-flex align-items-center gap-1">
            <button
              className="btn custom-btn-create p-0 m-0"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              create Account.
              <span className="text-primary fw-bold">It's Free!</span>
            </button>

            <div className="d-flex align-items-center">
              <img className="rounded-circle" alt="Profile" src={Prof2} />
            </div>

            <Modal></Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
