import './header.scss';
import View from '../view';
import ElementCreator from '../../utils/element-creator';
import LinkView from './link/link-view';

const linkProps = [
  {text: 'MAIN', callback: () => {console.log(1);}},
  {text: 'CARDS', callback: () => {console.log(2);}}
];

const START_PAGE_INDEX = 0;

export default class HeaderView extends View {
  linkElems:LinkView[]

  constructor() {
      const param = {
        tag: 'header',
        classes: ['header'],
      }

    super(param);
    
    this.linkElems = [];
    this.configureView();
  }


  configureView() {
    /// add nav
    const paramsNav = {
      tag: 'nav',
      classes: ['nav'],
    }

    const creatorNav = new ElementCreator(paramsNav);
    this.elementCreator.addInnerElement(creatorNav.getElement())
    // creatorNav.addInnerElement(this.elementCreator.getElement());


    /// add links on nav
    linkProps.forEach((link, index) => {
      const linkView = new LinkView(link, this.linkElems);


      creatorNav.addInnerElement(linkView.getHtmlElement())

      this.linkElems.push(linkView);

      if (index === START_PAGE_INDEX) {
        linkView.setSelectedStatus();
      }
    })
  }

}