import { StyledBold, StyledParagraph } from "../../styles/typography";
import { StyleInfoCard } from "./styles";

export const InfoCard = ({ value, keys }) => {
  return (
    <StyleInfoCard>
      <StyledParagraph>
        {keys === 1 ? "Amanhã:" : `Em ${keys} dias:`}

        <StyledBold>
          {" "}
          {value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </StyledBold>
      </StyledParagraph>
    </StyleInfoCard>
  );
};
