import React from "react";
import Layout from "../layout/Layout";
import HeadTitle from "../components/HeadTitle";
import Blogs from "../components/blogs/Blogs";

const Blog = () => {
  return (
    <Layout>
      <HeadTitle />
      <Blogs />
    </Layout>
  );
};

export default Blog;
