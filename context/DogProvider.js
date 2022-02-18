import React, { createContext, useContext, useState } from "react";

const DogContext = createContext();
const SetDogContext = createContext();

export function useDog() {
  return useContext(DogContext);
}

export function setDogName() {
  return useContext(SetDogContext);
}

const DogProvider = ({ children }) => {
  const [dog, setDog] = useState("dog 1 ");
  function setDogName(name) {
    name = "MR" + name;
    setDog(name);
  }
  return (
    <SetDogContext.Provider value={setDogName}>
      <DogContext.Provider value={dog}>{children}</DogContext.Provider>
    </SetDogContext.Provider>
  );
};

export default DogProvider;
