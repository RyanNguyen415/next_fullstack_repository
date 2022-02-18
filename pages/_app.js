import BirdProvider from "../context/BirdProvider";
import "../styles/globals.css";
import DogProvider from "../context/DogProvider";
import CarsProvider from "../context/CarsProvider";

function MyApp({ Component, pageProps }) {
  return (
    <CarsProvider>
      <BirdProvider>
        <DogProvider>
          <Component {...pageProps} />
        </DogProvider>
      </BirdProvider>
    </CarsProvider>
  );

}

export default MyApp;
