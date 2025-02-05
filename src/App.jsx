import React from 'react';
import MainDashboard from './components/MainDashboard';
import "remixicon/fonts/remixicon.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Accounts from './pages/Accounts';
import Investment from './pages/Investment';
import CreditCard from './pages/CreditCard';
import Loans from './pages/Loans';
import Services from './pages/Services';
import Settings from './pages/Settings';

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
        },
        {
          path: "/Accounts",
          element: <Accounts />
        },
        {
          path: "/Investments",
          element: <Investment />
        },
        {
          path: "/credit-card",
          element: <CreditCard />
        },
        {
          path: "/loans",
          element: <Loans />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/settings",
          element: <Settings />
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
