import './link.scss';
import View from "../../view";
import { TLinkProps } from '../../../interfaces/interfaces';

export default class LinkView extends View {
  linkElems: LinkView[];

  constructor(linkProps: TLinkProps, linkElems: LinkView[]) {
    const param = {
      tag: 'a',
      classes: ['link'],
      text: linkProps.text,
      callback: linkProps.callback
    }
    super(param);

    this.linkElems = linkElems;
    this.configureView();
  }

  setSelectedStatus() {
    this.linkElems.forEach(elem => {
      elem.setNotSelectedStatus();
    })

    const element = this.elementCreator.getElement();
    element.classList.add('active-link');
  }

  setNotSelectedStatus() {
    const element = this.elementCreator.getElement();
    element.classList.remove('active-link');
  }

  configureView() {
    const link = this.elementCreator.getElement();
    link.addEventListener('click', this.setSelectedStatus.bind(this));
  }
}