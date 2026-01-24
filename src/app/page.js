'use client'

import { useState } from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Splash from "./components/splash";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  setTimeout(() => {
    setShowSplash(false);
  }, 1200);
  return <>
    {showSplash ? <Splash /> : <Header />};
  </>;
}