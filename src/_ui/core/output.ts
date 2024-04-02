/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLOutputElementAttributes } from "@/_definitions/attributes/output";
import { NewHTMLElement } from "@/_definitions/constructors";
import { isPhrasingContent } from "@/_lib/content";
import { OUTPUT } from "@/_lib/node_names";

/**
 * Returns a constructor for the HTML <output> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output)
 */
export default function NewOutput(
  children?: string | Node | Array<string | Node> | undefined,
  attributes: HTMLOutputElementAttributes = {}
): NewHTMLElement {
  return (): HTMLElement => {
    const output = document.createElement(OUTPUT);

    Object.entries(attributes).forEach(([key, value]) => {
      switch (key) {
        case "autofocus":
          output.autofocus = value;
          return;
        case "inert":
          output.inert = value;
          return;
        default:
          output.setAttribute(
            key.toLowerCase(),
            typeof value === "number" ? value.toString() : value
          );
      }
    });

    if (!children) return output;

    const append = (child: string | Node) => {
      if (typeof child === "string") {
        output.appendChild(document.createTextNode(child));
      } else if (child instanceof Node && isPhrasingContent(child)) {
        output.appendChild(child);
      }
    };

    Array.isArray(children)
      ? children.forEach((child) => append(child))
      : append(children);

    return output;
  };
}
