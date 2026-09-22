function StudentTable({ students, deleteStudent, startEdit }) {
  return (
    <section className="table-card">
      <div className="table-header">
        <div>
          <h2>Student Data</h2>
          <p>Total Students: {students.length}</p>
        </div>
      </div>

      {students.length === 0 ? (
        <div className="empty">
          <h3>No Student Data</h3>
          <p>Add a student using the form above.</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Student</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Course</th>
                <th>Semester</th>
                <th>Gender</th>
                <th>City</th>
                <th>Percentage</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.studentId}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.mobile}</td>
                  <td>{student.course}</td>
                  <td>Sem {student.semester}</td>
                  <td>{student.gender}</td>
                  <td>{student.city}</td>
                  <td>{student.percentage}%</td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="edit-btn"
                        onClick={() => startEdit(student)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => deleteStudent(student.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default StudentTable;