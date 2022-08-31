const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  tags: [],
  search: "",
  author: false,
  page: 1,
  limit: 4,
};

const filterSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);

      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    toggleAuthor: (state, action) => {
      if (state.author === false) {
        state.author = true;
      } else {
        state.author = false;
      }
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched, setPage, setLimit, toggleAuthor } =
  filterSlice.actions;
