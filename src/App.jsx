import React from 'react';
import MainDashboard from './components/MainDashboard';
import "remixicon/fonts/remixicon.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Dashboard from './pages/Dashboard';

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainDashboard />,
      children:[
        {
          path:"/",
          element:<Dashboard/>
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
