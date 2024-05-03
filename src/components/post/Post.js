import React from "react";

import Post1 from "../../images/post1.png";
import Post2 from "../../images/post2.png";
import Post3 from "../../images/post3.png";
import Prof1 from "../../images/prof1.png";
import Prof2 from "../../images/prof2.png";
import Prof3 from "../../images/prof3.png";
import Dropdown from "../../images/dropdown.png";
import Share from "../../images/share.png";
import Eye from "../../images/eye.svg";
import Date from "../../images/date.svg";
import Location from "../../images/location.png";
function Post() {
 
  return (
    <>
      <div className="posts-center position-relative">
        <div className="d-flex d-lg-none w-100 position-absolute top-4 align-items-center justify-content-between custom-main-button">
          <div className="text-main-posts">Posts(368)</div>
          <button className="btn btn-filter d-flex align-items-center gap-2">
            Filter : All
            <img
              src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-arrow_drop_down-24px'%20clip-path='url(%23clip0_1_1136)'%3e%3cpath%20id='Vector'%20d='M6.41667%209.16669L11%2013.75L15.5833%209.16669H6.41667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1136'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
              alt="arrowdown"
              width="20"
              height="20"
            />
          </button>
        </div>
        <main className="d-flex flex-column gap-4">
          <div
            className="d-flex flex-column border border-1 rounded-2"
            style={{
              "max-width": "692px",
              "border-color": "rgb(224, 224, 224)",
              fill: "rgb(255, 255, 255)",
            }}
          >
            <img src={Post1} alt="Nature" className="imagePost" />
            <div className="p-4">
              <h3 className="d-flex">✍️ Article</h3>
              <div className="d-flex gap-6 justify-content-between">
                <h4>
                  What if famous brands had regular fonts? Meet RegulaBrands!
                </h4>
                <div className="btn align-self-start">
                  <div className="dropdown">
                    <div
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={Dropdown}
                        alt="more details"
                        height="28px"
                        width="28px"
                      />
                    </div>
                    <ul className="dropdown-menu">
                      <li>
                        <button className="dropdown-item" type="button">
                          Edit
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">
                          Report
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">
                          option 3
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className="d-flex align-items-center gap-5 list-unstyled"></ul>
              <p>
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <img
                    className="rounded-circle"
                    alt="Profile"
                    src={Prof1}
                    width="48"
                    height="48"
                  />
                  <div className="d-flex flex-column">
                    <div className="text-wrapper">Siddharth Goyal</div>
                    <div className="d-lg-none">
                      <img src={Eye} alt="watch" />
                      <span>1.4k views</span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-none d-lg-block pe-4">
                    <img src={Eye} alt="watch" />
                    <span>1.4k views</span>
                  </div>
                  <button
                    className="btn d-flex align-items-center gap-2"
                    style={{ background: "rgb(237, 238, 240)" }}
                  >
                    <img src={Share} alt="share" />
                    <span className="d-lg-none">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-column border border-1 rounded-2"
            style={{
              maxWidth: "692px",
              borderColor: "rgb(224, 224, 224)",
              fill: "rgb(255, 255, 255)",
            }}
          >
            <img src={Post2} alt="Nature" className="imagePost" />
            <div className="p-4">
              <h3 className="d-flex">🔬️ Education</h3>
              <div className="d-flex gap-6 justify-content-between">
                <h4>
                  Tax Benefits for Investment under National Pension Scheme
                  launched by Government
                </h4>
                <div className="btn align-self-start">
                  <div className="dropdown">
                    <div
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={Dropdown}
                        alt="more details"
                        height="28px"
                        width="28px"
                      />
                    </div>
                    <ul className="dropdown-menu">
                      <li>
                        <button className="dropdown-item" type="button">
                          Edit
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">
                          Report
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">
                          option 3
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className="d-flex align-items-center gap-5 list-unstyled"></ul>
              <p>
                I’ve worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <img
                    className="rounded-circle"
                    alt="Profile"
                    src={Prof2}
                    width="48"
                    height="48"
                  />
                  <div className="d-flex flex-column">
                    <div className="text-wrapper">Siddharth Goyal</div>
                    <div className="d-lg-none">
                      <img src={Eye} alt="watch" />
                      <span>1.4k views</span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-none d-lg-block pe-4">
                    <img src={Eye} alt="watch" />
                    <span>1.4k views</span>
                  </div>
                  <button
                    className="btn d-flex align-items-center gap-2"
                    style={{ background: "rgb(237, 238, 240)" }}
                  >
                    <img src={Share} alt="share" />
                    <span className="d-lg-none">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-column border border-1 rounded-2"
            style={{
              "max-width": "692px",
              "border-color": "rgb(224, 224, 224)",
              fill: "rgb(255, 255, 255)",
            }}
          >
            <img src={Post3} alt="Nature" className="imagePost" />
            <div className="p-4">
              <h3 className="d-flex">🗓️ Meetup</h3>
              <div className="d-flex gap-6 justify-content-between">
                <h4>Finance &amp; Investment Elite Social Mixer @Lujiazui</h4>
                <div className="btn align-self-start">
                  <div className="dropdown">
                    <div
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={Dropdown}
                        alt="more details"
                        height="28px"
                        width="28px"
                      />
                    </div>
                    <ul className="dropdown-menu">
                      <li>
                        <button className="dropdown-item" type="button">
                          Edit
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">
                          Report
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">
                          option 3
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className="d-flex align-items-center gap-5 list-unstyled">
                <li className="d-flex align-items-center gap-1">
                  <img src={Date} alt="date" width="20px" height="20px" />
                  Fri, 12 Oct, 2018
                </li>
                <li className="d-flex align-items-center gap-1">
                  <img
                    src={Location}
                    alt="location"
                    width="20px"
                    height="20px"
                  />
                  Ahmedabad, India
                </li>
              </ul>
              <button
                className="custom-post-link btn mb-4 fw-semibold"
                style={{ color: "rgb(229, 97, 53)", width: "100%" }}
              >
                Visit WebSite
              </button>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <img
                    className="rounded-circle"
                    alt="Profile"
                    src={Prof3}
                    width="48"
                    height="48"
                  />
                  <div className="d-flex flex-column">
                    <div className="text-wrapper">Siddharth Goyal</div>
                    <div className="d-lg-none">
                      <img src={Eye} alt="watch" />
                      <span>1.4k views</span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-none d-lg-block pe-4">
                    <img src={Eye} alt="watch" />
                    <span>1.4k views</span>
                  </div>
                  <button
                    className="btn d-flex align-items-center gap-2"
                    style={{ background: "rgb(237, 238, 240)" }}
                  >
                    <img src={Share} alt="share" />
                    <span className="d-lg-none">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-column border border-1 rounded-2"
            style={{
              "max-width": "692px",
              "border-color": "rgb(224, 224, 224)",
              fill: "rgb(255, 255, 255) ",
            }}
          >
            <div className="p-4">
              <h3 className="d-flex">💼️ Job</h3>
              <div className="d-flex gap-6 justify-content-between">
                <h4>Software Developer</h4>
                <div className="btn align-self-start">
                  <div className="dropdown">
                    <div
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src={Dropdown}
                        alt="more details"
                        height="28px"
                        width="28px"
                      />
                    </div>
                    <ul className="dropdown-menu">
                      <li>
                        <button className="dropdown-item" type="button">
                          Edit
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">
                          Report
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">
                          option 3
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <ul className="d-flex align-items-center gap-5 list-unstyled">
                <li className="d-flex align-items-center gap-1">
                  <img src={Date} alt="date" width="20px" height="20px" />
                  Innovaccer Analytics Private Ltd.
                </li>
                <li className="d-flex align-items-center gap-1">
                  <img
                    src={Location}
                    alt="location"
                    width="20px"
                    height="20px"
                  />
                  Noida, India
                </li>
              </ul>
              <button
                className="custom-post-link btn mb-4 fw-semibold"
                style={{ color: "rgb(2, 184, 117)", width: "100%" }}
              >
                Apply on Timejobs
              </button>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                  <img
                    className="rounded-circle"
                    alt="Profile"
                    src={Prof3}
                    width="48"
                    height="48"
                  />
                  <div className="d-flex flex-column">
                    <div className="text-wrapper">Siddharth Goyal</div>
                    <div className="d-lg-none">
                      <img src={Eye} alt="watch" />
                      <span>1.4k views</span>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-none d-lg-block pe-4">
                    <img src={Eye} alt="watch" />
                    <span>1.4k views</span>
                  </div>
                  <button
                    className="btn d-flex align-items-center gap-2"
                    style={{ background: "rgb(237, 238, 240)" }}
                  >
                    <img src={Share} alt="share" />
                    <span className="d-lg-none">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Post;
