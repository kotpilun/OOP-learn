import './header.scss';
import View from '../view';
import ElementCreator from '../../utils/element-creator';
import LinkView from './link/link-view';
import IndexView from '../main/index/index-view';
import MainView from '../main/main-view';
import CardView from '../main/product/card/card-view';
import ProductView from '../main/product/product-view';



const START_PAGE_INDEX = 0;

export default class HeaderView extends View {
  linkElems:LinkView[]

  constructor(mainComponent: MainView) {
      const param = {
        tag: 'header',
        classes: ['header'],
      }

    super(param);
    
    this.linkElems = [];
    this.configureView(mainComponent);
  }


  configureView(mainComponent: MainView) {
    /// add nav
    const paramsNav = {
      tag: 'nav',
      classes: ['nav'],
    }
    const creatorNav = new ElementCreator(paramsNav);

    this.elementCreator.addInnerElement(creatorNav.getElement());

    /// add index view
    const indexView = new IndexView();
    
    /// add card view
    const productView = new ProductView();

    /// add links on nav
    const linkProps = [
      {
        text: 'MAIN', 
        callback: () => mainComponent.setContent(indexView),
      },
      {
        text: 'CARDS',
        callback: () => mainComponent.setContent(productView),
      }
    ];

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