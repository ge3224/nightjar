/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLCanvasElementAttributes } from "@/_definitions/attributes/canvas";
import { isTransparent } from "@/_lib/content";

/**
 * A constructor for the HTML <canvas> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas)
 */
export default function Canvas(
  children: string | Node | Array<string | Node>,
  attributes: HTMLCanvasElementAttributes
): HTMLCanvasElement {
  const canvas = document.createElement("canvas");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        canvas.autofocus = value;
        return;
      case "inert":
        canvas.inert = value;
        return;
      default:
        canvas.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      canvas.appendChild(document.createTextNode(child));
    } else if (child instanceof Node && isPermittedTransparent(child)) {
      canvas.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);
  return canvas;
}

/**
 * Helper function to detect permitted content accordin to the HTML specification
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#technical_summary)
 */
function isPermittedTransparent(node: Node): boolean {
  const permittedInteractiveTags: string[] = ["A", "BUTTON"];
  const permittedInputTypes: string[] = ["CHECKBOX", "RADIO", "BUTTON"];

  if (!isTransparent(node)) {
    return false;
  }

  const interactiveDescendants = Array.from(
    (node as HTMLElement).querySelectorAll("*")
  ).filter((descendant) => {
    const tagName = descendant.tagName;
    return (
      permittedInteractiveTags.includes(tagName) ||
      (tagName === "input" &&
        permittedInputTypes.includes((descendant as HTMLInputElement).type))
    );
  });

  return interactiveDescendants.length === 0;
}
