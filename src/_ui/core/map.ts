/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLMapElementAttributes } from "@/_definitions/attributes";
import { NewHTMLMapElement } from "@/_definitions/constructors";
import { isTransparent } from "@/_lib/content";
import { MAP } from "@/_lib/node_names";

/**
 * Returns a constructor for the HTML <map> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map)
 */
export default function NewMap(
  children?: string | Node | Array<string | Node> | undefined,
  attributes: HTMLMapElementAttributes = {}
): NewHTMLMapElement {
  return (): HTMLMapElement => {
    const map = document.createElement(MAP) as HTMLMapElement;

    Object.entries(attributes).forEach(([key, value]) => {
      switch (key) {
        case "autofocus":
          map.autofocus = value;
          return;
        case "inert":
          map.inert = value;
          return;
        default:
          map.setAttribute(
            key.toLowerCase(),
            typeof value === "number" ? value.toString() : value
          );
      }
    });

    if (!children) return map;

    const append = (child: string | Node) => {
      if (typeof child === "string") {
        map.appendChild(document.createTextNode(child));
      } else if (child instanceof Node && isTransparent(child)) {
        map.appendChild(child);
      }
    };

    Array.isArray(children)
      ? children.forEach((child) => append(child))
      : append(children);

    return map;
  };
}
