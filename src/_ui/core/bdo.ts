/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementGlobalAttributes } from "@/_definitions/attributes";
import { isPhrasingContent } from "@/_lib/content";

/**
 * A constructor for the HTML <bdo> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdo)
 */
export default function NewBdo(
  children: string | Node | Array<string | Node>,
  attributes: HTMLElementGlobalAttributes
): HTMLElement {
  const bdo = document.createElement("bdo");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        bdo.autofocus = value;
        return;
      case "inert":
        bdo.inert = value;
        return;
      default:
        bdo.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      bdo.appendChild(document.createTextNode(child));
    } else if (child instanceof Node && isPhrasingContent(child)) {
      bdo.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);
  return bdo;
}
