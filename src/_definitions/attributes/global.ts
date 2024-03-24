/**
 * Controls whether inputted text is automatically capitalized and, if so, in what manner.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize)
 */
export enum HTMLElementAttributeAutocapitalize {
  /**
   * Do not automatically capitalize any text.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize#none)
   */
  none = "none",
  /**
   * Do not automatically capitalize any text (Same as 'none').
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize#none)
   */
  off = "off",
  /**
   * Automatically capitalize the first character of each sentence.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize#sentences)
   */
  sentences = "sentences",
  /**
   * Automatically capitalize the first character of each sentence (Same as 'sentences'). 
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize#sentences)
   */
  on = "on",
  /**
   *Automatically capitalize the first character of each word.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize#words)
   */
  words = "words",
  /**
   * Automatically capitalize every character.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize#characters)
   */
  characters = "characters",
}

/**
 * Attributes common to all HTML elements; they can be used on all elements, though they may have
 * no effect on some elements.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
 */
export interface HTMLElementAttributes {
  /**
   * Provides a hint for generating a keyboard shortcut for the current element. This attribute
   * consists of a space-separated list of characters.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey)
   */
  accesskey?: string;
  /**
   * Controls whether inputted text is automatically capitalized and, if so, in what manner.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize)
   */
  autocapitalize?: HTMLElementAttributeAutocapitalize;
  class?: string;
  id?: string;
  style?: string;
  title?: string;
}
