import { Button, Spinner } from "react-bootstrap";
import "./App.css";
import CradGroup2 from "./components/CradGroup2/CradGroup2";

function App() {
  return (
    <div className="App">
      <h1>Using React Bootstrap</h1>
      <Button variant="danger">My Button</Button>
      <br />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <CradGroup2></CradGroup2>
    </div>
  );
}

export default App;
