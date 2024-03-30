/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLCanvasElementAttributes } from "@/_definitions/attributes/canvas";
import { isInteractiveContent, isTransparent } from "@/_lib/content";

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
    } else if (child instanceof Node && isPermittedContent(child)) {
      canvas.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);
  return canvas;
}

/**
 * Helper function to detect permitted content according to the HTML specification
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#technical_summary)
 */
function isPermittedContent(node: Node): boolean {
  const permittedInteractiveContent: Array<string> = ["A", "BUTTON"];
  const permittedInputTypes: Array<string> = ["checkbox", "radio", "button"];

  if (!isTransparent(node)) {
    return false;
  }

  const notPermitted = Array.from(
    (node as HTMLElement).querySelectorAll("*")
  ).filter((descendant) => {
    if (!isInteractiveContent(descendant)) return;

    if (permittedInteractiveContent.includes(descendant.nodeName)) return;

    if (descendant.nodeName === "INPUT") {
      const type = (descendant as HTMLInputElement).type;
      if (permittedInputTypes.includes(type)) return;
    }

    return descendant;
  });

  return notPermitted.length === 0;
}
