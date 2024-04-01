/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementAttributes } from "@/_definitions/attributes";
import { isPhrasingContent } from "@/_lib/content";

/**
 * A constructor for the HTML <dfn> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn)
 */

export default function Dfn(
  children: string | Node | Array<string | Node>,
  attributes: HTMLElementAttributes = {}
): HTMLElement {
  const dfn = document.createElement("dfn");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        dfn.autofocus = value;
        return;
      case "inert":
        dfn.inert = value;
        return;
      default:
        dfn.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      dfn.appendChild(document.createTextNode(child));
    } else if (
      child instanceof Node &&
      isPhrasingContent(child) &&
      child.nodeName !== "DFN"
    ) {
      dfn.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return dfn;
}