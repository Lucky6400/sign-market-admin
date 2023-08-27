import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProductReducerState, IProductUploadResponse } from './interface';

export const initialState: IProductReducerState = {
  isLoading: false,
  error: '',
  data: [],
  upload: {
    isUploading: false,
    error: '',
    data: {} as IProductUploadResponse,
  },
};

export const productDataSlice = createSlice({
  name: 'productData',
  initialState,
  reducers: {
    productDataFetchStart: (state) => ({
      ...state,
      isLoading: true,
      error: '',
      data: [],
    }),
    productDataFetchSuccess: (
      state,
      { payload }: PayloadAction<IProductReducerState['data']>
    ) => ({ ...state, isLoading: false, error: '', data: payload }),
    productDataFetchFail: (
      state,
      { payload }: PayloadAction<IProductReducerState['error']>
    ) => ({ ...state, isLoading: false, error: payload, data: [] }),
    productUploadStart: (state) => ({
      ...state,
      upload: {
        ...state.upload,
        isUploading: true,
        error: '',
        data: {} as IProductUploadResponse,
      },
    }),
    productUploadFail: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      upload: {
        ...state.upload,
        isUploading: false,
        error: payload,
        data: {} as IProductUploadResponse,
      },
    }),
    productUploadSuccess: (
      state,
      { payload }: PayloadAction<IProductUploadResponse>
    ) => ({
      ...state,
      upload: {
        ...state.upload,
        isUploading: false,
        error: '',
        data: payload,
      },
    }),
  },
});

export default productDataSlice.reducer;
