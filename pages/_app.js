import BirdProvider from "../context/BirdProvider";
import "../styles/globals.css";
import DogProvider from "../context/DogProvider";

function MyApp({ Component, pageProps }) {
  return (
    <BirdProvider>
      <DogProvider>
        <Component {...pageProps} />
      </DogProvider>
    </BirdProvider>
  );

}

export default MyApp;
