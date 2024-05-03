import { GlobalAttributes } from ".";

/**
 * Defines attributes specific to the HTML <td> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attributes)
 */
export interface HTMLTableCellElementAttributes extends GlobalAttributes {
  /**
   * Contains a non-negative integer value that indicates how many columns the
   * data cell spans or extends.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#colspan)
   */
  colspan?: number;
  /**
   * Contains a list of space-separated strings, each corresponding to the id
   * attribute of the <th> elements that provide headings for this table cell.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#headers)
   */
  headers?: string;
  /**
   * Contains a non-negative integer value that indicates for how many rows the
   * data cell spans or extends.
   *
   * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#rowspan)
   */
  rowspan?: number;
}
