import { RiPlayCircleFill } from "@remixicon/react";
import { memo, useRef } from "react";
import Rate from "./Nodos/Rate";
import Btn from "./Nodos/Btn";
import { useScrollAnimation } from "./Hooks/useScrollAnimation";

function Studio() {
  console.log("Studio");
  const ref = useRef<HTMLDivElement>(null!);
  useScrollAnimation(ref, {selector: ".studio"});
  return (
    <div ref={ref} id="studio" className="studio">
      <div className="container">
        <div className="text-box">
          <h1>Averra — Studio®</h1>
          <div>
            <p>
              We create timeless design and strategic marketing that
              <span>make brands impossible to ignore.</span>
            </p>
          </div>
        </div>

        <div className="image">
          <div className="video">
            <video src={`${import.meta.env.BASE_URL}avtar-video.mp4`}></video>
            <RiPlayCircleFill />
          </div>
          <div className="box">
            <div className="template-1">
              <span>© 2017 - 25</span>
              <p>Based in Germany</p>
            </div>
            <div className="template-2">
              <div>
                <p>Branding</p>
                <div className="dash"></div>
              </div>
              <div>
                <p>Digital design</p>
                <div className="dash"></div>
              </div>
              <div>
                <p>Marketing strategy</p>
                <div className="dash"></div>
              </div>
              <div>
                <p>Creative production</p>
                <div className="dash"></div>
              </div>
            </div>
            <div className="template-3">
              <div>
                <Rate
                  rate={
                    <>
                      We’ve helped <span>95+ brands</span> elevate their
                      businesses
                    </>
                  }
                />

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
              <Btn title="Start a Project" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Studio);
