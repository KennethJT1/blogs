const CategorySelection = ({ onSelectCategory, activeCategory, blogs }) => {
  const categories = [...new Set(blogs.map((item) => item.category))];

  return (
    <div className="px-4 mb-8 lg:space-x-8 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold">
      <button
        onClick={() => onSelectCategory(null)}
        className={`mx-2 my-1 lg:ml-12 ${
          activeCategory ? "" : "active-button"
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          onClick={() => onSelectCategory(category)}
          className={`mx-2 my-1 space-x-16 ${
            activeCategory === category ? "active-button" : ""
          }`}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySelection;
