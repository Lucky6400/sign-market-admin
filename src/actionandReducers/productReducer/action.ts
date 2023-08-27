import { productDataSlice } from './reducer';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IRootState } from '../../store';
import { IProductData } from './interface';
import axios from 'axios';

export const {
  productDataFetchFail,
  productDataFetchStart,
  productDataFetchSuccess,
} = productDataSlice.actions;

export const fetchProductData = createAsyncThunk<
  void,
  {
    onSuccessCb?: () => void;
    onFailureCb?: (message: string) => void;
  },
  { state: IRootState }
>(
  'productData/fetchPrductData',
  async ({ onFailureCb, onSuccessCb }, { dispatch }) => {
    try {
      dispatch(productDataFetchStart());
      const data = await axios.get(
        `${import.meta.env.VITE_BASE_API_URL}/products`
      );

      dispatch(productDataFetchSuccess(data?.data as IProductData[]));

      if (onSuccessCb) {
        onSuccessCb();
      }
    } catch (err) {
      const message =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (err as any)?.response?.data?.error ||
        'Something went wrong,Please try again';
      if (onFailureCb) {
        onFailureCb(message);
      }
      dispatch(productDataFetchFail(message));
    }
  }
);
