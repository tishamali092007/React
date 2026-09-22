# College Student Data – React Student Management System

## 📌 Project Overview

This is a College Student Data / Student Management System built using React.js and Vite.

The application allows users to:

- Add new student records
- Edit existing student records
- Delete student records
- Validate form inputs
- Store data using LocalStorage
- Display student information in a table
- Keep data after page refresh

---

## 🛠️ Technologies Used

- React.js
- Vite
- JavaScript (JSX)
- HTML5
- CSS3
- LocalStorage

---

## 📂 Project Structure

```text
src/
│
├── main.jsx
├── App.jsx
├── App.css
├── index.css
│
└── components/
    ├── StudentForm.jsx
    └── StudentTable.jsx
```

---

## ⚙️ Project Working

### main.jsx

This is the entry point of the React application. It renders the App component inside the root element.

### App.jsx

App.jsx is the main component of the project.

It handles:

- Student data
- Add functionality
- Edit functionality
- Delete functionality
- LocalStorage
- State management using useState
- Data loading using useEffect

### StudentForm.jsx

This component contains the student form.

Fields:

- Student ID
- Student Name
- Email
- Mobile Number
- Course
- Semester
- Gender
- City
- Percentage

Validation is applied for:

- Empty fields
- Email format
- Mobile number
- Percentage

### StudentTable.jsx

This component displays student records in a table.

Features:

- View students
- Edit student
- Delete student

---

## 💾 LocalStorage

Data is stored using:

```js
localStorage.setItem("students", JSON.stringify(students));
```

Data is loaded using:

```js
JSON.parse(localStorage.getItem("students"));
```

This keeps the student records available even after refreshing the page.

---

## ✨ Features

✔ Add Student

✔ Edit Student

✔ Delete Student

✔ Validation

✔ Responsive Design

✔ LocalStorage

✔ React Components

---

## ▶️ How to Run

Install dependencies:

```bash
npm install
```

Run project:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## 🎥 Project Videos

### 🌐  Output video

[View Website Output Video](https://drive.google.com/file/d/18EFUidueKMZxpOWdJhtyATZBbU5dCfT9/view?usp=sharing)

### 🎤 Project Explanation

[Watch Project Explanation Video](https://drive.google.com/file/d/1xeBV51EU1J8vjxWWQ63viBm5zTeDvAdB/view?usp=sharing)


---

## 👩‍💻 Author

Tisha Mali
