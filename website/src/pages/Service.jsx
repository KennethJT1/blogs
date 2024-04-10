import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      let uri = `http://localhost:5000/blogs`;

      const res = await fetch(uri);
      const data = await res.json();
      console.log(data);
      setServices(data);
    }
    fetchBlogs();
  }, []);

  const tech = () => {
    return services.filter((t) => t.category === "Tech");
  };

  const health = () => {
    return services.filter((t) => t.category === "Health");
  };

  const fintech = () => {
    return services.filter((t) => t.category === "Fintech");
  };

  const enterprise = () => {
    return services.filter((t) => t.category === "Enterprise");
  };

  return (
    <div>
      <div className="px-4 py-40 text-white text-center mx-auto bg-black">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold  mb-5">
          Services
        </h1>
      </div>

      <div className="grid pb-8 lg:grid-col-6 mt-12">
        <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4 mx-4">
          <div>
            <h3 className="text-black text-3xl font-medium tracking-wide">
              Tech
            </h3>
            {tech()
              .slice(0, 4)
              .map((blog) => (
                <Link
                  to={`/blogs/${blog.id}`}
                  key={blog.id}
                  className="p-5 cursor-pointer shadow-lg rounded"
                >
                  <div>
                    <img src={blog.image} alt={blog.title} className="w-full" />
                  </div>
                  <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
                    {blog.title}
                  </h3>
                  <p className="mb-2 text-gray-700">
                    <FaUser className="inline-flex items-center mr-2" />{" "}
                    {blog.author}
                  </p>
                  <p className="text-sm text-gray-600">
                    Published: {blog.published_date}
                  </p>
                </Link>
              ))}
          </div>

          <div>
            <h3 className="text-black text-3xl font-medium tracking-wide">
              Health
            </h3>
            {health()
              .slice(0, 4)
              .map((blog) => (
                <Link
                  to={`/blogs/${blog.id}`}
                  key={blog.id}
                  className="p-5 cursor-pointer shadow-lg rounded"
                >
                  <div>
                    <img src={blog.image} alt={blog.title} className="w-full" />
                  </div>
                  <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
                    {blog.title}
                  </h3>
                  <p className="mb-2 text-gray-700">
                    <FaUser className="inline-flex items-center mr-2" />{" "}
                    {blog.author}
                  </p>
                  <p className="text-sm text-gray-600">
                    Published: {blog.published_date}
                  </p>
                </Link>
              ))}
          </div>

          <div>
            <h3 className="text-black text-3xl font-medium tracking-wide">
              Fintech
            </h3>
            {fintech()
              .slice(0, 4)
              .map((blog) => (
                <Link
                  to={`/blogs/${blog.id}`}
                  key={blog.id}
                  className="p-5 cursor-pointer shadow-lg rounded"
                >
                  <div>
                    <img src={blog.image} alt={blog.title} className="w-full" />
                  </div>
                  <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
                    {blog.title}
                  </h3>
                  <p className="mb-2 text-gray-700">
                    <FaUser className="inline-flex items-center mr-2" />{" "}
                    {blog.author}
                  </p>
                  <p className="text-sm text-gray-600">
                    Published: {blog.published_date}
                  </p>
                </Link>
              ))}
          </div>

          <div>
            <h3 className="text-black text-3xl font-medium tracking-wide">
              Enterprise
            </h3>
            {enterprise()
              .slice(0, 4)
              .map((blog) => (
                <Link
                  to={`/blogs/${blog.id}`}
                  key={blog.id}
                  className="p-5 cursor-pointer shadow-lg rounded"
                >
                  <div>
                    <img src={blog.image} alt={blog.title} className="w-full" />
                  </div>
                  <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
                    {blog.title}
                  </h3>
                  <p className="mb-2 text-gray-700">
                    <FaUser className="inline-flex items-center mr-2" />{" "}
                    {blog.author}
                  </p>
                  <p className="text-sm text-gray-600">
                    Published: {blog.published_date}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
