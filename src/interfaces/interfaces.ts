export type TElementCreator = {
  tag?: string;
  classes: string [];
  text?: string;
  callback?: Function;
}

export type TLinkProps = {
  text: string;
  callback: Function;
}

export type TCardInfo = {
  id: string;
  name: string;
  description: string;
}

// export type TPageNames = 'INDEX' | 'PRODUCT'; 
export type TPageNames ={
  INDEX: string,
  PRODUCT: string,
  NOT_FOUND?: string
}

export type TRoute = {
  path: string;
  callback: Function
}

export type TRequest = {
  path: string,
  resource: string
}