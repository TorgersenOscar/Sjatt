import React, {useState} from 'react';
import {useSubmit} from "../lib/useSubmit";
import firebase from "../../server/firebase";
import {useHistory} from "react-router";

export const Home = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const {
        handleSubmit: handleLogin,
        submitting,
        error,
    } = useSubmit(
        async () => {
            await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
                return firebase.auth().signInWithEmailAndPassword(email, password);
            })
        },
        () => history.push("/home"),
    );


    return (
        <>
          <div className={"main"}>
            <h1>Hello Chat</h1>
              <form className={"loginForm"} onSubmit={handleLogin}>
                  <input
                         type="email"
                         value={email}
                         placeholder="user@gmail.com"
                         onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                         type="password"
                         value={password}
                         placeholder="******"
                         onChange={(e) => setPassword(e.target.value)}
                  />
                  <div>
                      <button className="submitBtn" disabled={submitting}>
                          <h5 className={"center"}> Log in</h5>
                      </button>
                  </div>
              </form>
          </div>
        </>
    );
}