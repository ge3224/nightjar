/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementAttributes } from "@/_definitions/attributes";
import { NewHTMLMenuElement } from "@/_definitions/constructors";
import { LI, MENU, SCRIPT, TEMPLATE } from "@/_lib/node_names";

/**
 * Returns a constructor for the HTML <menu> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu)
 */
export default function NewMenu(
  children?: Node | Array<Node> | undefined,
  attributes: HTMLElementAttributes = {}
): NewHTMLMenuElement {
  return (): HTMLMenuElement => {
    const menu = document.createElement(MENU) as HTMLMenuElement;

    Object.entries(attributes).forEach(([key, value]) => {
      switch (key) {
        case "autofocus":
          menu.autofocus = value;
          return;
        case "inert":
          menu.inert = value;
          return;
        default:
          menu.setAttribute(
            key.toLowerCase(),
            typeof value === "number" ? value.toString() : value
          );
      }
    });

    if (!children) return menu;

    const append = (child: string | Node) => {
      if (
        child instanceof Node &&
        (child.nodeName === LI ||
          child.nodeName === SCRIPT ||
          child.nodeName == TEMPLATE)
      ) {
        menu.appendChild(child);
      }
    };

    Array.isArray(children)
      ? children.forEach((child) => append(child))
      : append(children);

    return menu;
  };
}
