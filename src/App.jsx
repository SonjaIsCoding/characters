import "./App.css";
import { useState } from "react";
import { Card } from "./Components/Card";

const [items, setItems] = useState();

function App() {
  return (
    <>
      <div className="generators">
        <Card title="Namen" />
        <Card title="Ziele/Wünsche/Bedürfnisse" />
        <Card title="Objekte" />
        <Card title="Orte" />
        <Card title="Hindernisse" />
        <Card title="Berufe" />
        <Card title="Verluste" />
      </div>
    </>
  );
}

export default App;
