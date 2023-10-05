import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NewTicket from './pages/NewTicket';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/new-ticket',
        element: <PrivateRoute />,
        children: [{ index: true, element: <NewTicket /> }],
      },
    ],
  },
]);

export default router;
