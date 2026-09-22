import { useEffect, useState } from "react";

const emptyForm = {
  studentId: "",
  name: "",
  email: "",
  mobile: "",
  course: "",
  semester: "",
  gender: "",
  city: "",
  percentage: "",
};

function StudentForm({
  addStudent,
  updateStudent,
  editingStudent,
  cancelEdit,
}) {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (editingStudent) {
      setFormData(editingStudent);
      setErrors({});
      setSuccess("");
    } else {
      setFormData(emptyForm);
    }
  }, [editingStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.studentId.trim()) {
      newErrors.studentId = "Student ID is required";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Student name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit number";
    }

    if (!formData.course) {
      newErrors.course = "Please select course";
    }

    if (!formData.semester) {
      newErrors.semester = "Please select semester";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select gender";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.percentage) {
      newErrors.percentage = "Percentage is required";
    } else if (
      Number(formData.percentage) < 0 ||
      Number(formData.percentage) > 100
    ) {
      newErrors.percentage = "Percentage must be between 0 and 100";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
      return;
    }

    setErrors({});

    if (editingStudent) {
      updateStudent({
        ...formData,
        id: editingStudent.id,
      });
      setSuccess("Student updated successfully!");
    } else {
      addStudent({
        ...formData,
        id: Date.now(),
      });
      setSuccess("Student added successfully!");
    }

    setFormData(emptyForm);
  };

  const handleCancel = () => {
    setFormData(emptyForm);
    setErrors({});
    setSuccess("");
    cancelEdit();
  };

  return (
    <section className="form-card">
      <div className="section-title">
        <h2>{editingStudent ? "Edit Student" : "Add Student"}</h2>
        <p>
          {editingStudent
            ? "Update student details below"
            : "Enter student details below"}
        </p>
      </div>

      {success && <div className="success">{success}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Student ID</label>
            <input
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              placeholder="e.g. STU001"
            />
            {errors.studentId && <span>{errors.studentId}</span>}
          </div>

          <div className="form-group">
            <label>Student Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter full name"
            />
            {errors.name && <span>{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="student@gmail.com"
            />
            {errors.email && <span>{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="10 digit mobile number"
            />
            {errors.mobile && <span>{errors.mobile}</span>}
          </div>

          <div className="form-group">
            <label>Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Select Course</option>
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="B.Com">B.Com</option>
              <option value="MCA">MCA</option>
            </select>
            {errors.course && <span>{errors.course}</span>}
          </div>

          <div className="form-group">
            <label>Semester</label>
            <select
              name="semester"
              value={formData.semester}
              onChange={handleChange}
            >
              <option value="">Select Semester</option>
              {[1, 2, 3, 4, 5, 6].map((sem) => (
                <option key={sem} value={sem}>
                  Semester {sem}
                </option>
              ))}
            </select>
            {errors.semester && <span>{errors.semester}</span>}
          </div>

          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group">
              {["Male", "Female", "Other"].map((gender) => (
                <label key={gender}>
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={handleChange}
                  />
                  {gender}
                </label>
              ))}
            </div>
            {errors.gender && <span>{errors.gender}</span>}
          </div>

          <div className="form-group">
            <label>City</label>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter city"
            />
            {errors.city && <span>{errors.city}</span>}
          </div>

          <div className="form-group">
            <label>Percentage</label>
            <input
              type="number"
              name="percentage"
              value={formData.percentage}
              onChange={handleChange}
              placeholder="Enter percentage"
              min="0"
              max="100"
            />
            {errors.percentage && <span>{errors.percentage}</span>}
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="add-btn">
            {editingStudent ? "Update Student" : "Add Student"}
          </button>

          {editingStudent && (
            <button type="button" className="cancel-btn" onClick={handleCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default StudentForm;