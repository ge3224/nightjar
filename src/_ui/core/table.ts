import { HTMLElementAttributes } from "@/_definitions/attributes";
import { CAPTION, TBODY, TFOOT, THEAD, TR } from "@/_lib/node_names";

/**
 * A constructor for the <table> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
 */
export default function NewTable(
  children:
    | HTMLTableCaptionElement
    | HTMLTableSectionElement
    | HTMLTableRowElement
    | Array<
      HTMLTableCaptionElement | HTMLTableSectionElement | HTMLTableRowElement
    >,
  attributes: HTMLElementAttributes
): HTMLTableElement {
  const table = document.createElement("table");

  const allowedChildrenTypes = [CAPTION, THEAD, TBODY, TFOOT, TR];

  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (allowedChildrenTypes.includes(child.nodeName)) {
        table.appendChild(child);
      }
    });
  } else if (children instanceof Node) {
    const child = children;
    if (allowedChildrenTypes.includes(child.nodeName)) {
      table.appendChild(child);
    }
  }

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "autofocus":
        table.autofocus = value;
        return;
      case "inert":
        table.inert = value;
        return;
      default:
        table.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return table;
}
