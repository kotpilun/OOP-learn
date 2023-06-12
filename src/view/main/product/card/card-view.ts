import './card.scss';
import View from '../../../view';
import ElementCreator from '../../../../utils/element-creator';
import { TCardInfo } from '../../../../interfaces/interfaces';

export default class CardView extends View {
  constructor(card: TCardInfo) {
    const param = {
      tag: 'section',
      classes: ['card'],
    }
  
    super(param);
  
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
    }
    const buttonCreator = new ElementCreator(paramsButton);

    this.elementCreator.addInnerElement(labelCreator.getElement());
    this.elementCreator.addInnerElement(buttonCreator.getElement());
  }

  
}