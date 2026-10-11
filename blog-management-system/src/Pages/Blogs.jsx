import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import BlogCard from "../components/BlogCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import { CATEGORIES } from "../constants";

const ITEMS_PER_PAGE = 3;

export default function Blogs() {
  const { items, status } = useSelector((state) => state.blogs);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState(localStorage.getItem("blogSort") || "latest");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();

    const result = items
      .filter((b) => b.status === "Published")
      .filter((b) => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q))
      .filter((b) => category === "All" || b.category === category);

    switch (sort) {
      case "az":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "za":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "oldest":
        result.sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate));
        break;
      default:
        result.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
    }
    return result;
  }, [items, search, category, sort]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handleSort = (value) => {
    setSort(value);
    localStorage.setItem("blogSort", value);
    setPage(1);
  };

  return (
    <>
      <h2 className="section-title">
        <i className="bi bi-journal-richtext me-2"></i>All Blogs
      </h2>

      <div className="row g-2 mb-4 filter-box">
        <div className="col-md-5">
          <SearchBar
            value={search}
            onChange={(v) => {
              setSearch(v);
              setPage(1);
            }}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPage(1);
            }}
          >
            <option value="All">All Categories</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <select className="form-select" value={sort} onChange={(e) => handleSort(e.target.value)}>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="az">Title A-Z</option>
            <option value="za">Title Z-A</option>
          </select>
        </div>
      </div>

      {status === "loading" && (
        <div className="text-center">
          <div className="spinner-border" />
        </div>
      )}
      {status === "failed" && (
        <div className="alert alert-danger">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          Could not load blogs. Is JSON Server running?
        </div>
      )}
      {status === "succeeded" && filtered.length === 0 && (
        <div className="alert alert-info">
          <i className="bi bi-info-circle-fill me-2"></i>No blogs found.
        </div>
      )}

      <div className="row g-4">
        {paginated.map((blog) => (
          <div className="col-md-4" key={blog.id}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>

      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </>
  );
}