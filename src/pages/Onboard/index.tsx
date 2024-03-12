import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Onboard from './Onboard';
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('app-container') as HTMLElement
);
root.render(
    <Onboard />
);

reportWebVitals();
