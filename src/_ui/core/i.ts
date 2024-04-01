/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementAttributes } from "@/_definitions/attributes";
import { NewHTMLElement } from "@/_definitions/constructors";
import { isPhrasingContent } from "@/_lib/content";
import { I } from "@/_lib/node_names";

/**
 * Returns a constructor for the HTML <i> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i)
 */

export default function NewI(
  children?: string | Node | Array<string | Node> | undefined,
  attributes: HTMLElementAttributes = {}
): NewHTMLElement {
  return (): HTMLElement => {
    const i = document.createElement(I);

    Object.entries(attributes).forEach(([key, value]) => {
      switch (key) {
        case "autofocus":
          i.autofocus = value;
          return;
        case "inert":
          i.inert = value;
          return;
        default:
          i.setAttribute(
            key.toLowerCase(),
            typeof value === "number" ? value.toString() : value
          );
      }
    });

    if (!children) return i;

    const append = (child: string | Node) => {
      if (typeof child === "string") {
        i.appendChild(document.createTextNode(child));
      } else if (child instanceof Node && isPhrasingContent(child)) {
        i.appendChild(child);
      }
    };

    Array.isArray(children)
      ? children.forEach((child) => append(child))
      : append(children);

    return i;
  };
}
