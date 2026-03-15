import { useBoxData } from "./context/BoxProvider";
import Box from "./Nodos/Box";
import "./css/Process.scss";
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

function Process() {
  const { process } = useBoxData();
  return (
    <div className="process" id="process">
      <div className="container">
        <Box more={process.more} title={process.title} text={process.text} />

        <div className="card">
          {item.map(({ id, desc, title }) => (
            <div key={id} className="card-item">
              <div className="nubber-box">
                <p>(0{id})</p>
                <div className="dash"></div>
              </div>
              <div className="text-box">
                <div className="heading">
                  <p>{title}</p>
                </div>
                <div className="descrption">
                  <p>{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Process;
