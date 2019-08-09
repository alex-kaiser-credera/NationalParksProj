import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { isTSAnyKeyword } from '@babel/types';

it("App renders without crashing", () => {
    const root = document.createElement("root");
    ReactDOM.render(<App />, root);
    ReactDOM.unmountComponentAtNode(root);
});