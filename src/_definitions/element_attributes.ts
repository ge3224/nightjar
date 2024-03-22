export enum HTMLAutocapitalizeAttribute {
  none = "none",
  off = "off",
  sentences = "sentences",
  on = "on",
  words = "words",
  characters = "characters",
}

/**
 * Attributes common to all HTML elements; they can be used on all elements, though they may have
 * no effect on some elements.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
 */
export interface HTMLElementGlobalAttributes {
  /**
   * Provides a hint for generating a keyboard shortcut for the current element. This attribute
   * consists of a space-separated list of characters.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey)
   */
  accesskey?: string;
  autocapitalize?: HTMLElementGlobalAttributes;
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

export interface HTMLAnchorElementAttributes
  extends HTMLElementGlobalAttributes {
  download?: string;
  href?: string;
  hreflang?: string;
  ping?: string;
  referrerpolicy?: string;
  rel?: string;
  target?: HTMLTargetAttribute;
  type?: string;
}

/**
 * Set of numbering types for the 'type' attribute of the Order List HTML element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol#type)
 */
export enum NumberingTypeAttribute {
  lowercaseLetters = "a",
  uppercaseLetters = "A",
  lowercaseRomanNumerals = "i",
  uppercaseRomanNumerals = "I",
  numbers = "1",
}

/**
 * Attributes specific to the Ordered List HTML element
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
 */
export interface HTMLOListElementAttributes
  extends HTMLElementGlobalAttributes {
  reversed?: boolean;
  start?: number;
  type?: NumberingTypeAttribute;
}
