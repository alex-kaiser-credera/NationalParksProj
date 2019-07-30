import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import Home from './Home';
import * as serviceWorker from './serviceWorker';

=======
import CustomerRequest from './CustomerRequest/CustomerRequest';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CustomerRequest />, document.getElementById('root'));
>>>>>>> bb8c39b9a1bd5e212dc824f39ff22d4791b5a76d

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
