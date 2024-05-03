/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { GlobalAttributes } from ".";

/**
 * Defines attributes specific to the HTML <canvas> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas)
 */
export interface HTMLCanvasElementAttributes extends GlobalAttributes {
  /**
   * The height of the coordinate space in CSS pixels.
   */
  height?: number;
  /**
   * The width of the coordinate space in CSS pixels.
   */
  width?: number;
}
