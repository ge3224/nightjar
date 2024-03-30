/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLTableColElementAttributes } from "@/_definitions/attributes";

/**
 * A constructor for the HTML <colgroup> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup)
 */
export default function Colgroup(
  children: HTMLTableColElement | Array<HTMLTableColElement> | null,
  attributes: HTMLTableColElementAttributes
): HTMLTableColElement {
  const colgroup = document.createElement("colgroup");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        colgroup.autofocus = value;
        return;
      case "inert":
        colgroup.inert = value;
        return;
      default:
        colgroup.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  if (!children) return colgroup;

  // If the span attribute is present, the permitted content is none.
  if (colgroup.getAttribute("span") !== null) return colgroup;

  // If the span attribute is not present, the permitted content is <col>.
  const isCol = (input: Node) => input.nodeName === "COL";

  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (isCol(child)) {
        colgroup.appendChild(child);
      }
    });
  } else {
    if (isCol(children)) {
      colgroup.appendChild(children);
    }
  }

  return colgroup;
}
