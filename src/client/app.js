import React from 'react'
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

export const App = () => {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path={"/"}>
                        <h1>Hello</h1>
                    </Route>
                    <Route>page not found</Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}