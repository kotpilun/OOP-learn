import { TRoute } from "../interfaces/interfaces";
import FooterView from "../view/footer/footer-view";
import HeaderView from "../view/header/header-view";
import IndexView from "../view/main/index/index-view";
import MainView from "../view/main/main-view";
import NotFoundView from "../view/main/not-found/not-found-view";
import ProductView from "../view/main/product/product-view";
import View from "../view/view";
import { ID_SELECTOR, Pages } from "./router/pages";
import Router from "./router/router";

export default class App {
  router: Router;
  header: HeaderView | null;
  main: MainView | null;

  constructor() {
    this.header = null;
    this.main = null;

    const routes = this.createRoutes();
    console.log(routes);
    this.router = new Router(routes);

    this.createView();
  }

  createView() {
    this.header = new HeaderView(this.router);
    this.main = new MainView();
    const footerView = new FooterView();

    // mainView.setContent(new IndexView());

    document.body.append(
      this.header.getHtmlElement(), 
      this.main.getHtmlElement(), 
      footerView.getHtmlElement()
    );
  }

  createRoutes(): TRoute[] {
    return [
      {
        path: ``,
        callback: () => {
          this.setContent(Pages.INDEX, new IndexView());
        },
      },
      {
        path: `${Pages.INDEX}`,
        callback: () => {
          this.setContent(Pages.INDEX, new IndexView());
        },
      },
      {
        path: `${Pages.PRODUCT}`,
        callback: () => {
          this.setContent(Pages.PRODUCT, new ProductView('', this.router));
        },
      },
      {
        path: `${Pages.PRODUCT}/${ID_SELECTOR}`,
        callback: (id: string) => {
          this.setContent(Pages.PRODUCT, new ProductView(id, this.router));
        },
      },
      {
        path: `${Pages.NOT_FOUND}`,
        callback: () => {
          this.setContent(Pages.INDEX, new NotFoundView());
        },
      },
    ];
  }

  setContent(pageName: string, view: View) {
    this.header?.setSelectedItem(pageName);
    this.main?.setContent(view);
  }
}