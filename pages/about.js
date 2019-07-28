import Link from "next/link";
import Layout from "../components/Layout";

const About = () => (
  <Layout title="About">
    <Link href="/">
      <a>Go to home</a>
    </Link>
    <p>This is following a Next Tutorial</p>
    <img src="/static/bitcoin.png" alt="bitcoin" height="200px" />
  </Layout>
);

export default About;
