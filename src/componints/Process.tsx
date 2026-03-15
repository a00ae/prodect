import { useBoxData } from "./context/BoxProvider"
import Box from "./Nodos/Box"
import "./css/Process.scss"

function Process() {
    const {process} = useBoxData()
  return (
    <div className="process" id="process">
        <Box more={process.more} title={process.title} text={process.text}/>
      
    </div>
  )
}

export default Process
