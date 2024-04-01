/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLDialogElementAttributes } from "@/_definitions/attributes";
import { isFlowContent } from "@/_lib/content";

/**
 * A constructor for the HTML <dialog> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
 */
export default function NewDialog(
  children: string | Node | Array<string | Node>,
  attributes: HTMLDialogElementAttributes = {}
): HTMLDialogElement {
  const dialog = document.createElement("dialog");
  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        dialog.autofocus = value;
        return;
      case "inert":
        dialog.inert = value;
        return;
      case "open":
        dialog.open = value;
        return;
      default:
        dialog.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      dialog.appendChild(document.createTextNode(child));
    } else if (child instanceof Node && isFlowContent(child)) {
      dialog.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);
  return dialog;
}
