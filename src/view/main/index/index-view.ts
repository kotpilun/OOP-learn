import { TElementCreator } from '../../../interfaces/interfaces';
import InputFieldCreator from '../../../utils/input-field/input-field-creator';
import View from '../../view';
import './index.scss';

export default class IndexView extends View {
  firstField:string|undefined;
  secondField:string|undefined;
  [key: string]: any;

  constructor() {
    const param = {
      tag: 'section',
      classes: ['main-section'],
    }

    super(param);

    this.configureView();
  }

  configureView() {
    let paramsInput:TElementCreator = {
      classes: ['input-wrapper'],
      text: 'Input text',
      callback: (event: Event) => this.keyupHandler(event, 'firstField')
    }
    
    let inputCreator = new InputFieldCreator(paramsInput);
    this.elementCreator.addInnerElement(inputCreator.getElement());

    paramsInput = {
      tag: 'input',
      classes: ['input-wrapper'],
      text: 'Input text 2',
      callback: (event: Event) => this.keyupHandler(event, 'secondField')
    }

    inputCreator = new InputFieldCreator(paramsInput);
    this.elementCreator.addInnerElement(inputCreator.getElement());
  }

  keyupHandler(event: Event, fieldName: keyof IndexView) {
    if (event.target instanceof HTMLInputElement) {
      this[fieldName] = event.target.value;
    }
  }
}
