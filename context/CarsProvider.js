import { createContext, useContext, useState } from "react"

const CarsContext = createContext();
const SetCarsContext = createContext();


export function useCars(){
    return useContext(CarsContext)
}


export function setCars (){
    return useContext(SetCarsContext)
}

const CarsProvider = ({children}) =>{
    function setAllCars (cars){
    setCars(cars)}

    const [cars,setCars]=useState([]);
return (
  <SetCarsContext.Provider value={setAllCars}>
    <CarsContext.Provider value={cars}>{children}</CarsContext.Provider>
  </SetCarsContext.Provider>
);
}
export default CarsProvider
