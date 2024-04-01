/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLFieldSetElementAttributes } from "@/_definitions/attributes";
import { NewHTMLFieldSetElement } from "@/_definitions/constructors";
import { isFlowContent } from "@/_lib/content";

/**
 * Returns a constructor for the HTML <fieldset> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset)
 */
export default function Fieldset(
  children: string | Node | Array<string | Node> | null = null,
  attributes: HTMLFieldSetElementAttributes = {}
): NewHTMLFieldSetElement {
  return (): HTMLFieldSetElement => {
    const fieldset = document.createElement("fieldset");

    Object.entries(attributes).forEach(([key, value]) => {
      switch (key) {
        case "autofocus":
          fieldset.autofocus = value;
          return;
        case "inert":
          fieldset.inert = value;
          return;
        case "disabled":
          fieldset.disabled = value;
          return;
        default:
          fieldset.setAttribute(
            key.toLowerCase(),
            typeof value === "number" ? value.toString() : value
          );
      }
    });

    if (!children) return fieldset;

    const append = (child: string | Node) => {
      if (typeof child === "string") {
        fieldset.appendChild(document.createTextNode(child));
        return;
      }

      if (child instanceof Node && isPermittedNode(child)) {
        fieldset.appendChild(child);
      }
    };

    if (!Array.isArray(children)) {
      append(children);
      return fieldset;
    }

    const { permitted } = children.reduce(
      (
        collect: { permitted: Array<string | Node>; hasLegend: boolean },
        child: string | Node
      ) => {
        const { permitted, hasLegend } = collect;

        if (typeof child === "string") {
          permitted.push(child);
          return { ...collect, permitted };
        }

        if (child.nodeName === "LEGEND" && !hasLegend) {
          if (permitted.length > 0) {
            permitted.unshift(child);
          } else {
            permitted.push(child);
          }
          return { permitted, hasLegend: true };
        }

        if (isFlowContent(child)) {
          permitted.push(child);
        }

        return { ...collect, permitted };
      },
      { permitted: [], hasLegend: false }
    );

    permitted.forEach((child) => append(child));

    return fieldset;
  };
}

/**
 * Checks if a given node is permitted content.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset#technical_summary)
 */
function isPermittedNode(input: Node): boolean {
  if (!(input instanceof Node)) {
    return false;
  }

  return isFlowContent(input) || input.nodeName === "LEGEND";
}
