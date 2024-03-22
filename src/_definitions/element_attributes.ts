export interface HTMLElementAttributes {
  class?: string;
  id?: string;
  style?: string;
  title?: string;
}

export enum HTMLTargetAttribute {
  blank = "_blank",
  parent = "_parent",
  self = "_self",
  top = "_top",
}

export interface HTMLAnchorElementAttributes extends HTMLElementAttributes {
  download?: string;
  href?: string;
  hreflang?: string;
  ping?: string;
  referrerpolicy?: string;
  rel?: string;
  target?: HTMLTargetAttribute;
  type?: string;
}
