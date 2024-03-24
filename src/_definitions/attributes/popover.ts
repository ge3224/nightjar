/**
 * The Popover API provides developers with a standard, consistent, flexible 
 * mechanism for displaying popover content on top of other page content.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
 */
export enum PopoverTargetAction {
  /**
   * The button will hide a shown popover.
   */
  hide = "hide",
  /**
   * The button will show a hidden popover.
   */
  show = "show",
  /**
   * The button will toggle a popover between showing and hidden.
   */
  toggle = "toggle",
}
