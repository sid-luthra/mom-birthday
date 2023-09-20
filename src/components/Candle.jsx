import candleTop from "../assets/candle_top.png";
import candleBottom from "../assets/candle_bottom.png";
import PropTypes from "prop-types";

export default function Candle({ lit, setLit }) {
  return (
    <div className="candle">
      <img
        src={candleTop}
        alt=""
        className={`flame ${lit ? "show" : "hide"}`}
        onClick={() => setLit(false)}
        width="100%"
      />
      <img src={candleBottom} alt="" width="100%" />
    </div>
  );
}

Candle.propTypes = {
  lit: PropTypes.bool,
  setLit: PropTypes.func,
};
