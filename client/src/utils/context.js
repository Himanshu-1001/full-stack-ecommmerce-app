import { createContext, useState } from "react";

export const Context=createContext();

const AppState= (props) =>{
    const [catArr, setCatArr] = useState([]);
    const[products, setProducts]=useState([]);

    return(
        <Context.Provider value={{catArr, setCatArr, products, setProducts}}>
            {props.children}
        </Context.Provider>
    )
}

export default AppState