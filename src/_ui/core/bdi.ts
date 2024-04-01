/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementAttributes } from "@/_definitions/attributes";
import { isPhrasingContent } from "@/_lib/content";

/**
 * A constructor for the HTML <bdi> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi)
 */
export default function NewBdi(
  children: string | Node | Array<string | Node>,
  attributes: HTMLElementAttributes
): HTMLElement {
  const bdi = document.createElement("bdi");
  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        bdi.autofocus = value;
        return;
      case "inert":
        bdi.inert = value;
        return;
      default:
        bdi.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      bdi.appendChild(document.createTextNode(child));
    } else if (child instanceof Node && isPhrasingContent(child)) {
      bdi.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return bdi;
}
