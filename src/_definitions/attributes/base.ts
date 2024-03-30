/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementAttributes } from "./global";

/**
 * Defines attributes specific to the HTML <base> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base#attributes)
 */
export interface HTMLBaseElementAttributes extends HTMLElementAttributes {
  /**
   * The base URL to be used throughout the document for relative URLs.
   * Absolute and relative URLs are allowed. data: and javascript: URLs are not
   * allowed.
   */
  href?: string;
  /**
   * A keyword or author-defined name of the default browsing context to show
   * the results of navigation from <a>, <area>, or <form> elements without
   * explicit target attributes. The following keywords have special meanings:
   */
  target?: "_self" | "_blank" | "_parent" | "_top";
}
