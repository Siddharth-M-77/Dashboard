import React from 'react';
import MainDashboard from './components/MainDashboard';
import "remixicon/fonts/remixicon.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainDashboard />,
      children: [
        {
          path: "/",
          element: <Dashboard />
        },
        {
          path: "/Dashboard",
          element: <Dashboard />
        },
        {
          path: "/transaction",
          element: <Transactions />
        }
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
