// router.jsx

import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/homepage/Homepage';
import Login from '../pages/login/Login';
import Profile from '../pages/profile/Profile';
import ErrorPage from '../pages/errorpage/Error';

const RouterComponent = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default RouterComponent;
