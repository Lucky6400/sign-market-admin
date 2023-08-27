import { productDataSlice } from './reducer';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IRootState } from '../../store';
import { IProductData, IProductUploadResponse } from './interface';
import axios from 'axios';
import { IProductPayloadData } from '../../interface/product';

export const {
  productDataFetchFail,
  productDataFetchStart,
  productDataFetchSuccess,
  productUploadFail,
  productUploadStart,
  productUploadSuccess,
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

export const postProductData = createAsyncThunk<
  void,
  {
    payload: IProductPayloadData;
    onSuccessCb?: () => void;
    onFailureCb?: (message: string) => void;
  },
  { state: IRootState }
>(
  'productData/postPrductData',
  async ({ onFailureCb, onSuccessCb, payload }, { dispatch }) => {
    try {
      dispatch(productUploadStart());
      const { name, countInStock, description, image, brand, price } = payload;
      if (
        !name ||
        !countInStock ||
        !description ||
        !image ||
        !brand ||
        !price
      ) {
        if (onFailureCb) {
          onFailureCb('Plese Fill all the parameters to proceed');
        }
        return;
      }
      const payloadFormData = new FormData();
      payloadFormData.append('name', name);
      payloadFormData.append('countInStock', String(countInStock));
      payloadFormData.append('description', description);
      payloadFormData.append('brand', brand);
      payloadFormData.append('price', String(price));
      payloadFormData.append('image', image);

      const data = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}/products`,
        payloadFormData
      );
      dispatch(productUploadSuccess(data?.data as IProductUploadResponse));
      if (onSuccessCb) {
        onSuccessCb();
      }
    } catch (err) {
      const message =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (err as any)?.response?.data?.error ||
        'Something went wrong,Please try again';
      dispatch(productUploadFail(message));
      if (onFailureCb) {
        onFailureCb(message);
      }
    }
  }
);
