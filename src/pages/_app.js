import App from "next/app";
import Page from "../components/Page";
import { CheckoutStateProvider } from "../components/LocalState";

class Glamdring extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <CheckoutStateProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </CheckoutStateProvider>
    );
  }
}

export default Glamdring;
