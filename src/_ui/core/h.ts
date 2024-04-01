/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementAttributes } from "@/_definitions/attributes";
import { NewHTMLHeadingElement } from "@/_definitions/constructors";

/**
 * Returns a constructor for HTML <h1>, <h2>, <h3>, <h4>, <h5> and <h6> elements.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)
 */
export default function NewH(
  level: number,
  children?: string | Node | Node[] | undefined,
  attributes: HTMLElementAttributes = {}
): NewHTMLHeadingElement {
  return (): HTMLHeadingElement => {
    if (level < 1 || level > 6) {
      throw new Error("Heading level must be between 1 and 6");
    }
    const h = document.createElement("H" + level) as HTMLHeadingElement;

    Object.entries(attributes).map(([key, value]) => {
      switch (key) {
        case "autofocus":
          h.autofocus = value;
          return;
        case "inert":
          h.inert = value;
          return;
        default:
          h.setAttribute(
            key.toLowerCase(),
            typeof value === "number" ? value.toString() : value
          );
      }
    });

    const append = (child: string | Node) => {
      if (typeof child === "string") {
        h.appendChild(document.createTextNode(child));
      } else if (child instanceof Node) {
        h.appendChild(child);
      }
    };

    if (!children) return h;

    Array.isArray(children)
      ? children.forEach((child) => append(child))
      : append(children);

    return h as HTMLHeadingElement;
  }
}
