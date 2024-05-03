/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { GlobalAttributes } from "@/_definitions/attributes";
import { NewHTMLLegendElement } from "@/_definitions/constructors";
import { isHeadingContent, isPhrasingContent } from "@/_lib/content";
import { HGROUP, LEGEND } from "@/_lib/node_names";

/**
 * Returns a constructor for the HTML <legend> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend)
 */
export default function NewLegend(
  children: string | Node | Array<string | Node> | null = null,
  attributes: GlobalAttributes = {}
): NewHTMLLegendElement {
  return (): HTMLLegendElement => {
    const legend = document.createElement(LEGEND);

    Object.entries(attributes).forEach(([key, value]) => {
      switch (key) {
        case "autofocus":
          legend.autofocus = value;
          return;
        case "inert":
          legend.inert = value;
          return;
        default:
          legend.setAttribute(
            key.toLowerCase(),
            typeof value === "number" ? value.toString() : value
          );
      }
    });

    if (!children) return legend;

    const append = (child: string | Node) => {
      if (typeof child === "string") {
        legend.appendChild(document.createTextNode(child));
      } else if (
        child instanceof Node &&
        (isPhrasingContent(child) ||
          (isHeadingContent(child) && child.nodeName !== HGROUP))
      ) {
        legend.appendChild(child);
      }
    };

    Array.isArray(children)
      ? children.forEach((child) => append(child))
      : append(children);
    return legend;
  };
}
