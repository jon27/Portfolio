import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './components/LoadingPage';
import { Button, Card, Row, Col } from 'react-materialize';
import DashboardPage from './components/DashboardPage';



const jsx = (
    <AppRouter />
);


ReactDOM.render(<AppRouter />, document.getElementById('app'));


