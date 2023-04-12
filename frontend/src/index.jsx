import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './styles/style.scss';
import App from './components/App';

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(<React.StrictMode><App/></React.StrictMode>);
