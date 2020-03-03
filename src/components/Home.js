import React from "react";

const Hero = () => {
  return (
    <div className="home">
      <section className="hero is-medium is-primary is-bold">
        <div id="hero" className="hero-body">
          <div className="container">
            <h1 className="title">Rising to the heights</h1>
            <h2 className="subtitle">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br></br>{" "}
              sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            </h2>
            <button className="button is-primary is-light">Our Services</button>
          </div>
        </div>
      </section>
      {/* ------------------------ */}
      <section className="section">
        <div className="container">
          <div className="columns pd is-desktop">
            <div className="column pd is-1 has-text-centered" id="cog"></div>
            <div className="column pd is-two-third-desktop">
              <p className="subtitle">
                <strong>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam
                </strong>
              </p>
            </div>
            <div className="column">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="columns pd">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="subtitle">
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et"
                  </p>
                  <p className="content">- No name</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="subtitle">
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et"
                  </p>
                  <p className="content">- No name</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="subtitle">
                    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et"
                  </p>
                  <p className="content">- No name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
