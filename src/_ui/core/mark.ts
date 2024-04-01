/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementAttributes } from "@/_definitions/attributes";
import { NewHTMLElement } from "@/_definitions/constructors";
import { isPhrasingContent } from "@/_lib/content";

/**
 * Returns a constructor for the HTML <mark> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)
 */
export default function NewMark(
  children?: string | Node | Array<string | Node> | undefined,
  attributes: HTMLElementAttributes = {}
): NewHTMLElement {
  return (): HTMLElement => {
    const mark = document.createElement("mark");

    Object.entries(attributes).forEach(([key, value]) => {
      switch (key) {
        case "autofocus":
          mark.autofocus = value;
          return;
        case "inert":
          mark.inert = value;
          return;
        default:
          mark.setAttribute(
            key.toLowerCase(),
            typeof value === "number" ? value.toString() : value
          );
      }
    });

    if (!children) return mark;

    const append = (child: string | Node) => {
      if (typeof child === "string") {
        mark.appendChild(document.createTextNode(child));
      } else if (child instanceof Node && isPhrasingContent(child)) {
        mark.appendChild(child);
      }
    };

    Array.isArray(children)
      ? children.forEach((child) => append(child))
      : append(children);

    return mark;
  };
}
