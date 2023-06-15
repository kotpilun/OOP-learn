import './product.scss';
import View from '../../view';
import cardsInfo from '../../../data/cards';
import CardView from './card/card-view';
import { TCardInfo } from '../../../interfaces/interfaces';
import CardDetailView from './card-detail/card-detail-view'
import Router from '../../../app/router/router';

export default class ProductView extends View {
  constructor(id = '', router: Router) {
    const param = {
      tag: 'section',
      classes: ['product-section'],
    }

    super(param);

    if (id) {
      this.showLargeCard(id, router)
    } else {
      this.showAllCards(router);
    }
  }

  showAllCards(router: Router) {
    cardsInfo.forEach((card: TCardInfo) => {
      const smallCardComponent = new CardView(card, router);
      this.elementCreator.addInnerElement(smallCardComponent.getHtmlElement())
    })
  }

  showLargeCard(id: string, router: Router) {
    const selectedCard = cardsInfo.find(card => card.id == id);
    const largeCardComponent = new CardDetailView(selectedCard!, router);

    this.elementCreator.addInnerElement(largeCardComponent.getHtmlElement());
  } 
}