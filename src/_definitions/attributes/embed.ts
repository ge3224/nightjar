/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementGlobalAttributes } from "./global";

/**
 * Defines attributes specific to the HTML <embed> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed#attributes)
 */
export interface HTMLEmbedElementAttributes extends HTMLElementGlobalAttributes {
  /**
   * The displayed height of the resource, in CSS pixels. This must be an
   * absolute value; percentages are not allowed.
   */
  height?: string;
  /**
   * The URL of the resource being embedded.
   */
  src?: string;
  /**
   * The MIME type to use to select the plug-in to instantiate.
   */
  type?: string;
  /**
   * The displayed width of the resource, in CSS pixels. This must be an
   * absolute value; percentages are not allowed.
   */
  width?: string;
}
