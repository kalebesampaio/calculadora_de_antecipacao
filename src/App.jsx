import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { InfoCard } from "./components/InfoCard";
import { List } from "./components/List";

function App() {
  const [num, setNum] = useState(null);

  useEffect(() => {}, [num]);

  return (
    <div className="App">
      <Form setNum={setNum}></Form>
      <List>
        {num ? (
          <>
            <InfoCard value={num["1"] / 100}></InfoCard>
            <InfoCard value={num["15"] / 100}></InfoCard>
            <InfoCard value={num["30"] / 100}></InfoCard>
            <InfoCard value={num["90"] / 100}></InfoCard>
          </>
        ) : (
          <li></li>
        )}
      </List>
    </div>
  );
}

export default App;
