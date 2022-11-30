//Layouts
import Dashboard from '~/pages/Dashboard';
import LoginEmp from '~/pages/LoginEmp';
import MovieType from '~/pages/MovieType';
import Cast from '~/pages/Cast';
import Header from '~/pages/Header';

// Public routes
const publicRoutes = [
  { exact: true, path: 'employee/login', component: LoginEmp },
  { exact: true, path: 'dashboard', component: Dashboard },
  { exact: true, path: 'movietype', component: MovieType },
  { exact: true, path: 'cast', component: Cast },
  { exact: true, path: 'header', component: Header },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
