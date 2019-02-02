import React, { Component } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import HomePageContainer from './containers/HomePageContainer'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    color: ${props => props.theme.mainTextColor};
    font-size: ${props => props.theme.fontSizeGeneral}
  }
`

const theme = {
  generalFont: "'Open Sans', 'sans-serif'",
  headingFont: "'Dosis', 'sans-serif'",

  fontSizeGeneral: '1.4rem',
  fontSizeXS: '1.2rem',
  fontSizeS: '1.3rem',
  fontSizeM: '1.6rem',
  fontSizeL: '1.9rem',
  fontSizeXL: '2rem',

  sizeXS: '1rem',
  sizeS: '1.5rem',
  sizeM: '2rem',
  sizeL: '3rem',
  sizeXL: '5rem',

  mainTextColor: "rgba(74, 73, 73, 1)",
  disabledTextColor: "rgba(74, 73, 73, 0.5)",
  accentPrimaryColor: "rgba(212, 89, 131, 1)",
  dangerColor: "rgba(183, 58, 58, 1)",
  warningColor: "rgba(221, 163, 66, 1)",
  infoColor: "rgba(125, 167, 219, 1)",
  successColor: "rgba(109, 188, 112, 1)",

  boxShadow: "0px 5px 15px rgba(86, 88, 116, .16)",
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <HomePageContainer />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
