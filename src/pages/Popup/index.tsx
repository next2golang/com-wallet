import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import Popup from './Popup';
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('app-container') as HTMLElement
);
root.render(
    <Popup />
);

reportWebVitals();
