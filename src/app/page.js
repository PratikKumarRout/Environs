import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
  return <>
    <Header location={"E N V I R O N S"} />
    <Hero temp={24} />
  </>;
}