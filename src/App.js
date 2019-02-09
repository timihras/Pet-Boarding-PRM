import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { withAuthentication } from './utils/Session';

import AppRoutes from './containers/AppRoutes';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: ${props => props.theme.mainTextColor};
    font-family: ${props => props.theme.generalFont};
    font-size: ${props => props.theme.fontSizeGeneral};
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none; 
  }
  .active{
    color:red;
  }

  .material-icons {
    width: 24px;
  }
`

const theme = {
  generalFont: "'Open Sans', 'sans-serif'",
  headingFont: "'Dosis', 'sans-serif'",

  fontSizeGeneral: '1.4rem',
  fontSizeXS: '1.2rem',
  fontSizeS: '1.3rem',
  fontSizeM: '1.6rem',
  fontSizeXM: '1.8rem',
  fontSizeL: '1.9rem',
  fontSizeXL: '2rem',

  sizeXS: '1rem',
  sizeS: '1.5rem',
  sizeM: '2rem',
  sizeL: '3rem',
  sizeXL: '5rem',

  darkBgColor: "rgba(97, 83, 117, 1)",
  lightBgColor: "rgba(241, 241, 241, 1)",
  mainTextColor: "rgba(74, 73, 73, 1)",
  disabledTextColor: "rgba(74, 73, 73, 0.5)",
  accentPrimaryColor: "rgba(212, 89, 131, 1)",
  dangerColor: "rgba(183, 58, 58, 1)",
  warningColor: "rgba(221, 163, 66, 1)",
  infoColor: "rgba(125, 167, 219, 1)",
  successColor: "rgba(109, 188, 112, 1)",

  boxShadow: "0px 5px 15px rgba(86, 88, 116, .16)",
  borderRadius: '5px',
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <AppRoutes />
      </>
    </ThemeProvider>
  );
}

export default withAuthentication(App);
