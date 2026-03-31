import { memo } from "react";
import { faqs } from "./TypescriptScss/css";
import { useBoxData } from "./context/BoxProvider";
import Box from "./Nodos/Box";




const FAQs = () => {
  const {} = useBoxData()
  return (
    <div style={faqs}>
        <Box/>

    </div>
  )
}

export default memo(FAQs);