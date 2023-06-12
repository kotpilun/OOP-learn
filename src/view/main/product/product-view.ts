import './product.scss';
import View from '../../view';
import cardsInfo from '../../../data/cards';
import CardView from './card/card-view';
import { TCardInfo } from '../../../interfaces/interfaces';

export default class ProductView extends View {
  constructor() {
    const param = {
      tag: 'section',
      classes: ['product-section'],
    }

    super(param);

    this.configureView();
  }

  configureView() {
    cardsInfo.forEach((card: TCardInfo) => {
      const cardView = new CardView(card);
      this.elementCreator.addInnerElement(cardView.getHtmlElement())
    })
  }
}