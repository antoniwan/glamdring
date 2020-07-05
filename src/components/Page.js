import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles, { theme } from "../styles/GlobalStyles";
import Meta from "./Meta";
import Header from "./Header";

const StyledPage = styled.div`
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <GlobalStyles />
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
