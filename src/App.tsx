import React, { useCallback, useState } from "react";
import "./App.css";
import Title from "./components/title";

interface Props {
  onClick: () => void;
}

const MemoizedButton = React.memo(({ onClick }: Props) => {
  console.log("Button is rendered");
  return <button onClick={onClick}>Click Me</button>;
});

function App() {
  console.log("App is rendered");

  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <div className="App">
      <div className="card">
        <Title />
        <MemoizedButton onClick={increment} />
        <p>Count: {count}</p>
      </div>
    </div>
  );
}

export default App;
