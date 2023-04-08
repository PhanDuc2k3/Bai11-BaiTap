import React , { useState } from 'react';
import styles from './styles.module.css';

function App() {
  const [time, setTime] = useState("day");

  const handleNightClick = () => {
    setTime("night");
  };

  const handleDayClick = () => {
    setTime("day");
  };
  return (
    <div>
      Bai Tap 1
    <div className={styles.container}>
      <div className={styles.sidebar}>Sidebar</div>
      <div className={styles.content}>Content</div>
    </div>
      Bai Tap 2
      <div>
      <button onClick={handleNightClick}>Night</button>
      <button onClick={handleDayClick}>Day</button>
      <div
        style={{
          width: 200,
          height: 80,
          backgroundColor: time === "day" ? "blue" : "black"
        }}
      ></div>
    </div>
    </div>
  );
}

export default App;