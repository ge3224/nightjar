/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLMeterElementAttributes } from "@/_definitions/attributes/meter";
import { NewHTMLMeterElement } from "@/_definitions/constructors";
import { isPhrasingContent } from "@/_lib/content";
import { hasMeterDescendants } from "@/_lib/content/descendants";
import { METER } from "@/_lib/node_names";

/**
 * Returns a constructor for the HTML <meter> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter)
 */
export default function NewMeter(
  children?: string | Node | Array<string | Node> | undefined,
  attributes: HTMLMeterElementAttributes = {}
): NewHTMLMeterElement {
  return (): HTMLMeterElement => {
    const meter = document.createElement("meter");

    Object.entries(attributes).forEach(([key, value]) => {
      switch (key) {
        case "autofocus":
          meter.autofocus = value;
          return;
        case "inert":
          meter.inert = value;
          return;
        default:
          meter.setAttribute(
            key.toLowerCase(),
            typeof value === "number" ? value.toString() : value
          );
      }
    });

    if (!children) return meter;

    const append = (child: string | Node) => {
      if (typeof child === "string") {
        meter.appendChild(document.createTextNode(child));
      } else if (
        child instanceof Node &&
        isPhrasingContent(child) &&
        child.nodeName !== METER &&
        !hasMeterDescendants(child)
      ) {
        meter.appendChild(child);
      }
    };

    Array.isArray(children)
      ? children.forEach((child) => append(child))
      : append(children);

    return meter;
  };
}
