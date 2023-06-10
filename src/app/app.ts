import FooterView from "../view/footer/footer-view";
import HeaderView from "../view/header/header-view";
import MainView from "../view/main/main-view";

export default class App {
  constructor() {
    this.createView();
  }

  createView() {
    const headerView = new HeaderView();
    const mainView = new MainView();
    const footerView = new FooterView();

    document.body.append(
      headerView.getHtmlElement(), 
      mainView.getHtmlElement(), 
      footerView.getHtmlElement()
    );

  }
}