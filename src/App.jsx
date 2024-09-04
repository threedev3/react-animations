import AnimatedButton from "./AnimatedButton";
import "./App.css";
import BgImage from "./BgImage";
import ChatbotComponent from "./ChatBot";

import CircleAnimation from "./circleAnimation";
import FlipCard from "./FlipCard";
import HeroSection from "./HeroSection";
import HorizontalScroll from "./HorizontalScroll";
import IconCards from "./IconCards";
import MovingObjects from "./MovingObjects";
import TypewriterComp from "./Typewriter";

function App() {
  return (
    <>
      <HeroSection />
      <CircleAnimation />
      <AnimatedButton />
      <IconCards />
      <MovingObjects />
      {/* <HorizontalScroll /> */}
      <BgImage />
      {/* <ChatbotComponent /> */}
      <FlipCard />
      <TypewriterComp />
    </>
  );
}

export default App;
