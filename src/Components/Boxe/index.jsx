import { StyledWrapper } from "./style.js";

export const Boxe = ({title}) => {
  return (
    <StyledWrapper>
      <button>{ title }</button>
    </StyledWrapper>
  );
}