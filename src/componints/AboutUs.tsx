import { RiArrowRightUpLine } from "@remixicon/react";
import "./css/About-us.css";
import { useFlexScroll } from "./Hooks/useFlexScroll";

const animations = [
  // تحريك الشريط الأول من اليسار لليمين (أو العكس حسب القيم)
  { selector: ".sticky-wrapper", startX: -278, endX: 100, growIntensity: 1 },
  // تحريك الشريط الثاني باتجاه معاكس أو سرعة مختلفة
  {
    selector: ".sticky-wrapper.tow",
    startX: -100,
    endX: -400,
    growIntensity: 1,
  },
];

function AboutUs() {
  const containerRef = useFlexScroll(animations);

  return (
    <div id="about-us" className="about-us">
      <div className="container">
        <div className="box">
          <div className="title">
            <div>
              <p>01</p>
              <p>|</p>
              <p>About us</p>
            </div>
            <p>© 2025</p>
          </div>
          <h2>
            Averra is a digital agency that help brands stand out and scale with
            bold design and smart marketing.
          </h2>
          <p>
            We blend bold creativity with strategic insight to help brands lead
            in the digital age.
          </p>
          <div className="btn">
            <div>
              <a href="#">
                <p>More about us</p> <RiArrowRightUpLine />
              </a>
              <div className="btn-border"></div>
            </div>
          </div>
        </div>

        <div
          className="tamblate"
          data-framer-name="Stats"
          // style="opacity: 1; transform: none"
        >
          <div className="container">
            <div
              className="sticky-wrapper"
              data-framer-name="Phone - left"
              // style="height: 100%; width: 100%; border-radius: 16px; opacity: 1"
            >
              <div
                className="framer-f127d1"
                data-framer-name="Content"
                // style="opacity: 1; transform: none"
              >
                <div
                  className="framer-tsmrpr"
                  data-border="true"
                  data-framer-name="Stat"
                  // style="
                  //   --border-bottom-width: 3px;
                  //   --border-color: var(
                  //     --token-8213703f-0154-4726-a8ff-dc99c77ebe21,
                  //     rgb(255, 255, 255)
                  //   );
                  //   --border-left-width: 3px;
                  //   --border-right-width: 3px;
                  //   --border-style: solid;
                  //   --border-top-width: 3px;
                  //   background-color: var(
                  //     --token-bf60a48c-57c0-434a-89e4-a8cc36c75015,
                  //     rgb(242, 242, 242)
                  //   );
                  //   border-radius: 16px;
                  //   opacity: 1;
                  // "
                >
                  <div className="framer-xqrzn" 
                  // style="opacity: 1"
                  >
                    <div
                      className="framer-1f64jyk"
                      data-framer-component-type="RichTextContainer"
                      // style="
                      // //   --extracted-r6o4lv: var(
                      // //     --token-237fc62b-8c83-4538-99ca-941fa7764f7a,
                      // //     rgb(18, 18, 18)
                      // //   );
                      // //   --framer-link-text-color: rgb(0, 153, 255);
                      // //   --framer-link-text-decoration: underline;
                      // //   transform: none;
                      // //   opacity: 1;
                      // // "
                    >
                      <p
                        className="framer-text framer-styles-preset-46appr"
                        data-styles-preset="j0ckBL3Bo"
                    //     style="
                    //   --framer-text-color: var(
                    //     --extracted-r6o4lv,
                    //     var(
                    //       --token-237fc62b-8c83-4538-99ca-941fa7764f7a,
                    //       rgb(18, 18, 18)
                    //     )
                    //   );
                    // "
                    >
                        12
                      </p>
                    </div>
                    <div
                      className="framer-d3uy5g"
                      data-framer-component-type="RichTextContainer"
                  //     style="
                  //   --extracted-r6o4lv: var(
                  //     --token-de409e7c-7c7d-4852-b3d0-2e0041588e03,
                  //     rgb(252, 64, 64)
                  //   );
                  //   --framer-link-text-color: rgb(0, 153, 255);
                  //   --framer-link-text-decoration: underline;
                  //   transform: none;
                  //   opacity: 1;
                  // "
                  >
                      <p
                        className="framer-text framer-styles-preset-46appr"
                        data-styles-preset="j0ckBL3Bo"
                    //     style="
                    //   --framer-text-color: var(
                    //     --extracted-r6o4lv,
                    //     var(
                    //       --token-de409e7c-7c7d-4852-b3d0-2e0041588e03,
                    //       rgb(252, 64, 64)
                    //     )
                    //   );
                    // "
                    >
                        +
                      </p>
                    </div>
                  </div>
                  <div
                    className="framer-2r28ir"
                    data-framer-component-type="RichTextContainer"
                //     style="
                //   --extracted-r6o4lv: var(
                //     --token-ae54d145-80d7-4b7f-9080-876b9d280322,
                //     rgb(110, 110, 110)
                //   );
                //   --framer-link-text-color: rgb(0, 153, 255);
                //   --framer-link-text-decoration: underline;
                //   transform: none;
                //   opacity: 1;
                // "
                >
                    <p
                      className="framer-text framer-styles-preset-11cigb6"
                      data-styles-preset="GVmk79doE"
                  //     style="
                  //   --framer-text-alignment: left;
                  //   --framer-text-color: var(
                  //     --extracted-r6o4lv,
                  //     var(
                  //       --token-ae54d145-80d7-4b7f-9080-876b9d280322,
                  //       rgb(110, 110, 110)
                  //     )
                  //   );
                  // "
                  >
                      Years of experience
                    </p>
                  </div>
                </div>
                <div
                  className="framer-1jkzm7j"
                  data-framer-name="Frame"
              //     style="
              //   background-color: var(
              //     --token-8213703f-0154-4726-a8ff-dc99c77ebe21,
              //     rgb(255, 255, 255)
              //   );
              //   border-radius: 16px;
              //   opacity: 1;
              // "
              ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

/*

        <div className="tamblate-card" ref={containerRef}>
          <div>

          <div className="sticky-wrapper">
            
            <div className="grid-card card-1"></div>
            <div className="grid-card card-2">
              <div className="content">
                <div className="number">
                  12<span>+</span>
                </div>
                <div className="label">Years of experience</div>
              </div>
            </div>
            <div className="grid-card card-2">
              <div className="content">
                <div className="number">
                  12<span>+</span>
                </div>
                <div className="label">Years of experience</div>
              </div>
            </div>
            <div className="grid-card card-3"></div>
            <div className="grid-card card-4">
              <div className="content">
                95+ <span>Brands</span>
              </div>
            </div>
            <div className="grid-card card-4">
              <div className="content">
                95+ <span>Brands</span>
              </div>
            </div>
            <div className="grid-card card-4">
              <div className="content">
                95+ <span>Brands</span>
              </div>
            </div>
          </div>
          </div>
          <div>

          {/* <div className="sticky-wrapper tow">
            <div className="grid-card card-1"></div>
            <div className="grid-card card-2">
              <div className="content">
                <div className="number">
                  12<span>+</span>
                </div>
                <div className="label">Years of experience</div>
              </div>
            </div>
            <div className="grid-card card-2">
              <div className="content">
                <div className="number">
                  12<span>+</span>
                </div>
                <div className="label">Years of experience</div>
              </div>
            </div>
            <div className="grid-card card-3"></div>
            <div className="grid-card card-4">
              <div className="content">
                95+ <span>Brands</span>
              </div>
            </div>
            <div className="grid-card card-4">
              <div className="content">
                95+ <span>Brands</span>
              </div>
            </div>
            <div className="grid-card card-4">
              <div className="content">
                95+ <span>Brands</span>
              </div>
            </div>
          </div> 
          </div> 
        </div>










*/
