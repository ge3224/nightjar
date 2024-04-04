/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementGlobalAttributes } from "./global";

/**
 * Defines attributes specific to the HTML <data> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data#attributes)
 */
export interface HTMLDataElementAttribues extends HTMLElementGlobalAttributes {
  /**
   * This attribute specifies the machine-readable translation of the content of the element.
   */
  value?: string;
}
