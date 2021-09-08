import React from 'react'
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import {Home} from "./pages/home";

export const App = () => {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path={"/"}>
                      <Home/>
                    </Route>
                    <Route>page not found</Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}