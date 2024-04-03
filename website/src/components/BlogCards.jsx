import { Link } from "react-router-dom";

const BlogCards = ({blogs}) => {
  const filterBlogs = blogs;
  console.log(filterBlogs);
  return (
    <div>
      {filterBlogs.map((blog) => (
        <Link key={blog.id}></Link>
      ))}
    </div>
  );
};

export default BlogCards;
