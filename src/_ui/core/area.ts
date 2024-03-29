/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLAreaElementAttributes } from "@/_definitions/attributes/area";

/**
 * A constructor for the HTML <area> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area)
 */
export default function Area(
  attributes: HTMLAreaElementAttributes
): HTMLAreaElement {
  const area = document.createElement("area");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        area.autofocus = value;
        return;
      case "inert":
        area.inert = value;
        return;
      default:
        area.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return area;
}
