import React from "react";
import Google from "../../images/google.svg"
import Fb from "../../images/fb.svg"
import Eye from "../../images/eye.svg"
import Cross from "../../images/cross.png"

function Modal() {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered position-relative">
          <button
            type="button"
            className="btn position-absolute"
            data-bs-dismiss="modal"
            style={{ top: "10px", right: "-25px" }}
          >
            <img
              src={Cross}
            />
          </button>
          <div className="modal-content">
            <div className="modal-header custom-modal-header d-flex justify-content-center mb-4">
              Let's learn, share &amp; inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </div>
            <div className="px-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="d-flex fw-bold">Create Account</h4>
                <button className="btn">
                  Already have an account?
                  <span className="text-primary">Sign In</span>
                </button>
              </div>
              <div className="container text-center">
                <div className="row">
                  <div className="col">
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex">
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="First Name"
                        />
                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Last Name"
                        />
                      </div>
                      <input
                        type="email"
                        className="form-control custom-input"
                        placeholder="Email"
                      />
                      <div className="d-flex align-items-center justify-content-between position-relative">
                        <input
                          type="password"
                          className="form-control custom-input"
                          placeholder="Password"
                        />
                        <button
                          className="btn position-absolute"
                          style={{ right: "10px" }}
                        >
                          <img
                            src={Eye}
                            alt="eye"
                            width="18px"
                            height="18px"
                          />
                        </button>
                      </div>
                      <input
                        type="password"
                        className="form-control mb-4 custom-input"
                        placeholder="Confirm password"
                      />
                      <button
                        className="btn btn-primary rounded-5 d-flex justify-content-center align-items-center mb-4"
                        data-bs-dismiss="modal"
                      >
                        Create Account
                      </button>
                      <div className="d-flex flex-column gap-2">
                        <button className="btn d-flex align-items-center justify-content-center gap-2 button-signup-group">
                          <img
                            src={Fb}
                            alt="facebook"
                          />
                          Sign Up with Facebook
                        </button>
                        <button className="btn d-flex align-items-center gap-2 button-signup-group justify-content-center">
                          <img
                            src={Google}
                            alt="google"
                          />
                          Sign Up with Google
                        </button>
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="d-flex flex-column">
                      <img
                        src="/assets/signup-OCG-APNN.svg"
                        alt="unable to find the image"
                      />
                      <p className="info-signup">
                        By signing up, you agree to our Terms &amp; conditions,
                        Privacy policy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal
