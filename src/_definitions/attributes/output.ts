import { HTMLElementGlobalAttributes } from "./global";

export interface HTMLOutputElementAttributes extends HTMLElementGlobalAttributes {
  /**
   * A space-separated list of other elements' ids, indicating that those
   * elements contributed input values to (or otherwise affected) the
   * calculation.
   */
  for?: string;
  /**
   * The <form> element to associate the output with (its form owner). The
   * value of this attribute must be the id of a <form> in the same document.
   * (If this attribute is not set, the <output> is associated with its
   * ancestor <form> element, if any.) This attribute lets you associate
   * <output> elements to <form>s anywhere in the document, not just inside a
   * <form>. It can also override an ancestor <form> element.
   */
  form?: string;
  /**
   * The element's name. Used in the form.elements API.
   */
  name?: string;
}
