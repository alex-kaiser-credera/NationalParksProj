import React from 'react';
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import CustomerRequest from "./pages/CustomerRequest";
import EmployeeQueue from "./pages/EmployeeQueue";
import RequestInformation from "./pages/StatusDialog";
import { BrowserRouter, Route } from 'react-router-dom'; 
import Login from "./SignIn";
import './App.css';

const App = () => (
 
    <div style={{
      backgroundImage: `url(https://www.rolwheels.com/public/upload/images/page-background-images/bg-mountain.jpg)`,
      minHeight: '70rem',
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    }}
    >
      <BrowserRouter>
        {/* <Navigation /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/visit_request" component={CustomerRequest} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/employee_queue" component={EmployeeQueue} />
        {/* <Route exact path="/request_information" component={RequestInformation} /> */}
        
      </BrowserRouter>
    </div>


);

export default App;