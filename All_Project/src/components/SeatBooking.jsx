import React, { useState } from "react";
import styles from "./SeatBooking.module.css";

function SeatBooking() {
  const [selected, setSelected] = useState([]);

  const price = 14.99;
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const takenSeats = ["A3", "B5", "C1", "D6", "F8"];

  function handleClick(seatId) {
    if (takenSeats.includes(seatId)) return;

    if (selected.includes(seatId)) {
      setSelected(selected.filter((seat) => seat !== seatId));
    } else {
      if (selected.length < 4) {
        setSelected([...selected, seatId]);
      } else {
        alert("Only 4 seats allowed");
      }
    }
  }

  return (
    <div className={styles.container}>
      <h2>Choose Your Seats</h2>
      <p style={{ color: "rgba(200,200,200,0.7)" }}>
        Select up to 4 seats • ${price} each
      </p>

      <div className={styles.screen}>SCREEN</div>

      {rows.map((row) => (
        <div key={row} className={styles.row}>
          {cols.map((col) => {
            const seatId = row + col;

            let seatClass = styles.seat;

            if (takenSeats.includes(seatId)) {
              seatClass += " " + styles.taken;
            } else if (selected.includes(seatId)) {
              seatClass += " " + styles.selected;
            }

            return (
              <div
                key={seatId}
                className={seatClass}
                onClick={() => handleClick(seatId)}
              >
                {selected.includes(seatId) && "✓"}
              </div>
            );
          })}
        </div>
      ))}
      <div className={styles.legend}>
        <div>
          <span className={`${styles.box} ${styles.available}`}></span>
          Available
        </div>
        <div>
          <span className={`${styles.box} ${styles.selected}`}></span>
          Selected
        </div>
        <div>
          <span className={`${styles.box} ${styles.taken}`}></span>
          Taken
        </div>
      </div>

      <div className={styles.bottom}>
        {selected.length === 0
          ? "No seats selected"
          : `Total: $${(selected.length * price).toFixed(2)}`}
      </div>
    </div>
  );
}

export default SeatBooking;
