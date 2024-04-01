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
 * Returns a constructor for the HTML <kdb> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd)
 */
export default function NewKbd(
  children: string | Node | Array<string | Node> | null = null,
  attributes: HTMLElementAttributes = {}
): NewHTMLElement {
  return (): HTMLElement => {
    const kbd = document.createElement("kbd");
    Object.entries(attributes).forEach(([key, value]) => {
      switch (key) {
        case "autofocus":
          kbd.autofocus = value;
          return;
        case "inert":
          kbd.inert = value;
          return;
        default:
          kbd.setAttribute(
            key.toLowerCase(),
            typeof value === "number" ? value.toString() : value
          );
      }
    });

    if (!children) return kbd;

    const append = (child: string | Node) => {
      if (typeof child === "string") {
        kbd.appendChild(document.createTextNode(child));
      } else if (child instanceof Node && isPhrasingContent(child)) {
        kbd.appendChild(child);
      }
    };

    Array.isArray(children)
      ? children.forEach((child) => append(child))
      : append(children);

    return kbd;
  };
}
