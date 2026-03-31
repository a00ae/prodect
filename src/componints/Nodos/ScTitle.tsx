import type { BoxTitle } from "../opp/opp";
function ScTitle({ id, label, subText }: BoxTitle) {
  return (
    <div className="title">
      <div>
        <p>{id}</p>
        <p>|</p>
        <p>{label}</p>
      </div>
      {subText && <p>{subText}</p>}
    </div>
  );
}

export default ScTitle;
