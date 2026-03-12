import "./css/studio.scss";
import "../../public/avtar-video.mp4";
import { RiArrowRightUpLine, RiPlayCircleFill, RiStarFill,  } from "@remixicon/react";
import  { memo } from "react";
function Studio() {
  console.log("Studio")
  return (
    <div id="studio" className="studio">
      <div className="container">

        <div className="text-box">
          <h1>Averra — Studio®</h1>
          <p>
            We create timeless design and strategic marketing that{" "}
            <span>make brands impossible to ignore.</span>
          </p>
        </div>

        <div className="image">

        <div className="video">
          <video src="../../public/avtar-video.mp4"></video>
          <RiPlayCircleFill />


        </div>
        <div className="box">
          <div className="template-1">
            <span>© 2017 - 25</span>
            <p>Based in Germany</p>
          </div>
          <div className="template-2">
            <div>
              <p>Branding</p> <span>-</span>
            </div>
            <div>
              <p>Digital design</p> <span>-</span>
            </div>
            <div>
              <p>Marketing strategy</p> <span>-</span>
            </div>
            <div>
              <p>Creative production</p> <span>-</span>
            </div>
          </div>
          <div className="template-3">
            <div>
                <div className="rate">
                    <div>

              {Array.from(new Array(5)).map((_, index) => (


                        <RiStarFill key={index} color="#fc4040"/>

                ))}
                <span>4.9/5</span>
                    </div>
                <p>We’ve helped <span>95+ brands</span> elevate their businesses</p>
                </div>
              <div className="dashad"></div>
            </div>
            <div className="total">
                <div>
                <div className="active"></div>
                <p>Available for Sep.</p>
                </div>
                <span>3 spots</span>
            </div>
          </div>
          <div className="template-4">
            <a href="#">
                <div className="start"><p>Start a Project</p></div>
                <div className="end"><RiArrowRightUpLine /></div>
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Studio) ;
