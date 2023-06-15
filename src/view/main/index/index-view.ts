import State from '../../../app/state/state';
import { TElementCreator } from '../../../interfaces/interfaces';
import InputFieldCreator from '../../../utils/input-field/input-field-creator';
import View from '../../view';
import './index.scss';

export default class IndexView extends View {
  [key: string]: any;
  state: State;

  constructor(state: State) {
    const param = {
      tag: 'section',
      classes: ['main-section'],
    }

    super(param);

    this.state = state;
    this.configureView();
  }

  configureView() {
    let paramsInput:TElementCreator = {
      classes: ['input-wrapper'],
      text: 'Input1 text',
      callback: (event: Event) => this.keyupHandler(event, 'firstField'),
    }
    
    let inputCreator = new InputFieldCreator(paramsInput);
    inputCreator.setValue(this.state.getValue('firstField')!);
    this.elementCreator.addInnerElement(inputCreator.getElement());

    paramsInput = {
      tag: 'input',
      classes: ['input-wrapper'],
      text: 'Input2 text',
      callback: (event: Event) => this.keyupHandler(event, 'secondField'),
    }

    inputCreator = new InputFieldCreator(paramsInput);
    inputCreator.setValue(this.state.getValue('secondField')!);
    this.elementCreator.addInnerElement(inputCreator.getElement());
  }

  keyupHandler(event: Event, fieldName: string) {
    if (event.target instanceof HTMLInputElement) {
      this.state.setValue(fieldName, event.target.value)
    }
  }
}
