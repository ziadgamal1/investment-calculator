# React Investment Calculator

## Description

The React Investment Calculator is a simple web application that calculates the growth of an investment over a specified duration. It uses React's state management and JSX to dynamically update and display the investment values based on user input.

## Features

- Calculate investment growth over a specified number of years.
- Input fields for initial investment, annual investment, expected return rate, and duration.
- Dynamic updates of investment values using React state.
- Simple and intuitive user interface.

## Installation

To get started with the React Investment Calculator, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ziadgamal1/react-investment-calculator.git
   cd react-investment-calculator
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

## Usage

1. Open the application in your web browser.
2. Enter the initial investment amount, annual investment amount, expected return rate, and the duration in years.
3. The calculator will dynamically update and display the projected investment values.

## Components

- **App**: The main component that holds the state and renders the header, user input section, and the table.
- **UserInput**: A reusable component for input fields.
- **Table**: A component to display the calculated investment values.

## Code Example

Here's a brief example of how the state is managed and updated in the `App` component:

```jsx
import React, { useState } from "react";
import UserInput from "./UserInput";
import Table from "./Table";
import img from "./logo.png";

function App() {
  const [data, setData] = useState([15000, 1200, 6, 10]);

  function handleChange(index, event) {
    setData((a) => {
      const newData = [...a];
      newData[index] = event.target.value;
      return newData;
    });
  }

  return (
    <>
      <div id="header">
        <img src={img} alt="logo" />
        <h1>React Investment Calculator</h1>
      </div>
      <section id="user-input">
        <div className="input-group">
          <div>
            <UserInput
              label="initial-investment"
              value={data[0]}
              onChange={(event) => handleChange(0, event)}
            />
            <UserInput
              label="annual-investment"
              value={data[1]}
              onChange={(event) => handleChange(1, event)}
            />
          </div>
          <div>
            <UserInput
              label="expected-return"
              value={data[2]}
              onChange={(event) => handleChange(2, event)}
            />
            <UserInput
              label="duration"
              value={data[3]}
              onChange={(event) => handleChange(3, event)}
            />
          </div>
        </div>
      </section>
      <Table />
    </>
  );
}

export default App;
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- React documentation: [React](https://reactjs.org/docs/getting-started.html)
- Inspiration from various online tutorials and resources.

---

Feel free to customize this README file to better suit your project's specifics. Let me know if you need any more help!
