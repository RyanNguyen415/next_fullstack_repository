const pool = require("./api/db/connection");
import { useEffect } from "react";
import { useBird } from "../context/BirdProvider";
import CarsProvider, { setCars, useCars } from "../context/CarsProvider";
import { setDogName, useDog } from "../context/DogProvider";
import Cars from "./components/Cars";

const cars = ({ carss }) => {
  const dog = useDog();
  const bird = useBird();
  const setDog = setDogName();
  const car = useCars(); //carss will now be called called car
  const setAllCars = setCars();

  useEffect(() => {
    setAllCars(carss);
  }, []);

  return (
    <div>
      <Cars />
      {dog}
      {bird}

      <p></p>
      <button onClick={() => setDog("jiggy")}>set dog</button>
      <p>cars from context</p>
      {car.map((car) => (
        <div key={car.id}> {car.make} </div>
      ))}
    </div>
  );
};
export default cars;
export async function getStaticProps() {
  let carss = [];
  try {
    carss = await pool.query("SELECT * FROM cars");
  } catch (error) {
    console.log(error.message);
  }
  return {
    props: { carss: carss.rows },
  };
}
