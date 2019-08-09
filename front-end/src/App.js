import React from 'react';
import Home from "./pages/Home";
import CustomerRequest from "./pages/CustomerRequest";
import EmployeeQueue from "./pages/EmployeeQueue";
// import SignIn from './SignIn';
import RequestInformation from "./pages/RequestInformation";
import { BrowserRouter, Route } from 'react-router-dom';
import Login from "./SignIn";
import './App.css';
import { CookiesProvider } from 'react-cookie';

const App = () => {
  const [parkLocation, setParkLocation] = React.useState()
  
  
  const callBackFromApp = (id) => {
    setParkLocation(id)
    
  }

  return (
    <div style={{
      backgroundImage: `url(https://www.rolwheels.com/public/upload/images/page-background-images/bg-mountain.jpg)`,
      minHeight: '70rem',
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    }}
    >
      <CookiesProvider>
        <BrowserRouter>

          <Route exact path="/" component={Home} />
          <Route exact path="/visit_request" component={CustomerRequest} />
          <Route exact path="/login" component={(props) => <Login {...props} callBackFromApp={callBackFromApp} />} />
          <Route exact path="/employee_queue" component={(props) => <EmployeeQueue {...props} parkLocation={parkLocation} />} />
          <Route exact path="/request_information" component={RequestInformation} />

        </BrowserRouter>
      </CookiesProvider>
    </div>
  );
}

export default App;