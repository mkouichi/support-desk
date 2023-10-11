import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NewTicket from './pages/NewTicket';
import Tickets from './pages/Tickets';
import Ticket from './pages/Ticket';

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
      {
        path: '/tickets',
        element: <PrivateRoute />,
        children: [{ index: true, element: <Tickets /> }],
      },
      {
        path: '/ticket/:ticketId',
        element: <PrivateRoute />,
        children: [{ index: true, element: <Ticket /> }],
      },
    ],
  },
]);

export default router;
