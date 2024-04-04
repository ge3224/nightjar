import { HTMLElementGlobalAttributes } from "./global";

export interface HTMLObjectElementAttributes extends HTMLElementGlobalAttributes {
  /**
   * The address of the resource as a valid URL. At least one of data and type
   * must be defined.
   */
  data?: string;
  /**
   * The form element, if any, that the object element is associated with (its
   * form owner). The value of the attribute must be an ID of a <form> element
   * in the same document.
   */
  form?: string;
  /**
   * The height of the displayed resource, in CSS pixels. — (Absolute values
   * only. NO percentages)
   */
  height?: string;
  /**
   * The name of valid browsing context (HTML5), or the name of the control
   * (HTML 4).
   */
  name?: string;
  /**
   * The content type of the resource specified by data. At least one of data
   * and type must be defined.
   */
  type?: string;
  /**
   * The width of the display resource, in CSS pixels. — (Absolute values only.
   * NO percentages)
   */
  width?: string;
}
