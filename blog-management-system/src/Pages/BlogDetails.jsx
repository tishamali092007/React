import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BlogDetails() {
  const { id } = useParams();
  const { items, status } = useSelector((state) => state.blogs);
  const blog = items.find((b) => String(b.id) === id);

  if (status === "loading" || status === "idle") {
    return <div className="text-center"><div className="spinner-border" /></div>;
  }
  if (!blog) return <div className="alert alert-warning">Blog not found.</div>;

  return (
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <Link to="/blogs" className="btn btn-gradient btn-sm mb-3">
          <i className="bi bi-arrow-left me-1"></i> Back to Blogs
        </Link>
        <div className="details-card">
          <img src={blog.image} alt={blog.title} className="details-img mb-4" />
          <span className={`badge cat-${blog.category.toLowerCase()} mb-2 px-3 py-2 rounded-pill`}>
            {blog.category}
          </span>
          <h1 className="fw-bold">{blog.title}</h1>
          <p className="text-muted">
            <i className="bi bi-person-fill me-1"></i>
            <strong>{blog.author}</strong> ({blog.email})
            <span className="mx-2">|</span>
            <i className="bi bi-calendar-event me-1"></i>{blog.publishDate}
          </p>
          <p className="lead">{blog.description}</p>
          <hr />
          <p style={{ whiteSpace: "pre-line" }}>{blog.content}</p>
          <div className="mt-3">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="badge rounded-pill me-2 px-3 py-2"
                style={{ background: "#a29bfe" }}
              >
                <i className="bi bi-hash"></i>{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}