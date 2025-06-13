
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';


const Home = lazy(() => import('../Home'));
const Files = lazy(() => import('../pages/Files'));
const Tom = lazy(() => import('../pages/User/Tom'));
const Bill = lazy(() => import('../pages/User/Bill'));
const Alex = lazy(() => import('../pages/User/Alex'));
const Team1 = lazy(() => import('../pages/Team/Team1'));
const Team2 = lazy(() => import('../pages/Team/Team2'));
const Option1 = lazy(() => import('../pages/Option/Option1'));
const Option2 = lazy(() => import('../pages/Option/Option2'));
const AppRoutes = () => {
  return (
    <Suspense fallback={<div style={{textAlign: 'center', marginTop: 260}}>Loading...</div>}>
      <Routes>
        <Route path="/files" element={<Files />} />
        <Route path="/user/tom" element={<Tom />} />
        <Route path="/user/bill" element={<Bill />} />
        <Route path="/user/alex" element={<Alex />} />
        <Route path="/team/1" element={<Team1 />} />
        <Route path="/team/2" element={<Team2 />} />
        <Route path="1" element={<Option1/>} />
        <Route path="2" element={<Option2/>} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
