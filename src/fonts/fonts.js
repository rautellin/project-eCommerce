import { createGlobalStyle } from 'styled-components'

import Barnett from './barnett.woff'
import Barnett2 from './barnett.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: 'Barnett';
        src: local('Barnett'), local('Barnett'),
        url(${Barnett2}) format('woff2'),
        url(${Barnett}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
