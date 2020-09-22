import App from "next/app";
import { Layout } from "../components/_App/Layout";

class MyApp extends App {
  render(): JSX.Element {
    const { Component } = this.props;
    return (
      <Layout>
        <Component />;
      </Layout>
    );
  }
}

export default MyApp;
