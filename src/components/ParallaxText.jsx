import PropTypes from "prop-types";
import { Parallax } from "react-scroll-parallax";

export default function ParallaxText({ children }) {
  return (
    <Parallax opacity={[0.8, 1]} scale={[0.75, 2]} easing="easeIn">
      {children}
    </Parallax>
  );
}

ParallaxText.propTypes = {
  children: PropTypes.node,
};
