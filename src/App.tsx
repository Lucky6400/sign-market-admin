import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import ECommerce from './pages/Dashboard/ECommerce';
import SignIn from './pages/Authentication/SignIn';

import Loader from './common/Loader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector } from './hooks/useRedux';
import UploadProduct from './pages/upload';

const Calendar = lazy(() => import('./pages/Calendar'));
const Chart = lazy(() => import('./pages/Chart'));
const FormElements = lazy(() => import('./pages/Form/FormElements'));
const FormLayout = lazy(() => import('./pages/Form/FormLayout'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));
const Tables = lazy(() => import('./pages/Tables'));
const Alerts = lazy(() => import('./pages/UiElements/Alerts'));
const Buttons = lazy(() => import('./pages/UiElements/Buttons'));
const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const isLoggedIn = useAppSelector((state) => state?.loginData?.data?.token);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/auth/signin');
    } else {
      navigate('/');
    }
  }, [isLoggedIn]);

  return loading ? (
    <Loader />
  ) : (
    <>
      {!isLoggedIn ? (
        <Routes>
          <Route path="/auth/signin" element={<SignIn />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/auth/signin" element={<SignIn />} />

          <Route element={<DefaultLayout />}>
            <Route index element={<ECommerce />} />
            <Route
              path="/calendar"
              element={
                <Suspense fallback={<Loader />}>
                  <Calendar />
                </Suspense>
              }
            />
              <Route
              path="/uploadProduct"
              element={
                <Suspense fallback={<Loader />}>
                  <UploadProduct />
                </Suspense>
              }
            />
            <Route
              path="/profile"
              element={
                <Suspense fallback={<Loader />}>
                  <Profile />
                </Suspense>
              }
            />
            <Route
              path="/forms/form-elements"
              element={
                <Suspense fallback={<Loader />}>
                  <FormElements />
                </Suspense>
              }
            />
            <Route
              path="/forms/form-layout"
              element={
                <Suspense fallback={<Loader />}>
                  <FormLayout />
                </Suspense>
              }
            />
            <Route
              path="/tables"
              element={
                <Suspense fallback={<Loader />}>
                  <Tables />
                </Suspense>
              }
            />
            <Route
              path="/settings"
              element={
                <Suspense fallback={<Loader />}>
                  <Settings />
                </Suspense>
              }
            />
            <Route
              path="/chart"
              element={
                <Suspense fallback={<Loader />}>
                  <Chart />
                </Suspense>
              }
            />
            <Route
              path="/ui/alerts"
              element={
                <Suspense fallback={<Loader />}>
                  <Alerts />
                </Suspense>
              }
            />
            <Route
              path="/ui/buttons"
              element={
                <Suspense fallback={<Loader />}>
                  <Buttons />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      )}

      <ToastContainer theme="dark" autoClose={3000} />
    </>
  );
}

export default App;
