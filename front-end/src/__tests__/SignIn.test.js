import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../SignIn';

it("Login page renders without crashing", () => {
    const root = document.createElement("root");
    ReactDOM.render(<Login />, root); 
    ReactDOM.unmountComponentAtNode(root);
});