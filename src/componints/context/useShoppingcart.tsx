/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, type ReactNode } from "react";
interface Props{
    chaildren: ReactNode
}

const Shoppingcart = createContext<[]>([]);

const Shopping = ({chaildren}: Props) => {

    return (
        <Shoppingcart.Provider value={}>
            {chaildren}
        </Shoppingcart.Provider>
    )
}
export default Shopping;

export const useShoppingcart = () => useContext(Shoppingcart)