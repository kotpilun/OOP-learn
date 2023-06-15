import './card.scss';
import View from '../../../view';
import ElementCreator from '../../../../utils/element-creator';
import { TCardInfo } from '../../../../interfaces/interfaces';
import Router from '../../../../app/router/router';
import { Pages } from '../../../../app/router/pages';

export default class CardView extends View {
  callback: Function|undefined;
  card: TCardInfo;
  router: Router;

  constructor(card: TCardInfo, router: Router) {
    const param = {
      tag: 'div',
      classes: ['card'],
    }
  
    super(param);

    this.router = router;
    this.card = card;
    this.configureView(card);
  }

  configureView(card: TCardInfo) {
    const paramsLabel = {
      tag: 'label',
      classes: ['card__field'],
      text: card.name,
    }
    const labelCreator = new ElementCreator(paramsLabel);
    
    const paramsButton = {
      tag: 'button',
      classes: ['card__button'],
      text: 'View',
      callback: this.buttonClickHandler.bind(this, `${Pages.PRODUCT}/${this.card.id}`),
    }

    const buttonCreator = new ElementCreator(paramsButton);

    this.elementCreator.addInnerElement(labelCreator.getElement());
    this.elementCreator.addInnerElement(buttonCreator.getElement());
  }

  // setCallback(callback: Function) {
  //   this.callback = callback;
  // }

  buttonClickHandler(path: string) {
    this.router.navigate(path);
  }

  getCardInfo() {
    return this.card;
  }

  
}