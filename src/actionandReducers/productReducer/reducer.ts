import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProductReducerState } from './interface';

export const initialState: IProductReducerState = {
  isLoading: false,
  error: '',
  data: [],
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
  },
});

export default productDataSlice.reducer;
