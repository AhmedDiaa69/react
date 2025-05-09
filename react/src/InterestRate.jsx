import { useState } from "react";

function InterestRate() {
  let [interestRate, setInterestRate] = useState();
  let [moneyBerMonth, setMoneyBerMonth] = useState();
  let [years, setYears] = useState();
  let [moneyInEnd, setMoneyInEnd] = useState();

  const changeInterestRate = (e) => {
    let newRate = e.target.value;
    setInterestRate(newRate);
    setMoneyInEnd(Calculate(newRate, moneyBerMonth, years));
  };

  const changeMoneyBerMonth = (e) => {
    let newMBM = e.target.value;
    setMoneyBerMonth(newMBM);
    setMoneyInEnd(Calculate(interestRate, newMBM, years));
  };

  const changeYears = (e) => {
    let newYears = e.target.value;
    setYears(newYears);
    setMoneyInEnd(Calculate(interestRate, moneyBerMonth, newYears));
  };

  function Calculate(rate, MBM, years) {
    let moneyBerYear = 0;
    for (let i = 0; i < years; i++) {
      moneyBerYear += MBM * 12;
      moneyInEnd = moneyBerYear * (1 + rate / 100);
    }
    return moneyInEnd;
  }

  return (
    <div className="divContainer">
      <h1>Interest rate Calculator</h1>
      <div className="inputs">
        Interest Rate:{" "}
        <input
          value={interestRate}
          type="number"
          min={0}
          placeholder="0"
          onChange={changeInterestRate}
        />
        Added money ber month:{" "}
        <input
          value={moneyBerMonth}
          type="number"
          min={0}
          placeholder="0"
          onChange={changeMoneyBerMonth}
        />
        Years:{" "}
        <input
          value={years}
          type="number"
          min={0}
          placeholder="0"
          onChange={changeYears}
        />
      </div>
      <p>The money in the last year will be:</p>
      <p style={{ color: "aqua" }}>{moneyInEnd ? moneyInEnd : 0}</p>
    </div>
  );
}

export default InterestRate;
