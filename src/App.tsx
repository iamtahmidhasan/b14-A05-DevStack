import { Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";

const dataPromise = async () =>{
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

export default function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Suspense fallback={<p>loading...</p>}>
        <Technologies data={dataPromise()}/>
      </Suspense>
    </>
  )
}
