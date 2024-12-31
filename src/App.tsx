import { useState } from "react";
import Alert from "./Alert";
import SuccessButton from "./SuccessButton";
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisibility(false);
          }}
        >
          My Alert
        </Alert>
      )}
      <SuccessButton
        color="danger"
        onClick={() => {
          setAlertVisibility(true);
        }}
      >
        My Button
      </SuccessButton>
    </div>
  );
}

export default App;
