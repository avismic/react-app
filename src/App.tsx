import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Fransico", "Delhi", "Tokyo", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="Cities"></ListGroup>
    </div>
  );
}

export default App;
