import { TRoute } from "../interfaces/interfaces";
import FooterView from "../view/footer/footer-view";
import HeaderView from "../view/header/header-view";
import MainView from "../view/main/main-view";
import View from "../view/view";
import { ID_SELECTOR, Pages } from "./router/pages";
import Router from "./router/router";
import State from "./state/state";

export default class App {
  router: Router;
  header: HeaderView | null;
  main: MainView | null;

  constructor() {
    this.header = null;
    this.main = null;

    const state = new State();
    const routes = this.createRoutes(state);
    console.log(routes);
    this.router = new Router(routes);

    this.createView();
  }

  createView() {
    this.header = new HeaderView(this.router);
    this.main = new MainView();
    const footerView = new FooterView();

    document.body.append(
      this.header.getHtmlElement(), 
      this.main.getHtmlElement(), 
      footerView.getHtmlElement()
    );
  }

  createRoutes(state: State): TRoute[] {
    return [
      {
        path: ``,
        callback: async () => {
          const { default: IndexView } = await import('../view/main/index/index-view');
          this.setContent(Pages.INDEX, new IndexView(state));
        },
      },
      {
        path: `${Pages.INDEX}`,
        callback: async () => {
          const { default: IndexView } = await import('../view/main/index/index-view');
          this.setContent(Pages.INDEX, new IndexView(state));
        },
      },
      {
        path: `${Pages.PRODUCT}`,
        callback: async () => {
          const { default: ProductView } = await import('../view/main/product/product-view');
          this.setContent(Pages.PRODUCT, new ProductView('', this.router));
        },
      },
      {
        path: `${Pages.PRODUCT}/${ID_SELECTOR}`,
        callback: async (id: string) => {
          const { default: ProductView } = await import('../view/main/product/product-view');
          this.setContent(Pages.PRODUCT, new ProductView(id, this.router));
        },
      },
      {
        path: `${Pages.NOT_FOUND}`,
        callback: async () => {
          const { default: NotFoundView } = await import('../view/main/not-found/not-found-view');
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