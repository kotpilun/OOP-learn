import './footer.scss';
import View from '../view';

export default class FooterView extends View {
  constructor() {
    const param = {
      tag: 'footer',
      classes: ['footer'],
      text: 'TEXT IN FOOTER',
    }

    super(param)
  }

}