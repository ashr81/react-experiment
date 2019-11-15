import { lazy } from 'react';
// import RouteLink from './RouteLink';

const Navbar = lazy(() => import('./Navbar'));
const RouteLink = lazy(() => import('./RouteLink'));
const NavbarRouteLink = lazy(() => import('./NavbarRouteLink'))
const MainLayout = lazy(() => import('./MainLayout'));
const SelectInput = lazy(() => import('./SelectInput'));
const Text = lazy(() => import('./Text'));

export {
  Navbar,
  RouteLink,
  NavbarRouteLink,
  MainLayout,
  SelectInput,
  Text
}