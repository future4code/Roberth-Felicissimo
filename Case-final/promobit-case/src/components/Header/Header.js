import React from 'react'
import { goToPopularMovieInDay } from '../../routes/coordinator'
import { CardContainer, HeaderContainer } from "./styled"
import { useHistory } from 'react-router-dom'


const


const Header = () => {
    return (
        <div>
        <HeaderContainer>
            <h3 onClick={goToPopularMovieInDay}>HEADER</h3>
        </HeaderContainer>
        </div>
    )
}

export default Header
