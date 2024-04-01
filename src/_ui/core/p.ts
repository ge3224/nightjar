/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementAttributes } from "@/_definitions/attributes";
import { NewHTMLParagraphElement } from "@/_definitions/constructors";
import { P } from "@/_lib/node_names";

/**
 * Returns a constructor for the HTML <p> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)
 */
export default function NewP(
  children?: string | Node | Array<string | Node> | undefined,
  attributes: HTMLElementAttributes = {}
): NewHTMLParagraphElement {
  return (): HTMLParagraphElement => {
    const p = document.createElement(P) as HTMLParagraphElement;

    Object.entries(attributes).forEach(([key, value]) => {
      switch (key) {
        case "autofocus":
          p.autofocus = value;
          return;
        case "inert":
          p.inert = value;
          return;
        default:
          p.setAttribute(
            key.toLowerCase(),
            typeof value === "number" ? value.toString() : value
          );
      }
    });

    if (!children) return p;

    const append = (child: string | Node) => {
      if (typeof child === "string") {
        p.appendChild(document.createTextNode(child));
      } else if (child instanceof Node) {
        p.appendChild(child);
      }
    };

    Array.isArray(children)
      ? children.forEach((child) => append(child))
      : append(children);

    return p;
  };
}
