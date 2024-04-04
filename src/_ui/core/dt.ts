/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementGlobalAttributes } from "@/_definitions/attributes";
import { NewHTMLElement } from "@/_definitions/constructors";
import {
  isDescendantOfHeader,
  isFlowContent,
  isSectioningContent,
} from "@/_lib/content";
import { FOOTER, HEADER } from "@/_lib/node_names";

/**
 * Returns a constructor for the HTML <dt> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt)
 */
export default function NewDt(
  children: string | Node | Array<string | Node> | null = null,
  attributes: HTMLElementGlobalAttributes = {}
): NewHTMLElement {
  return (): HTMLElement => {
    const dt = document.createElement("dt");

    Object.entries(attributes).forEach(([key, value]) => {
      switch (key) {
        case "autofocus":
          dt.autofocus = value;
          return;
        case "inert":
          dt.inert = value;
          return;
        default:
          dt.setAttribute(
            key.toLowerCase(),
            typeof value === "number" ? value.toString() : value
          );
      }
    });

    if (!children) return dt;

    permittedContent(children).forEach((child) => dt.appendChild(child));

    return dt;
  };
}

/**
 * Helper function that aggregates permitted content and filters out
 * non-permitted content.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt#technical_summary)
 */
function permittedContent(
  input: string | Node | Array<string | Node>
): Array<Node> {
  // Plain text is considered flow content
  if (typeof input === "string") return [document.createTextNode(input)];

  // Permitted content includes flow content, but with no <header>, <footer>,
  // sectioning content or heading content descendants.
  const permitted = (input: Node): boolean => {
    if (!isFlowContent(input)) return false;

    const prohibited = [HEADER, FOOTER];
    if (prohibited.includes(input.nodeName)) return false;

    if (isSectioningContent(input)) return false;

    if (isDescendantOfHeader(input)) return false;

    return true;
  };

  if (!Array.isArray(input)) {
    return permitted(input) ? [input] : [];
  }

  return input.reduce((nodes: Array<Node>, item: string | Node) => {
    if (typeof item === "string") {
      nodes.push(document.createTextNode(item));
      return nodes;
    }

    if (permitted(item)) nodes.push(item);

    return nodes;
  }, []);
}
