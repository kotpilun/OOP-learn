import { TRequest, TRoute } from "../../interfaces/interfaces";
import { ID_SELECTOR, Pages } from "./pages";

export default class Router {
  routes: TRoute[];

  constructor(routes: TRoute[]) {
    this.routes = routes;
  }

  navigate(url: string) {
    const request = this.parseUrl(url);

    const pathForFind = request.resource === '' ? request.path : `${request.path}/${ID_SELECTOR}`;
    const route = this.routes.find(item => item.path === pathForFind);

    if (!route) {
      this.redirectToNotFound();
      return;
    }

    route.callback(request.resource);
  }
  
  redirectToNotFound() {
    const routeNotFound = this.routes.find(item => item.path === Pages.NOT_FOUND);
    if (routeNotFound) {
      this.navigate(routeNotFound.path)
    }
  }

  parseUrl(url: string) {
    const result: TRequest = {
      path: '',
      resource: ''
    };

    const path = url.split('/');
    [result.path = '', result.resource = ''] = path;

    return result;
  }
}