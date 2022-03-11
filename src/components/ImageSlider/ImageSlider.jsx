import React from "react";
import video from "../../../src/asset/media/UntitledProject31.mp4";

export default function ImageSlider() {
  return (
    <section
      className="u-align-center u-clearfix u-custom-color-5 u-section-2"
      id="sec-09a2"
    >
      <div className="u-clearfix u-sheet u-sheet-1">
        <h1 className="u-align-center u-custom-font u-text u-text-default-xl u-text-font u-text-palette-4-dark-1 u-text-1">
          MINTED
        </h1>
        <h1 className="u-align-center-lg u-align-center-md u-align-center-xl u-custom-font u-text u-text-default u-text-font u-text-palette-4-base u-text-2">
          About
        </h1>
        <h3 className="u-align-justify u-custom-font u-text u-text-font u-text-palette-4-dark-2 u-text-3">
          `​Womens NFT is a collection of 10,000 randomly generated and unique
          NFT art pieces created by the internationally acclaimed visual artist
          Maliha Abidi. The collection represents women from around the world
          and the traits go beyond the diversity of just skin colors. Women
          activists, artists, scientists, coders and many others rising to make
          the world a better place!
          <br />
          <br />
          Womens NFT allows art lovers to own a unique art piece while also
          making the NFT space more diverse and inclusive.
          <br />
          <br />
          Join us in our journey as we celebrate the incredible women rising on
          the blockchain while supporting important causes in our society that
          we are passionate about.
          <br />
          <br />
          <br />
        </h3>
        <div className="u-align-center-md u-align-center-sm u-align-center-xs u-expanded-width-xs u-uploaded-video u-video u-video-contain u-video-1">
          <div className="embed-responsive">
            <video
              className="embed-responsive-item"
              data-autoplay={1}
              loop
              muted
              autoPlay="autoplay"
              playsInline
            >
              <source src={video} type="video/mp4" />
              <p>Your browser does not support HTML5 video.</p>
            </video>
          </div>
        </div>
        <a
          href="https://discord.com/invite/X5Ut9u7MGW"
          className="u-align-center u-btn u-btn-round u-button-style u-radius-6 u-text-white u-btn-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Discord
        </a>
        <a
          href="https://twitter.com/WomenriseNFT"
          className="u-align-center u-btn u-btn-round u-button-style u-radius-6 u-text-white u-btn-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Twitter
        </a>
      </div>
    </section>
  );
}
