import { GlobalAttributes } from ".";

/**
 * Defines attributes specific to the HTML <blockquote> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote#attributes)
 */
export interface HTMLQuoteElementAttributes extends GlobalAttributes {
  /**
   * A URL that designates a source document or message for the information quoted.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote#cite)
   */
  cite?: string;
}
