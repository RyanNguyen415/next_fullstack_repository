import { useBird } from "../context/BirdProvider";
import { setDogName, useDog } from "../context/DogProvider";
import Cars from "./components/Cars";

const cars = () => {
  const dog = useDog();
  const bird = useBird();
  const setDog = setDogName();
  return (
    <div>
      <Cars />
      {dog}
      {bird}
      <p></p>
      <button onClick={() => setDog('jiggy')}>set dog</button>
    </div>
  );
};
export default cars;
