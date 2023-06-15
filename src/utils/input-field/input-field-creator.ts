import { TElementCreator } from '../../interfaces/interfaces';
import ElementCreator from '../element-creator';
import './input-field.scss';

export default class InputFieldCreator extends ElementCreator {
  inputElement: HTMLElement|undefined;
  labelElement: HTMLElement|undefined;

  constructor(param: TElementCreator) {
    super(param);

    this.createElement(param);
  }

  createElement(param: TElementCreator) {
    this.element = document.createElement('div');

    this.setCssClasses(param.classes);

    if (param.callback) {
      this.setCallback(param.callback);
    }

    this.inputElement = document.createElement('input');
    this.labelElement = document.createElement('LABEL');

    if (param.text) {
      this.setTextContent(param.text);
    }

    if (param.text) {
      this.setTextContent(param.text);
    }

    this.element.append(this.labelElement, this.inputElement);
  }

  setTextContent(text: string) {
    this.labelElement!.textContent = text;
  }

  setCallback(callback: Function) {
    if (callback) {
      this.element?.addEventListener('keyup', (event) => callback(event));
    }
  }
}