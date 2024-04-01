/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLDataElementAttribues } from "@/_definitions/attributes/data";
import { isPhrasingContent } from "@/_lib/content";

/**
 * A constructor for the HTML <data> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data)
 */
export default function NewData(
  children: string | Node | Array<string | Node>,
  attributes: HTMLDataElementAttribues
): HTMLDataElement {
  const data = document.createElement("data");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        data.autofocus = value;
        return;
      case "inert":
        data.inert = value;
        return;
      default:
        data.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      data.appendChild(document.createTextNode(child));
    } else if (child instanceof Node && isPhrasingContent(child)) {
      data.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return data;
}
