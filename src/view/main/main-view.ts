import './main.scss';
import View from "../view";

export default class MainView extends View {
  constructor() {
    const param = {
      tag: 'main',
      classes: ['main'],
      text: 'TEXT IN MAIN',
    }

    super(param);
  }

  setContent(view: View) {
    const currentElement = this.elementCreator.getElement();
    const element = view.elementCreator.getElement();

    currentElement.innerHTML = '';

    this.elementCreator.addInnerElement(element);
  }
}