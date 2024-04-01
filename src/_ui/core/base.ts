/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLBaseElementAttributes } from "@/_definitions/attributes/base";

/**
 * A constructor for the HTML <base> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base)
 */
export default function NewBase(
  attributes: HTMLBaseElementAttributes
): HTMLBaseElement {
  const base = document.createElement("base");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        base.autofocus = value;
        return;
      case "inert":
        base.inert = value;
        return;
      default:
        base.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return base;
}
