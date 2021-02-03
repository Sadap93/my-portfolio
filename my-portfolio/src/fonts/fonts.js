import { createGlobalStyle } from 'styled-components';

import AlienWoff from './AlienLeagueBold-1WRj.woff';
import AlienWoff2 from './AlienLeagueBold-1WRj.woff2';
import StellarWoff from './Stellar-Regular.woff';
import StellarWoff2 from './Stellar-Regular.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Alien';
        src: local('Alien'), local('Alien'),
        url(${AlienWoff2}) format('woff2'),
        url(${AlienWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Stellar';
        src: local('Stellar'), local('Stellar'),
        url(${StellarWoff2}) format('woff2'),
        url(${StellarWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;