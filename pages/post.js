import Layout from "../components/Layout";

const Post = ({ url }) => (
  <Layout title={url.query.title}>
    <p>
      Indentation makes your code easier to read and maintain. However,
      sometimes we can lost track of the inner interdependencies of our tags.
      But fear not, since indent-rainbow has come to the rescue. With this
      extension you will keep each of your blocks in check with four indentation
      color levels.
    </p>
  </Layout>
);

export default Post;
