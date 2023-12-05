import { useState, useEffect } from "react";
import "./InputCurrency.css";

export function InputCurrency() {
  const [euro, setEuro] = useState(0);
  const [dollar, setDollar] = useState(0);
  const exchangeRate = 1.08;

  const euroToDollar = (e) => {
    setEuro(e.target.value);
    setDollar(e.target.value * exchangeRate);
  };

  const dollarToEuro = (e) => {
    setDollar(e.target.value);
    setEuro(e.target.value / exchangeRate);
  };

  return (
    <div className="inputCurrencyConatiner">
      <div className="inputCurrency">
        <div>
          <label>Euro </label>
          <input value={euro} onChange={euroToDollar} />
        </div>
        <div>=</div>
        <div>
          <label>Dollar </label>
          <input value={dollar} onChange={dollarToEuro} />
        </div>
      </div>
    </div>
  );
}
