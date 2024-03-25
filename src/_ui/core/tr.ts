import { HTMLElementAttributes } from "@/_definitions/attributes";

/**
 * A constructor for the HTML <table> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr)
 */
export default function Tr(
  children: HTMLTableCellElement | Array<HTMLTableCellElement>,
  attributes: HTMLElementAttributes
): HTMLTableRowElement {
  const tr = document.createElement("tr");

  if (Array.isArray(children)) {
    children.forEach(child => {
      if (child instanceof HTMLTableCellElement) {
        tr.appendChild(child);
      }
    });
  } else {
    const child = children;
    if (child instanceof HTMLTableCellElement) {
      tr.appendChild(child);
    }
  }

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      default:
        tr.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return tr;
}
