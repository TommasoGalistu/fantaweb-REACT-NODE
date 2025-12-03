import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 


import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleCheck, faCircleXmark, faHouseUser,faUser, faClipboardList, faCalendarCheck, faUserTie } from '@fortawesome/free-solid-svg-icons';

library.add(faCircleCheck, faCircleXmark, faHouseUser, faUser,faClipboardList, faCalendarCheck, faUserTie); 

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
