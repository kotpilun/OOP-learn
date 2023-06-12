import { TElementCreator } from "../interfaces/interfaces";


export default class ElementCreator {
  element: HTMLElement|undefined;

  constructor(param: TElementCreator) {
    this.element = undefined;
    this.createElement(param);
  }

  createElement(param: TElementCreator) {
    if (param.tag) {
      this.element = document.createElement(param.tag);
    }
    this.setCssClasses(param.classes);
    if (param.text) {
      this.setTextContent(param.text);
    }
    if (param.callback) {
      this.setCallback(param.callback);
    }
  }
  
  getElement() {
    return this.element!;
  }

  setCssClasses(cssClasses: string[]) {
    this.element?.classList.add(...cssClasses);
  }

  setTextContent(text: string) {
    this.element!.textContent = text;
  }

  setCallback(callback: Function) {
    if (callback) {
      // this.element?.addEventListener('click', callback);
      this.element?.addEventListener('click', (event) => callback(event));
    }
  }

  addInnerElement(element: HTMLElement) {
    if (this.element) {
      this.element.append(element);
    }
  }

}