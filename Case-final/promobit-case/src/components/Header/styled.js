import styled from "styled-components";
import { mainColor } from "../../constants/colors";
import { goToPopularMovieInDay } from "../../routes/coordinator";

export const HeaderContainer = styled.header`
    height: 9vh;
    background: ${mainColor};
    display: flex;
    align-items: center;
    justify-content: left;
    color: white;
    position: relative;
    margin: 0;
    padding: 0;

    h3 {
        color: white;
        margin-left: 14px;

    }
`


export const CardContainer = styled.section`

    border-radius: 1px solid black;
    height: 14vh;
    width: 7vh;
`


