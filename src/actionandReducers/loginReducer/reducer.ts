import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ILoginData, ILoginReducerState } from './interface';
import { getLocalStorageData, setLocalStorageData } from '../../utils/storage';
import { LocalStorageIdEnum } from '../../enum/utility.enum';

export const initialState: ILoginReducerState = {
  isLoading: false,
  error: '',
  data: getLocalStorageData<ILoginData>(
    LocalStorageIdEnum.SIGNS_LOGIN_DATA,
    {} as ILoginData
  ),
};

export const loginDataSlice = createSlice({
  name: 'loginData',
  initialState,
  reducers: {
    loginDataFetchStart: (state) => {
      setLocalStorageData<ILoginData>(
        LocalStorageIdEnum.SIGNS_LOGIN_DATA,
        {} as ILoginData
      );

      return {
        ...state,
        isLoading: true,
        error: '',
        data: {} as ILoginData,
      };
    },
    loginDataFetchSuccess: (
      state,
      { payload }: PayloadAction<ILoginReducerState['data']>
    ) => {
      setLocalStorageData<ILoginData>(
        LocalStorageIdEnum.SIGNS_LOGIN_DATA,
        payload
      );
      return { ...state, isLoading: false, error: '', data: payload };
    },
    loginDataFetchFail: (
      state,
      { payload }: PayloadAction<ILoginReducerState['error']>
    ) => {
      setLocalStorageData<ILoginData>(
        LocalStorageIdEnum.SIGNS_LOGIN_DATA,
        {} as ILoginData
      );
      return {
        ...state,
        isLoading: false,
        error: payload,
        data: {} as ILoginData,
      };
    },
    loginDataReset: (state) => {
      setLocalStorageData<ILoginData>(
        LocalStorageIdEnum.SIGNS_LOGIN_DATA,
        {} as ILoginData
      );

      return {
        ...state,
        isLoading: false,
        error: '',
        data: {} as ILoginData,
      };
    },
  },
});

export default loginDataSlice.reducer;
