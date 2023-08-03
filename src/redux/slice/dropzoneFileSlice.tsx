import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DropzoneFileState {
  videoFileName: string;
  errorMessage: string;
  successMessage: string;
}

const initialState: DropzoneFileState = {
  videoFileName: "",
  errorMessage: "",
  successMessage: "",
};

const dropzoneFileSlice = createSlice({
  name: "dropzoneFile",
  initialState,
  reducers: {
    setVideoFileName: (state, action: PayloadAction<string>) => {
      state.videoFileName = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
    setSuccessMessage: (state, action: PayloadAction<string>) => {
      state.successMessage = action.payload;
    },
    reset: () => initialState,
  },
});

export const { setVideoFileName, setErrorMessage, setSuccessMessage, reset } =
  dropzoneFileSlice.actions;
export default dropzoneFileSlice.reducer;
