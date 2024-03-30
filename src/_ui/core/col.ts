/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLTableColElementAttributes } from "@/_definitions/attributes/col";

/**
 * A constructor for the HTML <col> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col)
 */
export default function Col(
  attributes: HTMLTableColElementAttributes
): HTMLTableColElement {
  const col = document.createElement("col");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        col.autofocus = value;
        return;
      case "inert":
        col.inert = value;
        return;
      default:
        col.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return col;
}
