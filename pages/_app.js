import React from 'react';
import App, { Container } from 'next/app';
import { Layout } from 'antd';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';

const Wrapper = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>{children}</Layout>
);

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Wrapper>
          <MainHeader />
          <Component {...pageProps} />
          <MainFooter />
        </Wrapper>
      </Container>
    );
  }
}
