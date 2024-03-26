/**
 * Attributes common to all HTML elements; they can be used on all elements,
 * though they may have no effect on some elements.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
 */
export interface HTMLElementAttributes {
  /**
   * Provides a hint for generating a keyboard shortcut for the current
   * element. This attribute consists of a space-separated list of characters.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey)
   */
  accesskey?: string;
  /**
   * Controls whether inputted text is automatically capitalized and, if so, in
   * what manner.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize)
   */
  autocapitalize?: HTMLElementAttributeAutocapitalize;
  /**
   * A boolean attribute indicating that an element should be focused on page
   * load. NOTE: Use of this attribute could raise accessibility concerns. (See reference.)
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus)
   */
  autofocus?: boolean;
  /**
   * A space-seperated list of CSS class selectors.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)
   */
  class?: string;
  /**
   * An enumerated attribute indicating if the element should be editable by the user
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable)
   */
  contenteditable?: "true" | "false";
  /**
   * An enumerated attribute indicating the direction of the element's
   * text content.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir)
   */
  dir?: "ltr" | "rtl" | "auto";
  /**
   * An enumerated attribute indicating whether the element can be dragged,
   * using the Drag and Drop API
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/draggable)
   */
  draggable?: "true" | "false";
  /**
   * Hints what action label to present for the enter key on virtual keyboards.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint)
   */
  enterkeyhint?: string; // TODO
  /**
   * Used to transitively export shadow parts from a nested shadow tree into a
   * comtaining light tree.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts)
   */
  exportparts?: string; // TODO
  /**
   * Defines a unique identifier which must be uniques in the whole document.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)
   */
  id?: string;
  /**
   * A boolean attribute that makes the browser disregard user input events for
   * the element. NOTE: use of this attribute could raise accessibility
   * concerns. (See reference.)
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert)
   */
  inert?: boolean;
  /**
   * Provides a hint to browsers about the type of virtual keyboard
   * configuration to use when editing this element or its contents.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode)
   */
  inputmode?: string;
  /**
   * Allows for specifying that a standard HTML element should behave like a
   * registered custom build-in element.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/is)
   */
  is?: string;
  /**
   * A unique global identifier of an item.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemid)
   */
  itemid?: string;
  /**
   * Used to add properties to an item.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemprop)
   */
  itemprop?: string;
  /**
   * Properties that are not descendants of an element with the `itemscope`
   * attribute can be associated with this item using this attribute.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemref)
   */
  itemref?: string;
  /**
   * Usually used along with `itemtype` to specify that the HTML contained in a
   * block is about the particular item.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemscope)
   */
  itemscope?: string;
  /**
   * Specifies the URL of the vocabulary that will be used to define `itemprop`
   * in the data structure.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemtype)
   */
  itemtype?: string;
  /**
   * Helps define the language of an element.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang)
   */
  lang?: string;
  /**
   * A cryptographic nonce ("number used once") which can be used by Content
   * Security Policy to determine whether or not a given fetch will be allowed
   * to proceed.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce)
   */
  nonce?: string;
  /**
   *  A space-separated list of the part names of the element. Part names
   *  allows CSS to select and style specific elements in a shadow tree via the
   *  `::part` pseudo-element.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part)
   */
  part?: string;
  /**
   * Used to designate an element as a popover element.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover)
   */
  popover?: string;
  /**
   * Roles define the semantic meaning of content, allowing screen readers and
   * other tools to present and support interaction with an object in a way
   * that is consistent with user expectations of that type of object.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
   */
  role?: string;
  /**
   * Assigns a slot in a shadow DOM shadow tree to an element: An element with
   * a slot attribute is assigned to the slot created by the <slot> element
   * whose name attribute's value matches that slot attribute's value.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot)
   */
  slot?: string;
  /**
   * An enumerated attribute defines whether the element may be checked for
   * spelling errors.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck)
   */
  spellcheck?: "" | "true" | "false";
  /**
   * Contains CSS styling declarations to be applied to the element.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style)
   */
  style?: string;
  /**
   * An integer attribute indicating if the element can take input focus (is
   * focusable), if it should participate to sequential keyboard navigation,
   * and if so, at what position.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)
   */
  tabindex?: number;
  /**
   * Contains a text representing advisory information related to the element
   * it belongs to.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/title)
   */
  title?: string;
  /**
   * An enumerated attribute that is used to specify whether an element's
   * attribute values and the values of its Text node children are to be
   * translated when the page is localized, or whether to leave them unchanged.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/translate)
   */
  translate?: "" | "yes" | "no";
}

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
