# Blog Management System

A React based blog application where visitors can view, search, filter, sort and paginate blogs, and admins can add, edit, delete and manage blog records using **React, Redux Toolkit and JSON Server**.

> **Project type:** Frontend (React) with a fake REST API (JSON Server)
> **Duration:** 3-4 hours | **Total marks:** 30

---

## Table of Contents

1. [Video Demo](#-video-demo)
2. [Code Explanation Video](#-code-explanation-video)
3. [Features](#-features)
4. [Tech Stack](#-tech-stack)
5. [Project Structure](#-project-structure)
6. [Installation and Setup](#-installation-and-setup)
7. [Available Scripts](#-available-scripts)
8. [Routes](#-routes)
9. [API Endpoints](#-api-endpoints)
10. [Blog Data Model](#-blog-data-model)
11. [Form Validation Rules](#-form-validation-rules)
12. [Code Explanation](#-code-explanation)
13. [Concepts Covered](#-concepts-covered)
14. [Screenshots](#-screenshots)
15. [Marking Scheme Mapping](#-marking-scheme-mapping)
16. [Troubleshooting](#-troubleshooting)
17. [Future Improvements](#-future-improvements)
18. [Author](#-author)

---

## Video Demo

Watch the complete output of the project (Home, Blog List, Details, Admin Dashboard, Add, Edit, Delete, Search, Sort and Pagination).

[![Watch the demo video](https://img.shields.io/badge/Watch-Output%20Demo%20Video-red?style=for-the-badge&logo=youtube)](YOUR_OUTPUT_VIDEO_LINK_HERE)

**Link:** [YOUR_OUTPUT_VIDEO_LINK_HERE](YOUR_OUTPUT_VIDEO_LINK_HERE)

**What the video shows:**

- Home page with the latest blogs
- Blog list with search, category filter, sorting and pagination
- Blog details page
- Admin dashboard with Total / Published / Drafts count
- Add blog with form validation errors
- Edit blog with pre-filled data
- Delete blog with confirmation
- Data changing live inside `db.json`

---

## Code Explanation Video

A walkthrough of the complete source code, folder structure, Redux flow and CRUD logic.

[![Watch the code explanation video](https://img.shields.io/badge/Watch-Code%20Explanation%20Video-blue?style=for-the-badge&logo=youtube)](YOUR_CODE_EXPLANATION_VIDEO_LINK_HERE)

**Link:** [YOUR_CODE_EXPLANATION_VIDEO_LINK_HERE](YOUR_CODE_EXPLANATION_VIDEO_LINK_HERE)

**What the video covers:**

| Topic | File |
|---|---|
| Project folder structure | `src/` |
| Routing | `App.jsx`, `main.jsx` |
| Redux store and async thunks | `redux/store.js`, `redux/blogSlice.js` |
| CRUD with Axios and JSON Server | `blogSlice.js`, `db.json` |
| Reusable components and props | `components/` |
| Form handling and validation | `BlogForm.jsx` |
| Search, filter, sort, pagination | `pages/Blogs.jsx`, `Pagination.jsx` |
| Admin dashboard | `pages/admin/Dashboard.jsx` |
| LocalStorage usage | `pages/Blogs.jsx` |

> **Tip:** Upload both videos to YouTube (Unlisted) or Google Drive (Anyone with the link can view) and paste the links above.

---

## Features

### Public side
- Home page with a hero banner and the latest 3 published blogs
- Blog list page showing only **Published** blogs
- **Search** by title or author
- **Filter** by category
- **Sort** by Latest, Oldest, Title A-Z, Title Z-A
- **Pagination** (3 blogs per page)
- Blog details page with full content, author, email, date and tags
- Sort preference is remembered using **LocalStorage**

### Admin side
- Dashboard with **Total Blogs**, **Published** and **Drafts** counts
- Table of all blogs (published and drafts) with search
- **Add** new blog with validation
- **Edit** existing blog with pre-filled form
- **Delete** blog with confirmation
- All changes are saved permanently in `db.json`

### UI
- Responsive layout using **Bootstrap 5**
- Gradient navbar, hero banner and dashboard cards
- Color coded category badges
- Hover effects on blog cards
- **Bootstrap Icons** used across the app
- Loading spinner and error messages

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 (Vite) | UI library and build tool |
| React Router DOM | Routing |
| Redux Toolkit | State management |
| React Redux | Connect React with Redux |
| Axios | API calls |
| JSON Server 0.17.4 | Fake REST API |
| Bootstrap 5 | Styling and layout |
| Bootstrap Icons | Icons |

---

## Project Structure

```
blog-management-system/
├── db.json                      # JSON Server database
├── package.json
├── index.html
├── README.md
├── screenshots/                 # Project screenshots
└── src/
    ├── components/
    │   ├── Header.jsx           # Navigation bar
    │   ├── Footer.jsx           # Footer
    │   ├── BlogCard.jsx         # Single blog card
    │   ├── BlogForm.jsx         # Add / Edit form with validation
    │   ├── SearchBar.jsx        # Search input
    │   └── Pagination.jsx       # Pagination controls
    ├── pages/
    │   ├── Home.jsx
    │   ├── Blogs.jsx            # Blog list (search, filter, sort, pagination)
    │   ├── BlogDetails.jsx
    │   └── admin/
    │       ├── Dashboard.jsx
    │       ├── AddBlog.jsx
    │       └── EditBlog.jsx
    ├── redux/
    │   ├── store.js
    │   └── blogSlice.js         # CRUD async thunks
    ├── constants.js             # Categories and API URL
    ├── App.jsx                  # Routes
    ├── main.jsx                 # Entry point
    └── index.css                # Global and custom styles
```

---

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)
- Git

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/blog-management-system.git

# 2. Go to the project folder
cd blog-management-system

# 3. Install dependencies
npm install
```

### Run the project (two terminals are required)

**Terminal 1: start the fake backend**

```bash
npm run server
```

The API runs at `http://localhost:3001/blogs`

**Terminal 2: start the React app**

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

> If only `npm run dev` is running, the website opens but blogs will not load because the JSON Server is not running.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the React app (Vite) on port 5173 |
| `npm run server` | Starts JSON Server on port 3001 |
| `npm run build` | Creates a production build |

---

## Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero banner and latest blogs |
| `/blogs` | Blog List | Search, filter, sort, pagination |
| `/blogs/:id` | Blog Details | Complete blog information |
| `/admin` | Dashboard | Stats, table, edit and delete |
| `/admin/add-blog` | Add Blog | Add blog form |
| `/admin/edit/:id` | Edit Blog | Edit blog form |
| `*` | 404 | Page not found |

---

## API Endpoints

Base URL: `http://localhost:3001`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/blogs` | Get all blogs |
| GET | `/blogs/:id` | Get a single blog |
| POST | `/blogs` | Add a new blog |
| PUT | `/blogs/:id` | Update a blog |
| DELETE | `/blogs/:id` | Delete a blog |

---

## Blog Data Model

```json
{
  "id": 1,
  "title": "Getting Started with React",
  "author": "Amit Shah",
  "email": "amit@example.com",
  "category": "Technology",
  "image": "https://picsum.photos/seed/react1/600/400",
  "description": "A beginner friendly introduction to React.",
  "content": "Full blog content goes here...",
  "tags": ["react", "javascript", "frontend"],
  "publishDate": "2026-09-01",
  "status": "Published"
}
```

| Field | Type | Notes |
|---|---|---|
| id | Number | Auto generated by JSON Server |
| title | String | Blog title |
| author | String | Author name |
| email | String | Author email |
| category | String | Technology, Health, Travel, Education, Food, Lifestyle |
| image | String | Image URL |
| description | String | Short summary |
| content | String | Full blog content |
| tags | Array | Stored as an array, entered as comma separated text |
| publishDate | String | Format `YYYY-MM-DD` |
| status | String | `Published` or `Draft` |

---

## Form Validation Rules

| Field | Rule |
|---|---|
| Title | Minimum 5 characters |
| Author | Required |
| Email | Must be a valid email format |
| Category | Must be selected |
| Image | Must start with `http://` or `https://` |
| Description | Minimum 20 characters |
| Content | Minimum 50 characters |
| Tags | At least one tag (comma separated) |
| Publish Date | Required |

Errors are shown in red under each field and disappear when the user starts typing.

---

## Code Explanation

### 1. Entry point (`main.jsx`)

The app is wrapped with three providers:

- `Provider` gives every component access to the Redux store
- `BrowserRouter` enables routing
- Bootstrap CSS, Bootstrap Icons and `index.css` are imported here (in this order)

### 2. Routing (`App.jsx`)

`App.jsx` dispatches `fetchBlogs()` once inside `useEffect` so that blogs are loaded when the app starts. It then defines all the routes using `<Routes>` and `<Route>`. `Header` and `Footer` are placed outside `<Routes>`, so they appear on every page.

### 3. Redux (`redux/`)

**`store.js`** creates the store with `configureStore` and registers the blog reducer.

**`blogSlice.js`** contains four `createAsyncThunk` functions, one for each CRUD operation:

| Thunk | HTTP method | Purpose |
|---|---|---|
| `fetchBlogs` | GET | Read all blogs |
| `addBlog` | POST | Create a blog |
| `updateBlog` | PUT | Update a blog (uses the rest operator to separate `id`) |
| `deleteBlog` | DELETE | Delete a blog |

The slice state looks like this:

```js
{ items: [], status: "idle" | "loading" | "succeeded" | "failed", error: null }
```

`extraReducers` updates the state after each API call:

- `fetchBlogs.fulfilled` replaces `items`
- `addBlog.fulfilled` pushes the new blog
- `updateBlog.fulfilled` replaces the matching blog using `map`
- `deleteBlog.fulfilled` removes the blog using `filter`

### 4. Components

| Component | Props | Purpose |
|---|---|---|
| `Header` | none | Navbar with `NavLink` (active link highlight) |
| `Footer` | none | Footer text with current year |
| `BlogCard` | `blog` | Shows image, category badge, title, description, author, date |
| `SearchBar` | `value`, `onChange`, `placeholder` | Controlled input used on Blogs and Dashboard |
| `Pagination` | `currentPage`, `totalPages`, `onPageChange` | Previous, page numbers, Next |
| `BlogForm` | `initialData`, `onSubmit`, `buttonText` | Shared form for Add and Edit |

### 5. Blog form (`BlogForm.jsx`)

- Uses `useState` for form values and error messages
- A single `handleChange` function updates any field using `e.target.name`
- The spread operator (`{ ...form, [name]: value }`) updates state without mutation
- `validate()` returns an errors object; the form submits only when it is empty
- Tags are converted from a comma separated string to an array before saving
- When editing, the tags array is converted back into a string

### 6. Blog list (`Blogs.jsx`)

Search, filter, sort and pagination all work on the data already in Redux:

1. Keep only `Published` blogs
2. Filter by search text (title or author)
3. Filter by category
4. Sort by the selected option
5. Slice the result for the current page

`useMemo` is used so the filtering and sorting run only when their inputs change. The selected sort option is saved in **LocalStorage**, so it is remembered after a refresh. Whenever search, category or sort changes, the page resets to 1.

### 7. Blog details (`BlogDetails.jsx`)

`useParams()` reads the `id` from the URL and finds the matching blog in the Redux store. Loading and "not found" states are handled.

### 8. Admin pages

- **Dashboard:** counts Total, Published and Drafts using `filter`. It shows a searchable table with Edit and Delete buttons. Delete asks for confirmation using `window.confirm`.
- **AddBlog:** renders `BlogForm`, dispatches `addBlog`, then navigates to `/admin` using `useNavigate`.
- **EditBlog:** reads `id` from the URL, passes the matching blog as `initialData` to `BlogForm`, dispatches `updateBlog`, then navigates to `/admin`.

### 9. Styling (`index.css`)

Custom CSS variables (`--primary`, `--pink`, `--gradient`) are defined in `:root`, so the full color theme can be changed from one place. Bootstrap handles the layout, and custom classes handle gradients, hover effects and category colors.

---

## Concepts Covered

- Components and JSX
- Props and State
- Events
- Forms and Validation
- Hooks (`useState`, `useEffect`, `useMemo`, `useParams`, `useNavigate`, `useDispatch`, `useSelector`)
- Routing (React Router)
- CRUD operations
- Axios and JSON Server
- Redux Toolkit
- LocalStorage
- Search and Sort
- Filtering
- Pagination
- Bootstrap
- Spread and Rest operators

---

## Screenshots

### Home
![Home](screenshots/home.png)

### Blog List
![Blog List](screenshots/blog-list.png)

### Add / Edit Form
![Add Edit Form](screenshots/form.png)

### Blog Details
![Blog Details](screenshots/details.png)

### CRUD Operations
![CRUD](screenshots/crud.png)

### Search / Sort / Pagination
![Search Sort Pagination](screenshots/search-sort.png)

### Dashboard
![Dashboard](screenshots/dashboard.png)

---

## Marking Scheme Mapping

| Component | Marks | Where it is implemented |
|---|---|---|
| UI + Bootstrap | 4 | Bootstrap classes, `index.css`, Bootstrap Icons |
| Components + Hooks | 5 | `components/`, `useState`, `useEffect`, `useMemo`, `useParams`, `useNavigate` |
| Forms + Validation | 4 | `BlogForm.jsx` |
| CRUD + JSON Server | 7 | `blogSlice.js`, `db.json` |
| Routing | 3 | `App.jsx`, `main.jsx` |
| Redux | 3 | `store.js`, `blogSlice.js` |
| Search / Sort / Pagination | 2 | `Blogs.jsx`, `Pagination.jsx` |
| GitHub + README | 2 | This repository and README |
| **Total** | **30** | |

---

## Troubleshooting

| Problem | Solution |
|---|---|
| "Could not load blogs. Is JSON Server running?" | Run `npm run server` in a separate terminal |
| JSON Server says "db.json doesn't seem to exist" | `db.json` must be in the project root, next to `package.json` |
| `Missing script: server` | Add `"server": "json-server --watch db.json --port 3001"` to `package.json` |
| `json-server is not recognized` | Run `npm install json-server@0.17.4 --save-dev` |
| Port 3001 already in use | Close the old terminal that is running the server |
| Icons are not showing | Check that `bootstrap-icons` is installed and imported in `main.jsx` |
| CSS not applied | Import `index.css` after Bootstrap in `main.jsx`, then hard refresh with Ctrl + Shift + R |
| Images not loading | Check the internet connection (images come from picsum.photos) |

---

## Future Improvements

- Admin login and authentication
- Image upload instead of image URL
- Rich text editor for blog content
- Comments and likes
- Dark mode
- Deploy to Vercel / Netlify with a real backend

---

## Author

**Tisha Patel**

- GitHub: [@your-username](https://github.com/your-username)
- Email: your-email@example.com

---

Made using React, Redux Toolkit and JSON Server.