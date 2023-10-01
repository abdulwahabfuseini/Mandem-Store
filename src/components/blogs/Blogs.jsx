import React from "react";
import { BlogData } from "./Data";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className="grid w-full h-full px-2 py-24 sm:px-6 lg:px-8 place-items-center sm:py-20">
      <header className="mb-4 text-5xl text-center">RECENT BLOG</header>
      <div className="grid grid-auto-fit gap-4 w-full">
        {BlogData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
