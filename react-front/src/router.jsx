import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './views/Login';
import Signup from './views/Signup';
import NotFound from './views/NotFound';
import Main from './views/Main';
import User from './views/User';

import AuthLayout from './components/AuthLayout';
import UserLayout from './components/UserLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/user',
        element: <UserLayout />,
        children: [
            {
                path: 'info',
                element: <User />
            },
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            },
            {
                index: true,
                element: <Navigate to="login" replace />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

export default router;
