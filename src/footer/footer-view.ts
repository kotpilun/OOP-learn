import './footer.scss';
import ElementCreator from "../utils/element-creator";

export default class FooterView {
  elementCreator: ElementCreator;

  constructor() {
    this.elementCreator = this.createView();
  }

  getHtmlElement() {
    return this.elementCreator.getElement();
  }

  createView() {
    const param = {
      tag: 'footer',
      classes: ['footer'],
      text: 'TEXT IN FOOTER',
      calllback: this.addStyle
    }
    const elementCreator = new ElementCreator(param);

    return elementCreator;
  }

  addStyle(event: MouseEvent) {
    const target = event.target as HTMLElement;

    target.classList.toggle('red');
  }
}