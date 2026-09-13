/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { RouterProvider, createBrowserRouter, ScrollRestoration } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { About } from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollRestoration />
        <Layout />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'work',
        element: <Work />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
