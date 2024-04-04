import { HTMLElementGlobalAttributes } from "./global";

export interface HTMLTimeElementAttributes extends HTMLElementGlobalAttributes {
  /**
   * This attribute indicates the time and/or date of the element and must be in one of the formats described below.
   *
   * [MDN Reference]()
   */
  datetime?: string;
}
