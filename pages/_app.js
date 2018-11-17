import React from "react";
import App, { Container } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Router, { withRouter } from "next/router";
import NProgress from "nprogress";
NProgress.configure({
  showSpinner: false,
  minimum: 0.1,
  trickleRate: 0.02,
  trickleSpeed: 800
});
// NProgress.configure({ minimum: 0.1 });
// NProgress.configure({ trickleRate: 0.02, trickleSpeed: 800 });
Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout">
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  }
}

export default withRouter(
  class MyApp extends App {
    render() {
      const { Component, pageProps } = this.props;
      return (
        <Container>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      );
    }
  }
);
