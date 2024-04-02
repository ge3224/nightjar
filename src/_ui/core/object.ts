/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLObjectElementAttributes } from "@/_definitions/attributes/object";
import { NewHTMLObjectElement } from "@/_definitions/constructors";
import { isTransparent } from "@/_lib/content";
import { OBJECT } from "@/_lib/node_names";

/**
 * Returns a constructor for the HTML <object> module.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object)
 */
export default function NewObject(
  children?: string | Node | Array<string | Node> | undefined,
  attributes: HTMLObjectElementAttributes = {}
): NewHTMLObjectElement {
  return (): HTMLObjectElement => {
    const obj = document.createElement(OBJECT) as HTMLObjectElement;

    Object.entries(attributes).forEach(([key, value]) => {
      switch (key) {
        case "autofocus":
          obj.autofocus = value;
          return;
        case "inert":
          obj.inert = value;
          return;
        default:
          obj.setAttribute(
            key.toLowerCase(),
            typeof value === "number" ? value.toString() : value
          );
      }
    });

    if (!children) return obj;

    // Permitted content zero or more <param> elements, then transparent.
    const append = (input: string | Node): void => {
      if (typeof input === "string") {
        obj.appendChild(document.createTextNode(input));
      } else {
        if (isTransparent(input) || input.nodeName === "PARAM") {
          obj.appendChild(input);
        }
      }
    };

    if (!Array.isArray(children)) {
      append(children);
      return obj;
    }

    const { params, transparents } = children.reduce(
      (
        collect: { params: Array<Node>; transparents: Array<string | Node> },
        child: string | Node
      ) => {
        const { params, transparents } = collect;
        if (isTransparent(child)) {
          transparents.push(child);
          return { ...collect, transparents };
        }

        if (child instanceof Node && child.nodeName === "PARAM") {
          params.push(child);
          return { ...collect, params };
        }
        return collect;
      },
      { params: [], transparents: [] }
    );

    [...params, ...transparents].forEach((child) => append(child));

    return obj;
  };
}
