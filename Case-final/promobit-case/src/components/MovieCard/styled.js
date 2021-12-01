import styled from "styled-components";
import { mainColor } from "../../constants/colors";

export const HeaderContainer = styled.header`
    height: 9vh;
    background: ${mainColor};
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    position: relative;
`
export const Logo = styled.button`
    position: absolute;
    left: 14px;
    
`