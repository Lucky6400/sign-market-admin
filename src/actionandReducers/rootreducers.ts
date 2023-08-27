import { combineReducers } from "@reduxjs/toolkit";
import loginDataReducer from "../actionandReducers/loginReducer/reducer";


export const rootReducers = combineReducers({
  loginData: loginDataReducer,
});