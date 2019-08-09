import React from 'react';
// import Enzyme, { mount } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import Home from '../pages/Home';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; 

it("Home renders without crashing", () => {
    const root = document.createElement("root");
    ReactDOM.render(<BrowserRouter><Home /></BrowserRouter>, root);
    ReactDOM.unmountComponentAtNode(root);
});

// describe('Test Home page', () => {
//     const wrapper = mount(<Home />)
//     it('Renders home page', () => {
//         mount(<Home />);
//     });

//     it('Contains the class Paper', () => {
//         const el = wrapper.find('div.paper');
//         expect(el).toBeDefined();
//     })
// })