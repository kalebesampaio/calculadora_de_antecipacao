import { useEffect, useState } from "react";
import { DivApp } from "./AppStyle";
import { Form } from "./components/Form";
import { InfoCard } from "./components/InfoCard";
import { List } from "./components/List";
import loading_img from "./img/loading.svg";
import { StyledParagraphError } from "./styles/typography";
function App() {
  const [num, setNum] = useState(null);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {}, [num]);

  return (
    <DivApp className="App">
      <Form
        setNum={setNum}
        setLoading={setLoading}
        setApiError={setApiError}
      ></Form>
      <List>
        {loading ? (
          <img id="loading" src={loading_img} alt="Loading" />
        ) : num ? (
          <>
            <InfoCard value={num["1"] / 100} keys={1}></InfoCard>
            <InfoCard value={num["15"] / 100} keys={15}></InfoCard>
            <InfoCard value={num["30"] / 100} keys={30}></InfoCard>
            <InfoCard value={num["90"] / 100} keys={90}></InfoCard>
          </>
        ) : apiError ? (
          <div>
            <StyledParagraphError>
              Servidor não respondendo
            </StyledParagraphError>
          </div>
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
