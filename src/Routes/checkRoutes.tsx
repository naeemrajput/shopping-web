import { IRoute, ROUTES } from "../Routes/routes";

/**
 * It takes a path, finds the route that matches that path, and returns the route
 * @param {string} path - string =&gt; the path that you want to match
 * @returns The return type is IRoute.
 */
export const matchRoute = (path: string): IRoute => {
  const route = ROUTES.SHOPING_ROUTES;
  const allRoutes = route.map(r => r.submenu ? r.submenu : r).flat(2);

  return allRoutes.find((route) => route.path === path) as IRoute;
};

/**
 * It checks if the user has the role to access the route
 * @param {string[] | undefined} roles - string[] | undefined =&gt; this is the roles that the user has
 * @param {string[]} routeRoles - ['department', 'district']
 * @returns returns a boolean.
 */
 export const checkRouteBasedOnRoles = (
  roles: string[] | undefined,
  routeRoles: string[]
) => {

  function findCommonRoles(roles: string[] | undefined, routeRoles: string[]) {
    return roles?.some(item => routeRoles?.includes(item))
  }

  let isPresent = findCommonRoles(roles, routeRoles);
  return isPresent;
};