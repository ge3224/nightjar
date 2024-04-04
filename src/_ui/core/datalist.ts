/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 */

import { HTMLElementGlobalAttributes } from "@/_definitions/attributes";
import { isPhrasingContent } from "@/_lib/content";
import { OPTION } from "@/_lib/node_names";

/**
 * A constructor for the HTML <datalist> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)
 */
export default function NewDatalist(
  children: string | Node | Array<string | Node>,
  attributes: HTMLElementGlobalAttributes
): HTMLDataListElement {
  const datalist = document.createElement("datalist");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        datalist.autofocus = value;
        return;
      case "inert":
        datalist.inert = value;
        return;
      default:
        datalist.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      datalist.appendChild(document.createTextNode(child));
    } else if (
      child instanceof Node &&
      (isPhrasingContent(child) || child.nodeName === OPTION)
    ) {
      datalist.appendChild(child);
    }
  };

  if (!isPermittedContent(children)) return datalist;

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return datalist;
}

/**
 * Helper function to determine permitted content
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist#technical_summary)
 */
function isPermittedContent(
  input: string | Node | Array<string | Node>
): boolean {
  if (!Array.isArray(input)) {
    return (
      typeof input === "string" ||
      isPhrasingContent(input) ||
      (input instanceof Node && input.nodeName === OPTION)
    );
  }

  let type: "phrasing" | "option" | "prohibited";

  return input.reduce((permitted, item) => {
    if (!permitted) return false;

    const _type =
      typeof item === "string" || isPhrasingContent(item)
        ? "phrasing"
        : item instanceof Node && item.nodeName === OPTION
          ? "option"
          : "prohibited";

    if (type === undefined) {
      type = _type;
      return true;
    }

    return type === _type;
  }, true);
}
