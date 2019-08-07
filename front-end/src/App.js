import React from 'react';
import Home from "./pages/Home";
import CustomerRequest from "./pages/CustomerRequest";
import EmployeeQueue from "./pages/EmployeeQueue";
// import SignIn from './SignIn';
import RequestInformation from "./pages/RequestInformation";
import { BrowserRouter, Route } from 'react-router-dom';
import Login from "./SignIn";
import './App.css';

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
      <BrowserRouter>

        <Route exact path="/" component={Home} />
        <Route exact path="/visit_request" component={CustomerRequest} />
<<<<<<< HEAD
        <Route exact path="/login" component={Login} />
        <Route exact path="/employee_queue" component={EmployeeQueue} />
=======
        <Route exact path="/login" component={(props) => <Login {...props} callBackFromApp={callBackFromApp} />} />
        <Route exact path="/employee_queue" component={(props) => <EmployeeQueue {...props} parkLocation={parkLocation} />} />
>>>>>>> d5a804e4a66099e5b3f5b3771c458c9933e61286
        <Route exact path="/request_information" component={RequestInformation} />

      </BrowserRouter>
    </div>
  );
}

export default App;