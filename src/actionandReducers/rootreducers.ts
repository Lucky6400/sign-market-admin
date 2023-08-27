import { combineReducers } from '@reduxjs/toolkit';
import loginDataReducer from '../actionandReducers/loginReducer/reducer';
import productDataReducer from '../actionandReducers/productReducer/reducer';

export const rootReducers = combineReducers({
  loginData: loginDataReducer,
  productData: productDataReducer,
});
