import { RiShoppingBagFill } from '@remixicon/react'
import { useState } from 'react'
import type { ListDataProps } from '../type/type'

function Shoppingcart({data}: ListDataProps) {

  return (
    <div style={{
        width: "100%",
        height: "60px",
        boxShadow: "",
        borderBottom: "1px solid #1565c023",
        position: "relative",
    }}>
        <div>

        <button  style={{
            position: "absolute",
            right: 300,
            backgroundColor: "#1565c023"
        }}>
      <RiShoppingBagFill color='#1565c0'/>
      
        </button>

        {data.length > 0 && <div style={{
          
        }}>{data.length}</div>}
        
        </div>
    </div>
  )
}

export default Shoppingcart
