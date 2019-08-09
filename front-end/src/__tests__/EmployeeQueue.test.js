import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeQueue from '../pages/EmployeeQueue';
// import { isTSAnyKeyword } from '@babel/types';

it("Queue renders without crashing", () => {
    const root = document.createElement("root");
    ReactDOM.render(<EmployeeQueue />, root);
    ReactDOM.unmountComponentAtNode(root); 
    
});