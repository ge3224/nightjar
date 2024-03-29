/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementAttributes } from "@/_definitions/attributes";
import {
  isFlowContent,
  isHeadingContent,
  isSectioningContent,
} from "@/_lib/content";

/**
 * A constructor for the HTML <address> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address)
 */
export default function Address(
  children: string | Node | Array<string | Node>,
  attributes: HTMLElementAttributes
): HTMLElement {
  const address = document.createElement("address");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        address.autofocus = value;
        return;
      case "inert":
        address.inert = value;
        return;
      default:
        address.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      address.appendChild(document.createTextNode(child));
    } else if (
      child instanceof Node &&
      isFlowContent(child) &&
      !isHeadingContent(child) &&
      !isSectioningContent(child) &&
      child.nodeName !== "ADDRESS" &&
      child.nodeName !== "HEADER" &&
      child.nodeName !== "FOOTER"
    ) {
      address.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return address;
}
