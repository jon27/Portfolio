import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';

const jsx = (
    <AppRouter />
);

ReactDOM.render(jsx, document.getElementById('app'));


