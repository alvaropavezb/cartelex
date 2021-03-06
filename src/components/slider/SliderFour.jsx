import React from "react";
import Particles from "react-particles-js";
import TextLoop from "react-text-loop";

const Slider = () => {
  return (
    <div className="slider-four">
      <div className="shane_tm_hero" id="home" data-style="one">
        <div className="frame-layout__particles">
          <Particles
            params={{
              particles: {
                number: {
                  value: 30,
                },
                size: {
                  value: 6,
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
              },
            }}
          />
        </div>
        <div className="background">
          <div
            className="image"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/slider/3.png"
              })`,
            }}
          ></div>
        </div>
        {/* End .background */}

        <div className="container">
          <div className="content">
            <div className="name_wrap">
              <h3>
                <span>
                  MATIAS TAMAYO
                  <br />
                </span>{" "}
                <TextLoop>
                  <span className="loop-text">EL PATRON</span>
                  <span className="loop-text"> EL JEFE</span>
                  <span className="loop-text"> EL COMANDANTE</span>
                </TextLoop>{" "}
                <span className="overlay_effect"></span>
              </h3>
            </div>
            {/* End title */}

            <div className="job_wrap">
              <span className="job">
                CARTELEX
                <span className="overlay_effect"></span>
              </span>
            </div>
            {/* End designation */}
            <a
              href="https://www.twitch.tv/matitamayo"
              className="white-fill-bg btn-outline btn-medium"
            >
              VER EN TWITCH
              <span className="overlay_effect"></span>
            </a>
          </div>
          {/* End content */}
        </div>
        {/* End .container */}
      </div>
    </div>
  );
};

export default Slider;
