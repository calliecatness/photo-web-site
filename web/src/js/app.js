import React from 'react';
import ReactDOM from 'react-dom';

import { appStore } from './app-store';
import { HomeContainer } from './components/home-container';

import '../css/site.scss';

document.addEventListener('DOMContentLoaded', function() {

    ReactDOM.render(
        <HomeContainer store={appStore} />,
        document.querySelector('main')
    );

});