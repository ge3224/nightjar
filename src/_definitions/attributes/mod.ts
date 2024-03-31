/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementAttributes } from "./global";

/**
 * Defines attributes specific to the HTMLModElement type
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del#attributes)
 */
export interface HTMLModElementAttributes extends HTMLElementAttributes {
  /**
   * A URI for a resource that explains the change (for example, meeting minutes).
   */
  cite?: string;
  /**
   * This attribute indicates the time and date of the change and must be a
   * valid date string with an optional time.
   */
  datetime?: string;
}
