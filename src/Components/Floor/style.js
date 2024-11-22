import styled from "styled-components";

export const StyledSelect = styled.div`

  position: relative;
  width: 100%;
  height: 40px;
  padding: 3px;
  border-radius: 4px;

  select {


    height: 100%;
    font-size: 2rem;
    position: absolute;
    right: 1rem;

    border-radius: 8px;
    border: 2px solid transparent;
    padding-left: 0.4em;
    outline: none;
    overflow: hidden;
    border-radius: 10px;
    transition: all 0.25s;
  }

  select:hover,
  select:focus {
    border: 2px solid ${({ theme }) => theme.COLORS.ORANGE};
    box-shadow: 0px 0px 0px 6px ${({ theme }) => theme.COLORS.ORANGE};
    background-color: white;
  }

`;