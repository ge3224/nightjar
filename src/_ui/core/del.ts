/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLModElementAttributes } from "@/_definitions/attributes/mod";
import { isTransparent } from "@/_lib/content";

/**
 * A constructor for the HTML <del> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del)
 */
export default function Del(
  children: string | Node | Array<string | Node>,
  attributes: HTMLModElementAttributes = {}
): HTMLModElement {
  const del = document.createElement("del");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        del.autofocus = value;
        return;
      case "inert":
        del.inert = value;
        return;
      default:
        del.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      del.appendChild(document.createTextNode(child));
    } else if (child instanceof Node && isTransparent(child)) {
      del.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return del;
}
