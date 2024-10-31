import styled from "styled-components";


export const StyledWrapper = styled.div`
button {
  font-size: 2.5rem;
  background-color: ${({ theme }) => theme.COLORS.WHITE1};
  color: ${({ theme }) => theme.COLORS.BLUE2};
  border: none;
  cursor: pointer;
  border-radius: 8px;
  width: 300px;
  height: 160px;
  font-weight: 400;
  transition: 0.27s;
}

button:hover {
  background-color: ${({ theme }) => theme.COLORS.BLUE4};
  box-shadow: 0 0 0 5px #3b83f65f;
  color: ${({ theme }) => theme.COLORS.WHITE1};
}`;
