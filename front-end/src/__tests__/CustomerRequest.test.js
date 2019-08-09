import React from 'react';
import ReactDOM from 'react-dom';
import VisitRequest from '../pages/CustomerRequest';
// import { isTSAnyKeyword } from '@babel/types';

it("Request page renders without crashing", () => {
    const root = document.createElement("root");
    ReactDOM.render(<VisitRequest />, root);
    ReactDOM.unmountComponentAtNode(root); 
});