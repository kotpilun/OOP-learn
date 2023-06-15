import './card-detail.scss';
import CardView from '../card/card-view';
import ElementCreator from '../../../../utils/element-creator';
import { TElementCreator } from '../../../../interfaces/interfaces';
import { Pages } from '../../../../app/router/pages';

export default class CardsDetailView extends CardView  {
  configureView() {
    this.elementCreator.setCssClasses(['card-detail']);

    let labelParams: TElementCreator = {
        tag: 'label',
        classes: ['card-detail-label'],
        text: this.card.name,
        callback: undefined,
    };

    let creatorLabel = new ElementCreator(labelParams);
    this.elementCreator.addInnerElement(creatorLabel.getElement());

    labelParams = {
        tag: 'label',
        classes: ['card-detail-label'],
        text: this.card.description,
        callback: undefined,
    };
    creatorLabel = new ElementCreator(labelParams);
    this.elementCreator.addInnerElement(creatorLabel.getElement());

    const buttonParams: TElementCreator = {
        tag: 'button',
        classes: ['card-detail-button'],
        text: 'Back',
        callback: this.buttonClickHandler.bind(this, `${Pages.PRODUCT}`),
    };
    const creatorButton = new ElementCreator(buttonParams);
    this.elementCreator.addInnerElement(creatorButton.getElement());
  }
}