import img from "../public/investment-calculator-logo.png";
import UserInput from "./components/userInput.jsx";
import Table from "./components/table.jsx";
import { useState } from "react";
function App() {
  const [data, setData] = useState([15000, 1200, 6, 10]);
  function handleChange(event, index) {
    setData((a) => {
      const newData = [...a];
      newData[index] = +event.target.value;
      return newData;
    });
  }
  function check() {
    for (let i = 0; i < data.length; i++) {
      if (data[i] <= 0) {
        alert("Please enter a positive number");
        return false;
      }
    }
    return true;
  }
  const checked = check();

  return (
    <>
      <div id="header" className="center">
        <img src={img} alt="logo" />
        <h1>React Investment Calculator</h1>
      </div>
      <section id="user-input">
        <div className="input-group">
          <div>
            <UserInput
              label="initial-investment"
              value={checked && data[0]}
              onChange={(event) => {
                handleChange(event, 0);
              }}
            />
            <UserInput
              label="annual-investment"
              value={checked && data[1]}
              onChange={(event) => handleChange(event, 1)}
            />
          </div>
          <div>
            <UserInput
              label="expected-return"
              value={checked && data[2]}
              onChange={(event) => handleChange(event, 2)}
            />
            <UserInput
              label="duration"
              value={checked && data[3]}
              onChange={(event) => handleChange(event, 3)}
            />
          </div>
        </div>
      </section>
      {checked && <Table data={data} />}
    </>
  );
}

export default App;
