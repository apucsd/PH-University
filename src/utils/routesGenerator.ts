import { TRoutes, TUserPath } from "../types";

export const routesGenerator = (items: TUserPath[]) => {
  const routes = items.reduce((acc: TRoutes[], item) => {
    if (item.name && item.path) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);

  return routes;
};
