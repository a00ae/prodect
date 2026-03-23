import { memo } from "react";
import "./css/ProcessList.scss";

const item = [
  {
    id: 1,
    title: "Immersion",
    desc: "We dive deep into your world, exploring your brand, your market, and your audience until we see what others don’t",
  },
  {
    id: 2,
    title: "Vision Crafting",
    desc: "Together, we define a clear creative and strategic direction that becomes the foundation for every design and campaign",
  },
  {
    id: 3,
    title: "Creative Alchemy",
    desc: "Ideas turn into experiences. We blend bold design, smart marketing, and innovative thinking to craft work that stands apart",
  },
  {
    id: 4,
    title: "Launch with Impact",
    desc: "Every detail matters. We roll out your brand or campaign with precision, ensuring maximum reach and resonance",
  },
];

function ProcessList() {
  return (
    <div className="process-cards">
      {item.map(({ id, desc, title }) => (
        <div key={id} className={`card-item `}>
          <div className="nubber-box">
            <p>0{id}</p>
            <div className="atter">
              {Array.from(new Array(item.length)).map((_, index) => (
                <div key={index} className={`dash renk${id}${index + 1}`}></div>
              ))}
            </div>
          </div>
          <div className="text-box">
            <div className="heading">
              <p>{title}</p>
            </div>
            <div className="descrption">
              <div className="text">
                <p>{desc}</p>
              </div>
              <div className="item">
                <p>0{id}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default memo(ProcessList);
