import { GlobalAttributes } from ".";

export interface HTMLOptGroupElementAttributes extends GlobalAttributes {
  /**
   * If this Boolean attribute is set, none of the items in this option group
   * is selectable. Often browsers grey out such control and it won't receive
   * any browsing events, like mouse clicks or focus-related ones.
   */
  disabled?: boolean;
  /**
   * The name of the group of options, which the browser can use when labeling
   * the options in the user interface. This attribute is mandatory if this
   * element is used.
   */
  label?: string;
}
