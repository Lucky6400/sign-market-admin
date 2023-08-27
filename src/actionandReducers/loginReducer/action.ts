import { ILoginData } from './interface';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginDataSlice } from './reducer';
import { IRootState } from '../../store';
import axios from 'axios';

export const {
  loginDataFetchStart,
  loginDataFetchFail,
  loginDataFetchSuccess,
  loginDataReset,
} = loginDataSlice.actions;

export const fetchLoginData = createAsyncThunk<
  void,
  {
    onSuccessCb?: () => void;
    onFailureCb?: (message: string) => void;
    email: string;
    password: string;
  },
  { state: IRootState }
>(
  'loginData/fetchLoginData',
  async ({ onFailureCb, onSuccessCb, email, password }, { dispatch }) => {
    try {
      dispatch(loginDataFetchStart());
      const data = await axios.post(
        `${import.meta.env.VITE_BASE_API_URL}/users/login`,
        { email, password }
      );
      if ((data?.data as ILoginData).isAdmin) {
        dispatch(loginDataFetchSuccess(data?.data as ILoginData));

        if (onSuccessCb) {
          onSuccessCb();
        }
      } else {
        if (onFailureCb) {
          onFailureCb('The user is not an admin');
        }
        dispatch(loginDataFetchFail('the user is not a admin'));
      }
    } catch (err) {
      const message =
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (err as any)?.response?.data?.error ||
        'Something went wrong,Please try again';
      if (onFailureCb) {
        onFailureCb(message);
      }
      dispatch(loginDataFetchFail(message));
    }
  }
);
