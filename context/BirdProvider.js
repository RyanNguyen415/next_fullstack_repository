import { createContext, useContext, useState } from "react";

const BirdContext = createContext();

export function useBird() {
  return useContext(BirdContext);
}

const BirdProvider = ({ children }) => {
  const [bird, setBird] = useState("bird");
  return <BirdContext.Provider value={bird}>{children}</BirdContext.Provider>;
};
export default BirdProvider;
