import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const SideBar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/blogs`)
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.slice(12, 27)));
  }, []);

  return (
    <div>
      <div>
        <h3 className="text-2xl font-semibold px-4 mb-4">Latest Blogs</h3>
        <div>
          {popularBlogs.slice(0, 4).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2 border-spacing-2 px-4 "
            >
              <h4 className="font-medium mb-1">{blog.title}</h4>
              <Link className="text-base pb-4 hover:text-red-500 inline-flex items-center">
                Read more <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold px-4 mb-4 mt-21">Popular Blogs</h3>
        <div>
          {popularBlogs.slice(7, 11).map((blog) => (
            <div
              key={blog.id}
              className="my-5 border-b-2 border-spacing-2 px-4 "
            >
              <h4 className="font-medium mb-1">{blog.title}</h4>
              <Link className="text-base pb-4 hover:text-red-500 inline-flex items-center">
                Read more <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
