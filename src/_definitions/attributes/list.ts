import { HTMLElementAttributes } from "./global";

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
 * Attributes specific to the HTML Ordered List element
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)
 */
export interface HTMLOListElementAttributes
  extends HTMLElementAttributes {
  reversed?: boolean;
  start?: number;
  type?: NumberingTypeAttribute;
}
