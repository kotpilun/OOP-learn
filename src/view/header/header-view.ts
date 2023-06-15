import './header.scss';
import View from '../view';
import ElementCreator from '../../utils/element-creator';
import LinkView from './link/link-view';
import Router from '../../app/router/router';
import { Pages } from '../../app/router/pages';
import { TLinkProps, TPageNames } from '../../interfaces/interfaces';

const NamePages: TPageNames = {
  INDEX: 'MAIN',
  PRODUCT: 'CARDS',
};

export default class HeaderView extends View {
  linkElems: Map<string, LinkView>

  constructor(router: Router) {
      const param = {
        tag: 'header',
        classes: ['header'],
      }

    super(param);
    
    // this.linkElems = [];
    this.linkElems = new Map();
    this.configureView(router);
  }

  configureView(router: Router) {
    const paramsNav = {
      tag: 'nav',
      classes: ['nav'],
    }

    const creatorNav = new ElementCreator(paramsNav);
    this.elementCreator.addInnerElement(creatorNav.getElement());

    const pages = Object.keys(NamePages) as Array<keyof TPageNames>;

    pages.forEach((key) => {
      const linkParams: TLinkProps = {
        text: NamePages[key]!,
        callback: () => router.navigate(Pages[key]!),
      };

      const linkView = new LinkView(linkParams, this.linkElems);

      creatorNav.addInnerElement(linkView.getHtmlElement());

      this.linkElems.set(Pages[key]!, linkView);
    });
  }

  setSelectedItem(namePage: string) {
    const linkComponent: LinkView = this.linkElems.get(namePage)!;
    linkComponent.setSelectedStatus();
  }

}