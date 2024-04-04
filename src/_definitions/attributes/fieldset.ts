/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementGlobalAttributes } from "./global";

/**
 * Defines attributes specific to the HTML <fieldset> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset#attributes)
 */
export interface HTMLFieldSetElementAttributes extends HTMLElementGlobalAttributes {
  /**
   * If this Boolean attribute is set, all form controls that are descendants
   * of the <fieldset>, are disabled, meaning they are not editable and won't
   * be submitted along with the <form>.
   */
  disabled?: boolean;
  /**
   * This attribute takes the value of the id attribute of a <form> element you
   * want the <fieldset> to be part of, even if it is not inside the form.
   */
  form?: string;
  /**
   * The name associated with the group.
   */
  name?: string;
}
