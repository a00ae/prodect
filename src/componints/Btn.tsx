import type { Btn } from "../type/type"


function Btn({onAddProdect}: Btn) {
  return <button onClick={onAddProdect} style={{width: "100%", backgroundColor: "#1565c0"}} type='button'>Add Card</button>
}

export default Btn
