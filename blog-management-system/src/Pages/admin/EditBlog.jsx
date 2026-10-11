import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs, updateBlog } from "../../redux/blogSlice";
import BlogForm from "../../components/BlogForm";

export default function EditBlog() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, status } = useSelector((state) => state.blogs);

  // If the page is refreshed, the store is empty, so fetch again
  useEffect(() => {
    if (items.length === 0) dispatch(fetchBlogs());
  }, [dispatch, items.length]);

  const blog = items.find((b) => String(b.id) === id);

  const handleSubmit = async (data) => {
    await dispatch(updateBlog(data)).unwrap();
    alert("Blog updated successfully!");
    navigate("/admin");
  };

  if (status === "loading") return <div className="text-center"><div className="spinner-border" /></div>;
  if (!blog) return <div className="alert alert-warning">Blog not found.</div>;

    return (
    <div className="form-card">
      <h2 className="section-title">
        <i className="bi bi-pencil-square me-2"></i>Edit Blog
      </h2>
      <BlogForm key={blog.id} initialData={blog} onSubmit={handleSubmit} buttonText="Update Blog" />
    </div>
  );
}