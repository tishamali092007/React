import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBlog } from "../../redux/blogSlice";
import BlogForm from "../../components/BlogForm";

export default function AddBlog() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    await dispatch(addBlog(data)).unwrap();
    alert("Blog added successfully!");
    navigate("/admin");
  };

   return (
    <div className="form-card">
      <h2 className="section-title">
        <i className="bi bi-plus-circle-fill me-2"></i>Add New Blog
      </h2>
      <BlogForm onSubmit={handleSubmit} buttonText="Add Blog" />
    </div>
  );

}