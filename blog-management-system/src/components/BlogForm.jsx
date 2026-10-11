import { useState } from "react";
import { CATEGORIES } from "../constants";

const emptyForm = {
  title: "",
  author: "",
  email: "",
  category: "",
  image: "",
  description: "",
  content: "",
  tags: "",
  publishDate: "",
  status: "Published",
};

export default function BlogForm({ initialData, onSubmit, buttonText = "Save Blog" }) {
  // When editing, convert the tags array into a comma separated string
  const [form, setForm] = useState(
    initialData ? { ...initialData, tags: initialData.tags.join(", ") } : emptyForm
  );
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const err = {};
    if (form.title.trim().length < 5) err.title = "Title must be at least 5 characters";
    if (!form.author.trim()) err.author = "Author is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Enter a valid email";
    if (!form.category) err.category = "Select a category";
    if (!/^https?:\/\/.+/.test(form.image)) err.image = "Enter a valid image URL (http/https)";
    if (form.description.trim().length < 20) err.description = "Description must be at least 20 characters";
    if (form.content.trim().length < 50) err.content = "Content must be at least 50 characters";
    if (!form.tags.trim()) err.tags = "Add at least one tag (comma separated)";
    if (!form.publishDate) err.publishDate = "Select a publish date";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }
    onSubmit({
      ...form,
      tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
    });
  };

  // helper that returns JSX for a simple input
  const field = (name, label, type = "text") => (
    <div className="mb-3">
      <label className="form-label fw-semibold">{label}</label>
      <input
        type={type}
        name={name}
        value={form[name]}
        onChange={handleChange}
        className={`form-control ${errors[name] ? "is-invalid" : ""}`}
      />
      <div className="invalid-feedback">{errors[name]}</div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="row">
        <div className="col-md-6">{field("title", "Blog Title")}</div>
        <div className="col-md-6">{field("author", "Author")}</div>
        <div className="col-md-6">{field("email", "Email", "email")}</div>

        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className={`form-select ${errors.category ? "is-invalid" : ""}`}
          >
            <option value="">-- Select --</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <div className="invalid-feedback">{errors.category}</div>
        </div>

        <div className="col-md-12">{field("image", "Image URL")}</div>

        <div className="col-md-12 mb-3">
          <label className="form-label fw-semibold">Description</label>
          <textarea
            name="description"
            rows="2"
            value={form.description}
            onChange={handleChange}
            className={`form-control ${errors.description ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.description}</div>
        </div>

        <div className="col-md-12 mb-3">
          <label className="form-label fw-semibold">Content</label>
          <textarea
            name="content"
            rows="6"
            value={form.content}
            onChange={handleChange}
            className={`form-control ${errors.content ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.content}</div>
        </div>

        <div className="col-md-4">{field("tags", "Tags (comma separated)")}</div>
        <div className="col-md-4">{field("publishDate", "Publish Date", "date")}</div>

        <div className="col-md-4 mb-3">
          <label className="form-label fw-semibold">Status</label>
          <select name="status" value={form.status} onChange={handleChange} className="form-select">
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-success">{buttonText}</button>
    </form>
  );
}