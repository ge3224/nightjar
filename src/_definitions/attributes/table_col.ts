/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementGlobalAttributes } from "./global";

/**
 * Defines attributes specific to the HTML <col> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col#attributes)
 */
export interface HTMLTableColElementAttributes extends HTMLElementGlobalAttributes {
  /**
   * Specifies the number of consecutive columns the <col> element spans.
   */
  span?: number;
}
