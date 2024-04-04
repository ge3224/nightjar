/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementGlobalAttributes } from "@/_definitions/attributes";
import { NewHTMLElement } from "@/_definitions/constructors";
import { isPhrasingContent } from "@/_lib/content";
import { B } from "@/_lib/node_names";

/**
 * Returns a constructor for the HTML <b> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b)
 */
export default function NewB(
  children?: string | Node | Array<string | Node> | undefined,
  attributes: HTMLElementGlobalAttributes = {}
): NewHTMLElement {
  return (): HTMLElement => {
    const b = document.createElement(B);

    Object.entries(attributes).forEach(([key, value]) => {
      switch (key) {
        case "autofocus":
          b.autofocus = value;
          return;
        case "inert":
          b.inert = value;
          return;
        default:
          b.setAttribute(
            key.toLowerCase(),
            typeof value === "number" ? value.toString() : value
          );
      }
    });

    if (!children) return b;

    const append = (child: string | Node) => {
      if (typeof child === "string") {
        b.appendChild(document.createTextNode(child));
      } else if (child instanceof Node && isPhrasingContent(child)) {
        b.appendChild(child);
      }
    };

    Array.isArray(children)
      ? children.forEach((child) => append(child))
      : append(children);

    return b;
  };
}
