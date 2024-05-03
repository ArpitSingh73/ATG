import React from "react";
import Prof4 from "../../images/prof4.png";
import Prof5 from "../../images/prof5.png";
import Prof6 from "../../images/prof6.png";
import Location from "../../images/location.png";
import Info from "../../images/info.svg";
import Cross from "../../images/cross.png";
import Like from "../../images/like.png";
function Sidebar() {
  return (
    <>
      <div className="container d-none d-lg-flex flex-column mt-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <img src={Location} alt="location" />
            <input
              type="text"
              placeholder="Enter Your Location"
              className="input-text"
            />
          </div>
          <button className="btn">
            <img src={Cross} alt="edit" />
          </button>
        </div>
        <hr className="my-1" />
        <div className="d-flex align-items-center gap-2 mb-4">
          <img src={Info} alt="information" className="align-self-start" />
          <p className="location-info">
            Your location will help us serve better and extend a personalised
            experience.
          </p>
        </div>
        <div className="d-flex align-items-center gap-2 text-capitalize mb-3">
          <img src={Like} alt="thumbs up" />
          <span className="text-recommended">REcommended Groups</span>
        </div>
        <div className="d-flex flex-column gap-4">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <img
                className="rounded-circle"
                alt="Profile"
                src={Prof4}
                width="36"
                height="36"
              />
              <div className="text-wrapper">Leisure</div>
            </div>
            <a className="btn follow rounded-5" href="/">
              Follow
            </a>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <img
                className="rounded-circle"
                alt="Profile"
                src={Prof5}
                width="36"
                height="36"
              />
              <div className="text-wrapper">Activism</div>
            </div>
            <a className="btn follow rounded-5" href="/">
              Follow
            </a>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <img
                className="rounded-circle"
                alt="Profile"
                src={Prof6}
                width="36"
                height="36"
              />
              <div className="text-wrapper">MBA</div>
            </div>
            <a className="btn follow rounded-5" href="/">
              Follow
            </a>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <img
                className="rounded-circle"
                alt="Profile"
                src={Prof4}
                width="36"
                height="36"
              />
              <div className="text-wrapper">Philosophy</div>
            </div>
            <a className="btn follow rounded-5" href="/">
              Follow
            </a>
          </div>
        </div>
        <button className="btn text-end mt-5 text-primary text-capitalize">
          see more...
        </button>
      </div>
    </>
  );
}

export default Sidebar;
