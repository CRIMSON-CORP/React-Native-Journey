import React from "react";
import AppContainer from "./AppContainer";
import Main from "./screens/Main";
export default function App({ children }) {
    return (
        <AppContainer>
            <Main />
        </AppContainer>
    );
}
