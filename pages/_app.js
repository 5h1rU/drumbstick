import React from 'react';
import App, { Container } from 'next/app';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';

import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';

import createstore from '../store/configureStore';

const Wrapper = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>{children}</Layout>
);

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Wrapper>
            <MainHeader />
            <Component {...pageProps} />
            <MainFooter />
          </Wrapper>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createstore)(withReduxSaga({ async: true })(MyApp));
