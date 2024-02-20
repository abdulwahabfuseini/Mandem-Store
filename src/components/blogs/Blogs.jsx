import React from "react";
import { BlogData } from "./Data";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className="grid w-full h-full px-2 py-24 sm:px-6 lg:px-8 place-items-center sm:py-20 max-w-7xl mx-auto">
      <header className="mb-8 text-5xl text-center">RECENT BLOG</header>
      <div className="grid w-full gap-4 grid-auto-fit">
        {BlogData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
