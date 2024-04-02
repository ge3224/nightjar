/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLOptGroupElementAttributes } from "@/_definitions/attributes/optgroup";
import { NewHTMLOptGroupElement } from "@/_definitions/constructors";
import { OPTGROUP, OPTION } from "@/_lib/node_names";

/**
 * Returns a constructor for the HTML <optgroup> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup)
 */
export default function NewOptgroup(
  children?: Node | Array<Node>,
  attributes: HTMLOptGroupElementAttributes = {}
): NewHTMLOptGroupElement {
  return (): HTMLOptGroupElement => {
    const optgroup = document.createElement(OPTGROUP) as HTMLOptGroupElement;

    Object.entries(attributes).forEach(([key, value]) => {
      switch (key) {
        case "autofocus":
          optgroup.autofocus = value;
          return;
        case "inert":
          optgroup.inert = value;
          return;
        case "disabled":
          optgroup.disabled = value;
          return;
        default:
          optgroup.setAttribute(
            key.toLowerCase(),
            typeof value === "number" ? value.toString() : value
          );
      }
    });

    if (!children) return optgroup;

    const append = (child: string | Node) => {
      if (child instanceof Node && child.nodeName === OPTION) {
        optgroup.appendChild(child);
      }
    };

    Array.isArray(children)
      ? children.forEach((child) => append(child))
      : append(children);

    return optgroup;
  };
}
