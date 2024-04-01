import { HTMLElementAttributes } from "@/_definitions/attributes";
import { TD, TH } from "@/_lib/node_names";

/**
 * A constructor for the HTML <table> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr)
 */
export default function NewTr(
  children: HTMLTableCellElement | Array<HTMLTableCellElement>,
  attributes: HTMLElementAttributes
): HTMLTableRowElement {
  const tr = document.createElement("tr");

  const allowedChildTypes = [TH, TD];

  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (allowedChildTypes.includes(child.nodeName)) {
        tr.appendChild(child);
      }
    });
  } else {
    const child = children;
    if (allowedChildTypes.includes(child.nodeName)) {
      tr.appendChild(child);
    }
  }

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "autofocus":
        tr.autofocus = value;
        return;
      case "inert":
        tr.inert = value;
        return;
      default:
        tr.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return tr;
}
