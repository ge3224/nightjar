/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLAnchorElementAttributes } from "@/_definitions/attributes";
import { NewHTMLAnchorElement } from "@/_definitions/constructors";
import { A } from "@/_lib/node_names";

/**
 * Constructor for an HTML <a> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/a)
 */
export default function NewA(
  children?: string | Node | Array<string | Node> | undefined,
  attributes: HTMLAnchorElementAttributes = {}
): NewHTMLAnchorElement {
  return (): HTMLAnchorElement => {
    const a = document.createElement(A) as HTMLAnchorElement;

    Object.entries(attributes).forEach(([key, value]) => {
      switch (key) {
        case "autofocus":
          a.autofocus = value;
          return;
        case "inert":
          a.inert = value;
          return;
        default:
          a.setAttribute(
            key.toLowerCase(),
            typeof value === "number" ? value.toString() : value
          );
      }
    });

    if (!children) return a;

    const append = (child: string | Node) => {
      if (typeof child === "string") {
        a.appendChild(document.createTextNode(child));
      } else if (child instanceof Node) {
        a.appendChild(child);
      }
    };

    Array.isArray(children)
      ? children.forEach((child) => append(child))
      : append(children);

    return a;
  };
}
