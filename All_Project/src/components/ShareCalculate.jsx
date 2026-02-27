import React, { useState } from "react";
import styles from "./ShareCalculate.module.css";

function ShareCalculate() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [person, setPerson] = useState(1);
  const [roundUp, setRoundUp] = useState(false);

  const [tipAmount, setTipAmount] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [perPerson, setPerPerson] = useState(0);

  function calculate(newBill, newTip, newPerson, newRound) {
    const billValue = Number(newBill);
    const tipValue = (billValue * newTip) / 100;
    const totalValue = billValue + tipValue;

    let perPersonValue = totalValue / newPerson;

    if (newRound) {
      perPersonValue = Math.ceil(perPersonValue);
    }

    setTipAmount(tipValue.toFixed(2));
    setTotalBill(totalValue.toFixed(2));
    setPerPerson(perPersonValue.toFixed(2));
  }

  function handleBill(e) {
    const value = e.target.value;
    setBill(value);
    calculate(value, tip, person, roundUp);
  }

  function handleTip(value) {
    setTip(value);
    calculate(bill, value, person, roundUp);
  }

  function handleCustomTip(e) {
    const value = Number(e.target.value);
    setTip(value);
    calculate(bill, value, person, roundUp);
  }

  function increasePerson() {
    const newPerson = person + 1;
    setPerson(newPerson);
    calculate(bill, tip, newPerson, roundUp);
  }

  function decreasePerson() {
    if (person > 1) {
      const newPerson = person - 1;
      setPerson(newPerson);
      calculate(bill, tip, newPerson, roundUp);
    }
  }

  function handleRound() {
    const newRound = !roundUp;
    setRoundUp(newRound);
    calculate(bill, tip, person, newRound);
  }

  return (
    <div className={styles.container}>
      <h2>Tip Calculator</h2>

      <label>BILL AMOUNT</label>
      <input
        type="number"
        placeholder="$ 0.00"
        value={bill}
        onChange={handleBill}
        className={styles.input}
      />

      <label>TIP %</label>
      <div className={styles.tipButtons}>
        {[10, 15, 18, 20, 25].map((value) => (
          <button
            key={value}
            className={`${styles.button} ${tip === value ? styles.active : ""}`}
            onClick={() => handleTip(value)}
          >
            {value}%
          </button>
        ))}
        <input
          type="number"
          placeholder="Custom"
          className={styles.custom}
          onChange={handleCustomTip}
        />
      </div>

      <label>SPLIT BETWEEN</label>
      <div className={styles.personBox}>
        <button className={styles.personBtn} onClick={decreasePerson}>
          −
        </button>
        <span>{person} person</span>
        <button className={styles.personBtn} onClick={increasePerson}>
          +
        </button>
      </div>

      <div className={styles.round}>
        <input type="checkbox" checked={roundUp} onChange={handleRound} />
        <span>Round up per person</span>
      </div>

      <div className={styles.result}>
        <div>
          <p>Tip Amount</p>
          <span>${tipAmount}</span>
        </div>
        <div>
          <p>Total Bill</p>
          <span>${totalBill}</span>
        </div>
        <div>
          <p>Tip / person</p>
          <span>${person > 0 ? (tipAmount / person).toFixed(2) : "0.00"}</span>
        </div>
        <hr />
        <div className={styles.final}>
          <p>Each pays</p>
          <h3>${perPerson}</h3>
        </div>
      </div>
    </div>
  );
}

export default ShareCalculate;
