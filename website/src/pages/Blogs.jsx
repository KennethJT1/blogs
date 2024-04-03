import BlogPage from "../components/BlogPage";

const Blogs = () => {
  return (
    <div>
      <div className="px-4 py-40 text-white text-center mx-auto bg-black">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold  mb-5">
          Blog Page
        </h1>
      </div>

      <div className="max-w-7xl mx-auto">
        <BlogPage />
      </div>
    </div>
  );
};

export default Blogs;
