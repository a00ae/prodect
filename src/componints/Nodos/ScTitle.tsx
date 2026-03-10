import "../css/studio.css"
import type { Shaping } from "../typescript/type"
function ScTitle({data, title, projects, className}: Shaping) {
  return (
    <div className={className}>
            <div>
              <p>{data}</p>
              <p>|</p>
              <p>{title}</p>
            </div>
            <p>{projects}</p>
    </div>
  )
}

export default ScTitle
