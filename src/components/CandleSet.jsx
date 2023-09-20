import PropTypes from "prop-types";
import { useState } from "react";
import Candle from "./Candle";

export default function CandleSet({ handleNext }) {
  const [candles, setCandles] = useState([true, true, true]);

  const setLit = (index) => {
    const newCandles = [...candles];
    newCandles[index] = false;
    if (newCandles.every((candle) => !candle)) handleNext();
    setCandles(newCandles);
  };

  return (
    <div className="splash">
      <h1>Happy birthday, Mom!</h1>
      <div className="candle-container">
        {candles.map((lit, index) => (
          <Candle key={index} lit={lit} setLit={() => setLit(index)} />
        ))}
      </div>
      <h2>Make a wish and blow out your candles.</h2>
    </div>
  );
}

CandleSet.propTypes = {
  handleNext: PropTypes.func,
};
