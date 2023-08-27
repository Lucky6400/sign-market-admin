export interface ILoginReducerState {
  isLoading: boolean;
  error: string;
  data: ILoginData;
}

export interface ILoginData {
  name: string;
  email: string;
  token: string;
  isAdmin: boolean;
}
