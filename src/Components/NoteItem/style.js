import styled from "styled-components"

export const Container = styled.div`

    display: flex;
    align-items: center;
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    border:  ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
    margin-bottom: 0.8rem;
    border-radius: 1rem;
    padding-right: 1.6rem;

    > button {
        border: none;
        background: none;

        svg {
            color:${({ theme, isNew }) => isNew ? `${theme.COLORS.ORANGE}` : " #FF002E"};
            font-size: 2.2rem;
        }
    }

    > input {
        height: 5.6rem;
        width: 100%;
        padding: 1.2rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: none;
        &::placeholder {
            color:${({ theme }) => theme.COLORS.GRAY_300};
        }
    } 

    
 
`