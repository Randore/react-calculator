import React from 'react';
import './calculator.scss';

const CalculatorApp = () => {
  return(
    <div id="calApp" className='bg-black'>
      <div className="show-cals">
        2x50x3
      </div>
      <div className="cal-results">        
        300
      </div>
      <div className='cal-wrapper' onClick={}>
        <div className="cell">C</div>
        <div className="cell">+/-</div>
        <div className="cell">%</div>
        <div className="cell">/</div>

        <div className="cell">7</div>
        <div className="cell">8</div>
        <div className="cell">9</div>
        <div className="cell">x</div>

        <div className="cell">4</div>
        <div className="cell">5</div>
        <div className="cell">6</div>
        <div className="cell">-</div>

        <div className="cell">1</div>
        <div className="cell">2</div>
        <div className="cell">3</div>
        <div className="cell">+</div>

        <div className="cell">00</div>
        <div className="cell">0</div>
        <div className="cell">.</div>
        <div className="cell equals">=</div>

      </div>
    </div>
  )
}

export default CalculatorApp;
