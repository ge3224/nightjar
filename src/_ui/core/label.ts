/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLLabelElementAttributes } from "@/_definitions/attributes";
import { NewHTMLLabelElement } from "@/_definitions/constructors";
import { isPhrasingContent, islabelable } from "@/_lib/content";
import { LABEL } from "@/_lib/node_names";

/**
 * Returns a constructor for the HTML <label> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
 */
export default function NewLabel(
  children?: string | Node | Array<string | Node> | undefined,
  attributes: HTMLLabelElementAttributes = {}
): NewHTMLLabelElement {
  return (): HTMLLabelElement => {
    const label = document.createElement(LABEL) as HTMLLabelElement;

    Object.entries(attributes).forEach(([key, value]) => {
      switch (key) {
        case "autofocus":
          label.autofocus = value;
          return;
        case "inert":
          label.inert = value;
          return;
        default:
          label.setAttribute(
            key.toLowerCase(),
            typeof value === "number" ? value.toString() : value
          );
      }
    });

    if (children === undefined) return label;

    // Phrasing content, but no descendant label elements. No labelable
    // elements other than the labeled control are allowed.
    const isPermitted = (input: string | Node): boolean => {
      if (typeof input === "string") return true;
      if (!(input instanceof Node)) return false;
      if (!isPhrasingContent(input)) return false;
      if (input.nodeName === "LABEL") return false;
      return true;
    };

    const append = (child: string | Node): void => {
      if (typeof child === "string") {
        label.appendChild(document.createTextNode(child));
      } else {
        label.appendChild(child);
      }
    };

    if (!Array.isArray(children)) {
      if (isPermitted(children)) append(children);
      return label;
    }

    const { permitted } = children.reduce(
      (
        collect: { permitted: Array<string | Node>; hasLabelable: boolean },
        child: string | Node
      ) => {
        if (!isPermitted(child)) return collect;
        const { permitted, hasLabelable } = collect;

        if (typeof child === "string") {
          permitted.push(child);
          return { ...collect, permitted };
        }

        if (islabelable(child)) {
          if (hasLabelable) return collect;
          permitted.push(child);
          return { permitted, hasLabelable: true };
        }

        permitted.push(child);

        return { ...collect, permitted };
      },
      { permitted: [], hasLabelable: false }
    );

    permitted.forEach((child) => append(child));

    return label;
  };
}
