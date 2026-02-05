import { RiShoppingBagFill } from '@remixicon/react'

function Shoppingcart() {
  return (
    <div style={{
        width: "100%",
        height: "60px",
        boxShadow: "",
        borderBottom: "1px solid #1565c023",
        position: "relative",
    }}>
        <button style={{
            position: "absolute",
            right: 300,
            backgroundColor: "#1565c023"
        }}>
      <RiShoppingBagFill color='#1565c0'/>
        </button>
    </div>
  )
}

export default Shoppingcart
