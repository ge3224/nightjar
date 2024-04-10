/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { GlobalAttributes } from ".";

/**
 * Defines attributes specific to the HTML <map> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map#attributes)
 */
export interface HTMLMapElementAttributes extends GlobalAttributes {
  /**
   * The name attribute gives the map a name so that it can be referenced. The
   * attribute must be present and must have a non-empty value with no space
   * characters.
   */
  name?: string;
}
