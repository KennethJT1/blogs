import { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let uri = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

      if (selectedCategory) {
        uri += `&category=${selectedCategory}`;
      }
      const res = await fetch(uri);
      const data = await res.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, [pageSize, currentPage, selectedCategory]);

  const pageChanging = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const categoryChanging = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div>
      <div>
        <CategorySelection
          blogs={blogs}
          onSelectCategory={categoryChanging}
          activeCategory={activeCategory}
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-16">
        <BlogCards
          blogs={blogs}
          currentPage={currentPage}
          selectedCategory={selectedCategory}
          pageSize={pageSize}
        />

        <SideBar />
      </div>
      <div>
        <Pagination
          onPageChanging={pageChanging}
          blogs={blogs}
          currentPage={currentPage}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default BlogPage;
