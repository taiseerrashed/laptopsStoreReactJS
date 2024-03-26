import { createSlice } from "@reduxjs/toolkit";

const loadUserFromStorage = () => {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    online: false,
    users: [],
    currentUser: loadUserFromStorage(),
  },
  reducers: {
    login: (state , action) => {
      state.online = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.online = false;
      state.currentUser = null;
    },
    addUser: (state, action) => {
      state.users.push({ ...action.payload });
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, addUser } = userSlice.actions;

export default userSlice.reducer;
