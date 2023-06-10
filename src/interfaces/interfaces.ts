export type TElementCreator = {
  tag: string;
  classes: string [];
  text?: string;
  callback?: Function;
}

export type TLinkProps = {
  text: string;
  callback: Function;
}