import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  const catClass = `cat-${blog.category.toLowerCase()}`;

  return (
    <div className="card blog-card h-100">
      <div className="blog-img-wrap">
        <img src={blog.image} alt={blog.title} />
        <span className={`cat-badge ${catClass}`}>{blog.category}</span>
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title blog-title">{blog.title}</h5>
        <p className="card-text blog-desc">{blog.description}</p>
        <div className="mt-auto">
          <small className="text-muted d-block mb-3">
            <i className="bi bi-person-fill me-1"></i>{blog.author}
            <span className="mx-2">|</span>
            <i className="bi bi-calendar-event me-1"></i>{blog.publishDate}
          </small>
          <Link to={`/blogs/${blog.id}`} className="btn btn-gradient btn-sm w-100">
            Read More <i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}