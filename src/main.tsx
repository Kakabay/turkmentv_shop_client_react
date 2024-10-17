import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LotNumber from './pages/LotNumber.tsx';
import Home from './pages/Auth.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'lot/:lot_number', element: <LotNumber />, errorElement: <p>ERROR</p> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
