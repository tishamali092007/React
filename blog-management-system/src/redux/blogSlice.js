import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../constants";

// READ
export const fetchBlogs = createAsyncThunk("blogs/fetch", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

// CREATE
export const addBlog = createAsyncThunk("blogs/add", async (blog) => {
  const res = await axios.post(API_URL, blog);
  return res.data;
});

// UPDATE (uses rest operator to separate id from the other fields)
export const updateBlog = createAsyncThunk(
  "blogs/update",
  async ({ id, ...rest }) => {
    const res = await axios.put(`${API_URL}/${id}`, { id, ...rest });
    return res.data;
  }
);

// DELETE
export const deleteBlog = createAsyncThunk("blogs/delete", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const blogSlice = createSlice({
  name: "blogs",
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addBlog.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.items = state.items.map((b) =>
          b.id === action.payload.id ? action.payload : b
        );
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.items = state.items.filter((b) => b.id !== action.payload);
      });
  },
});

export default blogSlice.reducer;