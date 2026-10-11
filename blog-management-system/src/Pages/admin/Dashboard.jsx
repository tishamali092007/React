import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteBlog } from "../../redux/blogSlice";
import SearchBar from "../../components/SearchBar";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.blogs);
  const [search, setSearch] = useState("");

  const total = items.length;
  const published = items.filter((b) => b.status === "Published").length;
  const drafts = items.filter((b) => b.status === "Draft").length;

  const filtered = items.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      dispatch(deleteBlog(id));
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="section-title mb-0">
          <i className="bi bi-speedometer2 me-2"></i>Admin Dashboard
        </h2>
        <Link to="/admin/add-blog" className="btn btn-success">
          <i className="bi bi-plus-lg me-1"></i> Add Blog
        </Link>
      </div>

      <div className="row mb-4 g-3">
        <div className="col-md-4">
          <div className="stat-card stat-total d-flex justify-content-between align-items-center">
            <div><h6>Total Blogs</h6><h2>{total}</h2></div>
            <i className="bi bi-collection-fill icon"></i>
          </div>
        </div>
        <div className="col-md-4">
          <div className="stat-card stat-published d-flex justify-content-between align-items-center">
            <div><h6>Published</h6><h2>{published}</h2></div>
            <i className="bi bi-check-circle-fill icon"></i>
          </div>
        </div>
        <div className="col-md-4">
          <div className="stat-card stat-draft d-flex justify-content-between align-items-center">
            <div><h6>Drafts</h6><h2>{drafts}</h2></div>
            <i className="bi bi-file-earmark-text-fill icon"></i>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <SearchBar value={search} onChange={setSearch} placeholder="Search blogs by title or author..." />
      </div>

      <div className="table-card table-responsive">
        <table className="table table-hover align-middle mb-0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
              <th>Date</th>
              <th>Status</th>
              <th style={{ width: "170px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr><td colSpan="7" className="text-center">No blogs found</td></tr>
            )}
            {filtered.map((blog) => (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td className="fw-semibold">{blog.title}</td>
                <td>{blog.author}</td>
                <td>
                  <span className={`badge rounded-pill px-3 py-2 cat-${blog.category.toLowerCase()}`}>
                    {blog.category}
                  </span>
                </td>
                <td>{blog.publishDate}</td>
                <td>
                  <span
                    className={`badge rounded-pill px-3 py-2 ${
                      blog.status === "Published" ? "bg-success" : "bg-warning text-dark"
                    }`}
                  >
                    {blog.status}
                  </span>
                </td>
                <td>
                  <Link to={`/admin/edit/${blog.id}`} className="btn btn-sm btn-primary me-2">
                    <i className="bi bi-pencil-square me-1"></i>Edit
                  </Link>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(blog.id)}>
                    <i className="bi bi-trash-fill me-1"></i>Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}