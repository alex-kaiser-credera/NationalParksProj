import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it("App renders without crashing", () => {
    const root = document.createElement("root");
    ReactDOM.render(<App />, root);
    ReactDOM.unmountComponentAtNode(root);
    
});