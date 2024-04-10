import { GlobalAttributes } from ".";

export interface HTMLTimeElementAttributes extends GlobalAttributes {
  /**
   * This attribute indicates the time and/or date of the element and must be in one of the formats described below.
   *
   * [MDN Reference]()
   */
  datetime?: string;
}
