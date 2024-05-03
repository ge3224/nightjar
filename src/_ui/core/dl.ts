/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { GlobalAttributes } from "@/_definitions/attributes";
import { DD, DIV, DT, SCRIPT, TEMPLATE } from "@/_lib/node_names";

/**
 * A constructor for the HTML <dl> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)
 */
export default function NewDl(
  children: Node | Array<Node> | null = null,
  attributes: GlobalAttributes = {}
): HTMLDListElement {
  const dl = document.createElement("dl");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        dl.autofocus = value;
        return;
      case "inert":
        dl.inert = value;
        return;
      default:
        dl.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  if (!children) return dl;

  permittedContent(children).forEach((child) => dl.appendChild(child));

  return dl;
}

/**
 * Helper function filters permitted content.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl#technical_summary)
 */
function permittedContent(input: Node | Array<Node>): Array<Node> {
  // If the input is not an array, it must be a <div> to be permitted, according to the spec.
  if (!Array.isArray(input)) {
    return input.nodeName === DIV ? [input] : [];
  }

  const permittedContentTypes = [DD, DT, DIV, SCRIPT, TEMPLATE];

  const { permitted } = input.reduce(
    (accumulator: { permitted: Array<Node>; initial: number }, item: Node) => {
      const type = permittedContentTypes.indexOf(item.nodeName);

      const { permitted, initial } = accumulator;

      // The initial element can be either a <dt> or <div> element.
      if (permitted.length < 1 && type > 0 && type < 3) {
        permitted.push(item);
        return { ...accumulator, permitted, initial: type };
      }

      // Following an initial <dt> element, there can be one or more <dd>
      // elements, optionally intermixed with <script> and <template> elements.
      if ((initial === 1 && type === 0) || type > 2) {
        permitted.push(item);
        return { ...accumulator, permitted };
      }

      // Following an initial <div> element, there can be one or more <div>
      // elements, optionally intermixed with <script> and <template> elements.
      if (initial === 2 && type >= 2) {
        permitted.push(item);
        return { ...accumulator, permitted };
      }

      return accumulator;
    },
    { permitted: [], initial: -1 }
  );

  return permitted;
}
