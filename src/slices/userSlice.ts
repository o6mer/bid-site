import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store";
import { IUser } from "@/types/types";

const initialState: IUser | undefined = {
  username: "",
  email: "",
  password: "",
  _id: "",
  role: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    init: (state, action: PayloadAction<IUser>) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { init } = userSlice.actions;

export const userSelector = (state: RootState) => state.user;

export default userSlice.reducer;
