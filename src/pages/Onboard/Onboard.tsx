import React, { lazy, LazyExoticComponent, Suspense } from 'react';
import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import { CommonLayout } from './layout';

import MainLayout from './layout/MainLayout';
import { Welcome } from './pages/Welcome';

// const MainLayout: LazyExoticComponent<React.ComponentType<any>> = lazy(() =>
//   import('./layout/MainLayout')
// );
function Onboard() {
  return (
    <CommonLayout>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/*"
            element={
              <Suspense>
                <MainLayout />
              </Suspense>
            }
          />
        </Routes>
      </HashRouter>
    </CommonLayout>
  );
}

export default Onboard;
