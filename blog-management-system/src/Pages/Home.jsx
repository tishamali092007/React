import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BlogCard from "../components/BlogCard";

export default function Home() {
  const { items } = useSelector((state) => state.blogs);

  const latest = items
    .filter((b) => b.status === "Published")
    .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    .slice(0, 3);

  return (
    <>
      <div className="hero">
        <h1 className="display-5">
          Welcome to BlogHub <i className="bi bi-stars"></i>
        </h1>
        <p className="lead mb-4">
          Read, search and explore blogs on technology, health, travel and more.
        </p>
        <Link to="/blogs" className="btn btn-light btn-lg">
          Explore Blogs <i className="bi bi-rocket-takeoff-fill ms-1"></i>
        </Link>
      </div>

      <h3 className="section-title">
        <i className="bi bi-fire me-2" style={{ color: "#fd79a8" }}></i>Latest Blogs
      </h3>
      <div className="row g-4">
        {latest.map((blog) => (
          <div className="col-md-4" key={blog.id}>
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
    </>
  );
}