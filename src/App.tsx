import Alert from "./Alert";
import SuccessButton from "./SuccessButton";
function App() {
  return (
    <div>
      <SuccessButton
        color="danger"
        onClick={() => {
          console.log("hello");
        }}
      >
        My Button
      </SuccessButton>
    </div>
  );
}

export default App;
