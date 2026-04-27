import { memo, useRef } from "react";
import { useScrollAnimation } from "../Hooks/useScrollAnimation";
import ProcessCard from "./ProcessCard";
import { useStaticData } from "../Hooks/useStaticData";

function ProcessList() {
  const ref = useRef<HTMLDivElement>(null!);
  useScrollAnimation(ref, { selector: ".process-card" });
  const { processData } = useStaticData(); // استدعاء البيانات المطلوبة فقط

  return (
    <div className="process-cards" ref={ref}>
      {processData.map((data) => (
        <ProcessCard  key={data.id} {...data} total={processData.length} />
      ))}
    </div>
  );
}

export default memo(ProcessList);
