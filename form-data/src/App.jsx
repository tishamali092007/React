import { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    const savedStudents = localStorage.getItem("students");

    if (savedStudents) {
      setStudents(JSON.parse(savedStudents));
    }
  }, []);

  const saveStudents = (updatedStudents) => {
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
  };

  const addStudent = (student) => {
    saveStudents([...students, student]);
  };

  const updateStudent = (updatedStudent) => {
    const updatedStudents = students.map((student) =>
      student.id === updatedStudent.id ? updatedStudent : student
    );

    saveStudents(updatedStudents);
    setEditingStudent(null);
  };

  const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    saveStudents(updatedStudents);

    if (editingStudent?.id === id) {
      setEditingStudent(null);
    }
  };

  const startEdit = (student) => {
    setEditingStudent(student);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1>College Student Data</h1>
          <p>Student Management System</p>
        </div>
      </header>

      <main>
        <StudentForm
          addStudent={addStudent}
          updateStudent={updateStudent}
          editingStudent={editingStudent}
          cancelEdit={() => setEditingStudent(null)}
        />

        <StudentTable
          students={students}
          deleteStudent={deleteStudent}
          startEdit={startEdit}
        />
      </main>
    </div>
  );
}

export default App;