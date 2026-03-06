import { RiArrowRightUpLine } from "@remixicon/react";
import "./css/About-us.css"

function AboutUs() {
  return (
    <div id="about-us" className="about-us">
        <div className="box">

        <div className="title">
            <div>
            <p>01</p>
            <p>|</p>
            <p>About us</p>
            </div>
            <p>© 2025</p>
        </div>
        <h2>Averra is a digital agency that help brands stand out and scale with bold design and smart marketing.</h2>
        <p>We blend bold creativity with strategic insight to help brands lead in the digital age.</p>
        <div className="btn">
            <a href="#"><p>More about us</p> <RiArrowRightUpLine /></a>
            <div className="btn-border"></div>
        </div>
        </div>

        <div className="container">

        </div>
    </div>
  );
}

export default AboutUs;
