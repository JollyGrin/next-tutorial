import Link from "next/link";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import { Component } from "react";
import Error from "./_error";

export default class About extends Component {
  static async getInitialProps() {
    // fetch the data
    const res = await fetch("https://api.github.com/users/jollygrin");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();

    // return the result under this.props.user & this.props.statusCode
    return { user: data, statusCode };
  }

  render() {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="About">
        <p>{user.login}</p>

        <Link href="/">
          <a>Go to home</a>
        </Link>
        <p>This is following a Next Tutorial</p>
        <img src={user.avatar_url} alt="ME" height="200px" />
      </Layout>
    );
  }
}
