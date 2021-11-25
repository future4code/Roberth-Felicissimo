import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DetailMovie from '../screens/DetailMovie/DetailMovie'
import HomePage from '../screens/HomePage/HomePage'
import PopularMovieInDay from '../screens/PopularMovieInDay/PopularMovieInDay'


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={HomePage}></Route>
                <Route exact path={"/movie"} component={PopularMovieInDay}></Route>
                <Route exact path={"/movie/:movieId"} component={DetailMovie}></Route>
                <Route>
                    <div>Página não encontrada</div>
                </Route>
                

            </Switch>
            
        </BrowserRouter>

    )
}

export default Router

