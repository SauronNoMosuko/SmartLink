import styled from "styled-components"
import { Link } from "react-router-dom"

export const Container = styled.header`

    grid-area: header;
    height: 10.5rem;
    width: 100%;
    border-bottom-width: 0.1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BLUE2};
    display: flex;
    justify-content: space-between;
    padding: 0 8rem;

`

export const Profile = styled(Link)`

    display: flex;
    align-items: center;

    > img {
        width: 7.6rem;
        height: 7.6rem;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 1.6rem;
        line-height: 2.4rem;


        span {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.BLUE1}
        }

        strong {
            font-size: 1.8rem;
            color: ${({ theme }) => theme.COLORS.BLUE1}
        }

    }
`

export const Logout = styled.button`

    border: none;
    background: none;

    > svg {
        color: ${({theme}) => theme.COLORS.WHITE2};
        font-size: 3.6rem;
    }

`