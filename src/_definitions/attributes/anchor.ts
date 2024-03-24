import { HTMLElementAttributes } from "./global";

/**
 *
 *
 * [MDN Reference]()
 */
export enum HTMLAnchorElementAttributeTarget {
  blank = "_blank",
  parent = "_parent",
  self = "_self",
  top = "_top",
}

/**
 *
 *
 * [MDN Reference]()
 */
export interface HTMLAnchorElementAttributes extends HTMLElementAttributes {
  download?: string;
  href?: string;
  hreflang?: string;
  ping?: string;
  referrerpolicy?: string;
  rel?: string;
  target?: HTMLAnchorElementAttributeTarget;
  type?: string;
}
