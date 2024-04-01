/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementAttributes } from "./global";

/**
 * Defines attributes specific to the HTML <meter> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter#attributes)
 */
export interface HTMLMeterElementAttributes extends HTMLElementAttributes {
  /**
   * The current numeric value. This must be between the minimum and maximum
   * values (min attribute and max attribute) if they are specified. If
   * unspecified or malformed, the value is 0. If specified, but not within the
   * range given by the min attribute and max attribute, the value is equal to
   * the nearest end of the range.
   */
  value?: number;
  /**
   * The lower numeric bound of the measured range. This must be less than the
   * maximum value (max attribute), if specified. If unspecified, the minimum
   * value is 0.
   */
  min?: number;
  /**
   * The upper numeric bound of the measured range. This must be greater than
   * the minimum value (min attribute), if specified. If unspecified, the
   * maximum value is 1.
   */
  max?: number;
  /**
   * The upper numeric bound of the low end of the measured range. This must be
   * greater than the minimum value (min attribute), and it also must be less
   * than the high value and maximum value (high attribute and max attribute,
   * respectively), if any are specified. If unspecified, or if less than the
   * minimum value, the low value is equal to the minimum value.
   */
  low?: number;
  /**
   * The lower numeric bound of the high end of the measured range. This must
   * be less than the maximum value (max attribute), and it also must be
   * greater than the low value and minimum value (low attribute and min
   * attribute, respectively), if any are specified. If unspecified, or if
   * greater than the maximum value, the high value is equal to the maximum
   * value.
   */
  high?: number;
  /**
   * This attribute indicates the optimal numeric value. It must be within the
   * range (as defined by the min attribute and max attribute). When used with
   * the low attribute and high attribute, it gives an indication where along
   * the range is considered preferable.
   */
  optimum?: number;
  /**
   * This optional attribute is used to explicitly set a <form> owner for the
   * <meter> element. If omitted, the <meter> is associated with its ancestor
   * <form> element or the form association set by the form attribute on
   * another ancestor element, such as on a <fieldset>, if any. If included,
   * the value must be the id of a <form> in the same tree.
   */
  form?: string;
}
