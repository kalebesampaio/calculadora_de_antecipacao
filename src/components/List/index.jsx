import { StyledTitle2 } from "../../styles/typography";
import { StyledList } from "./styles";

export const List = ({ children }) => {
  return (
    <StyledList>
      <StyledTitle2>Você Recebera</StyledTitle2>
      {children}
    </StyledList>
  );
};
