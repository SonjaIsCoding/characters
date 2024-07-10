import "./App.css";
import { useState } from "react";
import { Card } from "./Components/Card";

const [items, setItems] = useState();

function generateGoals() {
  let item1 = Goals[Math.floor(Math.random() * Goals.length - 1)];
  return [item1, item2, item3];
}

function generateLocations() {
  let item2 = Locations[Math.floor(Math.random() * Locations.length - 1)];
  return [item1, item2, item3];
}

function generateLosses() {
  let item3 = Losses[Math.floor(Math.random() * Losses.length - 1)];
  return [item1, item2, item3];
}

function generateNames() {
  let item4 = Names[Math.floor(Math.random() * Names.length + 1)];
  return [item1, item2, item3];
}

function generateObjects() {
  let item5 = Objects[Math.floor(Math.random() * Objects.length - 1)];
  return [item1, item2, item3];
}

function generateObstacles() {
  let item6 = Obstacles[Math.floor(Math.random() * Obstacles.length - 1)];
  return [item1, item2, item3];
}

function generateOccupations() {
  let item7 = Occupations[Math.floor(Math.random() * Occupations.length - 1)];
  return [item1, item2, item3];
}

function handleGoals() {
  setItems(generateGoals());
}

function handleLocations() {
  setItems(generateLocations());
}

function handleLosses() {
  setItems(generateLosses());
}

function handleNames() {
  setItems(generateNames());
}

function handleObjects() {
  setItems(generateObjects());
}

function handleObstacles() {
  setItems(generateObstacles());
}

function handleOccupations() {
  setItems(generateOccupations());
}

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
