import styled from "styled-components"

export const Container = styled.button`

background: none;
color: ${({theme, isActive}) => isActive ? theme.COLORS.WHITE1 : theme.COLORS.GRAY_100};
border: none;
font-size: 1.7rem;
font-weight: 400;

`
