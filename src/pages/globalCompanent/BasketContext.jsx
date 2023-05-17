import { createContext, useContext, useEffect, useState } from "react"


const BasketContext = createContext()

export const BasketContextProvider = ({children}) => {
    const[favorites, setFavorites] = useState([])
    useEffect(()=>{
        if(localStorage.getItem("favorites")){
            setFavorites(JSON.parse(localStorage.getItem("favorites")))
        }else{
            localStorage.setItem("favorites",JSON.stringify([]))
        }
    },[])
  return (
    <BasketContext.Provider value={[favorites, setFavorites]}>
        {children}
    </BasketContext.Provider>
  )
}

export const useBasketContext = ()=> useContext(BasketContext)