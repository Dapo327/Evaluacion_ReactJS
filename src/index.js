import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Modal from "react-modal";
import reportWebVitals from './reportWebVitals';


Modal.setAppElement('#root');

// Or, in your modal component, as a prop
<Modal
  appElement={document.getElementById('root')}
  // other props
>
  {/* // modal content */}
</Modal>



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
