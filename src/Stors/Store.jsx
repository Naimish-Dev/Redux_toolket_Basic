import { configureStore } from "@reduxjs/toolkit";
import usersSlice  from "./Slices/User_Slice";

const Store = configureStore({
  reducer: {
    users:usersSlice,
  },
});

export default Store