/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLModElementAttributes } from "@/_definitions/attributes";
import { NewHTMLModElement } from "@/_definitions/constructors";
import { isTransparent } from "@/_lib/content";

/**
 * Returns a constructor for the HTML <ins> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins)
 */
export default function Ins(
  children: string | Node | Array<string | Node> | null = null,
  attributes: HTMLModElementAttributes = {}
): NewHTMLModElement {
  return (): HTMLModElement => {
    const ins = document.createElement("ins");
    Object.entries(attributes).forEach(([key, value]) => {
      switch (key) {
        case "autofocus":
          ins.autofocus = value;
          return;
        case "inert":
          ins.inert = value;
          return;
        default:
          ins.setAttribute(
            key.toLowerCase(),
            typeof value === "number" ? value.toString() : value
          );
      }
    });

    if (!children) return ins;

    const append = (child: string | Node) => {
      if (typeof child === "string") {
        ins.appendChild(document.createTextNode(child));
      } else if (child instanceof Node && isTransparent(child)) {
        ins.appendChild(child);
      }
    };

    Array.isArray(children)
      ? children.forEach((child) => append(child))
      : append(children);

    return ins;
  };
}
