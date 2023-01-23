import { useEffect, useState } from "react";
import { DivApp } from "./AppStyle";
import { Form } from "./components/Form";
import { InfoCard } from "./components/InfoCard";
import { List } from "./components/List";

function App() {
  const [num, setNum] = useState(null);

  useEffect(() => {}, [num]);

  return (
    <DivApp className="App">
      <Form setNum={setNum}></Form>
      <List>
        {num ? (
          <>
            <InfoCard value={num["1"] / 100} keys={1}></InfoCard>
            <InfoCard value={num["15"] / 100} keys={15}></InfoCard>
            <InfoCard value={num["30"] / 100} keys={30}></InfoCard>
            <InfoCard value={num["90"] / 100} keys={90}></InfoCard>
          </>
        ) : (
          <>
            <InfoCard value={0} keys={1}></InfoCard>
            <InfoCard value={0} keys={15}></InfoCard>
            <InfoCard value={0} keys={30}></InfoCard>
            <InfoCard value={0} keys={90}></InfoCard>
          </>
        )}
      </List>
    </DivApp>
  );
}

export default App;
