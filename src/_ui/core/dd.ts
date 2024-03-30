/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementAttributes } from "@/_definitions/attributes";
import { isFlowContent } from "@/_lib/content";

/**
 * A constructor for the HTML <dd> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd)
 */
export default function Dd(
  children: string | Node | Array<string | Node>,
  attributes: HTMLElementAttributes
): HTMLElement {
  const dd = document.createElement("dd");
  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        dd.autofocus = value;
        return;
      case "inert":
        dd.inert = value;
        return;
      default:
        dd.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      dd.appendChild(document.createTextNode(child));
    } else if (child instanceof Node && isFlowContent(child)) {
      dd.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return dd;
}
