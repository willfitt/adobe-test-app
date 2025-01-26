import { Button, Form, NumberField } from "@adobe/react-spectrum";
import "./AppView.css";
import { useState } from "react";

interface IAppViewProps {
  isDarkMode: boolean;
  setTheme: (arg: boolean) => void;
}

function AppView(props: IAppViewProps) {
  const [numberInputVal, setNumberInputVal] = useState<number | undefined>();
  const [romanNumeralVal, setRomanNumeralVal] = useState<
    string[] | undefined
  >();
  // Boiler plate onSubmit code taken from Adobe React Spectrum docs
  let onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default browser page refresh.
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.currentTarget));
    const integer: Number = Number(data.numberInput);

    // Submit to your backend API...
    fetch(`http://localhost:8080/romannumeral?query=${integer}`)
      .then((response) => response.json())
      .then((data) => setRomanNumeralVal(data.output))
      .catch((error) => console.error("Error fetching data:", error));

  };

  return (
    /* This app is small enough that I feel justified in keeping all the components in the
        App.tsx file. If this task were to have more intricacy in components and logic, I 
        definitely would have split components out as necessary into reusable components to 
        keep everything better organized and readable.
      */
    <div className="App">
      <header className="App-header">Roman numeral converter</header>
      <Form
        validationBehavior="native"
        maxWidth="size-3000"
        onSubmit={onSubmit}
      >
        <NumberField
          value={numberInputVal}
          name="numberInput"
          label="Enter a number"
          onChange={setNumberInputVal}
          validate={(value) =>
            value < 1 || value > 3999
              ? "Sorry, the input must be between 1-3,999."
              : null
          }
        />
        <div className="Submit-button-container">
          <Button type="submit" variant="primary">
            Convert to roman numeral
          </Button>
        </div>
      </Form>
      {romanNumeralVal && <div>Roman numeral: {romanNumeralVal}</div>}
      <div className="Theme-button-container">
        <Button
          onPress={() => props.setTheme(!props.isDarkMode)}
          variant="secondary"
        >
          {props.isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>
    </div>
  );
}

export default AppView;
