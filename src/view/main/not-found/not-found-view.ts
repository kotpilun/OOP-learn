import './not-found.scss'
import View from "../../view";

const TEXT_NOT_FOUND = 'Error! Page not found!'

export default class NotFoundView extends View {
  constructor() {
    const param = {
      tag: 'section',
      classes: ['page-not-found'],
    }

    super(param);

    this.configureView();
  }

  configureView() {
    this.elementCreator.setTextContent(TEXT_NOT_FOUND);
  }
}