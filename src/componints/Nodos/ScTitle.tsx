import "../css/studio.scss"
import type { Shopping } from "../typescript/type"
function ScTitle({data, title, projects,}: Shopping) {
  return (
    <div className="title">
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
