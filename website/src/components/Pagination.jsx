const Pagination = ({ onPageChanging, blogs, currentPage, pageSize }) => {
  const totalPages = Math.ceil(blogs.length / pageSize);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map(
      (pageNumber) => (
        <li
          className={pageNumber === currentPage ? "activePagination" : ""}
          key={pageNumber}
        >
          <a href="#" onClick={() => onPageChanging(pageNumber)}>
            {pageNumber}
          </a>
        </li>
      )
    );
  };

  return (
    <ul className="pagination my-8 flex-wrap gap-4">
      <li>
        <button
          onClick={() => onPageChanging(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
      </li>
      <div className="flex">{renderPaginationLinks()}</div>
      <li>
        <button
          onClick={() => onPageChanging(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
