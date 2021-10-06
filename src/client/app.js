import React from 'react'
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import {Home} from "./pages/home";

export const App = () => {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}>
                      <Home/>
                    </Route>
                    <Route path={"/home"}>
                        <h1>Hey dude</h1>
                    </Route>
                    <Route>page not found</Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}