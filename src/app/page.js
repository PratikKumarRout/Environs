'use client'

import { useState } from "react";
import Header from "./components/header";
import Splash from "./components/splash";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashAnimationEnd = () => {
    setShowSplash(false);
  };

  return <>
    {showSplash ? <Splash onAnimationEnd={handleSplashAnimationEnd} /> : <Header />};
  </>;
}