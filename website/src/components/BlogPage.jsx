import { useEffect, useState } from "react";
import BlogCards from "./BlogCards";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      let uri = `http://localhost:5000/blogs`;
      const res = await fetch(uri);
      const data = res.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, []);

  return (
    <div>
      <div>Page Category</div>
      <div>
        <BlogCards blogs={blogs} />
      </div>
      <div>
        <p>Paginations</p>
      </div>
    </div>
  );
};

export default BlogPage;

// author

// authorPic

// category

// content

// id

// image
// published_date

// reading_time

// tags

// title
