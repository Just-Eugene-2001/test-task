import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const loadBooks = createAsyncThunk(
  'books/loadBooks',
  async function() {
    // const json = await fetch('https://gutendex.com/books').then(response => response.json());
    // return json;
  }
)

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    data: [],
    waiting: false,
    error: null,
    showLiked: false
  },
  reducers: {
    remove(state, action) {
      const index = state.data.findIndex(e => e.id === action.payload);
      state.data.splice(index, 1);
    },
    liked(state, action) {
      const index = state.data.findIndex(e => e.id === action.payload);
      state.data[index].liked = !state.data[index].liked;
    },
    showLiked(state) {
      state.showLiked = !state.showLiked;
    }
  },
  extraReducers: {
    [loadBooks.pending]: (state) => {
      state.waiting = true;
      state.error = null;
    },
    [loadBooks.fulfilled]: (state, action) => {
      state.waiting = false;
      state.data = action.payload.results;
      state.data.forEach(element => {
        element.liked = false;
      });
    },
    [loadBooks.rejected]: (state, action) => {
      state.waiting = false;
      state.error = action.payload;
    },
  }
})

export const { remove, liked, showLiked } = booksSlice.actions;
export default booksSlice.reducer;
