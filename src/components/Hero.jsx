import ParallaxText from "./ParallaxText";

export default function Hero() {
  return (
    <div className="hero">
      <ParallaxText>
        <h1>So you&apos;ve turned</h1>
        <div className="hero-text">60</div>
      </ParallaxText>
      <ParallaxText>
        <h1>Yikes.</h1>
      </ParallaxText>
      <ParallaxText>
        <h3>(Just kidding.)</h3>
      </ParallaxText>
      <ParallaxText>
        <h1>We can&apos;t wait to see you and celebrate with you...</h1>
      </ParallaxText>
      <ParallaxText>
        <h1>...but until then, enjoy looking at our beautiful faces!</h1>
      </ParallaxText>
    </div>
  );
}
