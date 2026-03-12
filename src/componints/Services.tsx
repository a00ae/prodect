import Box from "./Nodos/Box"
import { memo } from "react"




function Services() {
  console.log("Services")
  return (
    <div className="services" id="services">
      <Box  />
      
    </div>
  )
}

export default memo(Services);
