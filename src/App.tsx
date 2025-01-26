import { defaultTheme, Provider } from "@adobe/react-spectrum";
import AppView from "./AppView/AppView";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <Provider theme={defaultTheme} colorScheme={isDarkMode ? "dark" : "light"}>
      <AppView isDarkMode={isDarkMode }setTheme={setIsDarkMode} />;
    </Provider>
  );
}

export default App;
