import { HTMLElementGlobalAttributes } from "./global";

export interface HTMLLabelElementAttributes extends HTMLElementGlobalAttributes {
  /**
   * The value of the for attribute must be a single id for a labelable
   * form-related element in the same document as the <label> element.
   */
  for?: string;
}
