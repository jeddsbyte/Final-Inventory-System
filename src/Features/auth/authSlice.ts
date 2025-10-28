import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface User {
  email: string;
  userName: string;
   userId: number;
  profileURL?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
 }

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        email: string;
        userName: string;
          userId: number;
        token: string;
          profileURL?: string;
      }>
    ) => {
      const {
        email,
        userName,
          userId,
        token,
            profileURL,
      } = action.payload;
      console.log("Payload:", action.payload);


      state.user = {
        email,
        userName,
          userId,
        profileURL,
      };
      state.token = token;
       state.isAuthenticated = true;
    },
    clearCredentials: (state) => {
      state.user = null;
      state.token = null;
        state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;