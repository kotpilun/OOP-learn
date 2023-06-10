import { TElementCreator } from "../interfaces/interfaces";
import ElementCreator from "../utils/element-creator";

export default abstract class View {
  elementCreator: ElementCreator;

  constructor(param: TElementCreator) {
    this.elementCreator = this.createView(param);
  }

  getHtmlElement() {
    return this.elementCreator.getElement();
  }

  createView(param: TElementCreator) {
    const elementCreator = new ElementCreator(param);

    return elementCreator;
  }

  // abstract configureView();
}