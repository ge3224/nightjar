import { HTMLTableCellElementAttributes } from "@/_definitions/attributes";
import appendChildren from "@/_lib/append_children";

/**
 * A constructor for the HTML <td> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td)
 */
export default function Td(
  children: string | Node | Array<string | Node>,
  attributes: HTMLTableCellElementAttributes
): HTMLTableCellElement {
  const td = document.createElement("td");

  const disallowedChildNodeNames = [
    "DIV",
    "P",
    "HEADER",
    "NAV",
    "SECTION",
    "MAIN",
    "ARTICLE",
    "ASIDE",
    "FOOTER",
    "UL",
    "OL",
    "LI",
    "BLOCKQUOTE",
    "HR",
    "TABLE",
    "FORM",
  ];

  appendChildren(td, children, disallowedChildNodeNames)

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "autofocus":
        td.autofocus = value;
        return;
      case "inert":
        td.inert = value;
        return;
      default:
        td.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });
  return td;
}
