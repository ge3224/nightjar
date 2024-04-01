import { HTMLTableCellElementAttributes } from "@/_definitions/attributes";
import {
  ARTICLE,
  ASIDE,
  BLOCKQUOTE,
  DIV,
  FOOTER,
  FORM,
  HEADER,
  HR,
  LI,
  MAIN,
  NAV,
  OL,
  P,
  SECTION,
  TABLE,
  UL,
} from "@/_lib/node_names";

/**
 * A constructor for the HTML <td> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td)
 */
export default function NewTd(
  children: string | Node | Array<string | Node>,
  attributes: HTMLTableCellElementAttributes
): HTMLTableCellElement {
  const td = document.createElement("td");

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

  const prohibited = [
    DIV,
    P,
    HEADER,
    NAV,
    SECTION,
    MAIN,
    ARTICLE,
    ASIDE,
    FOOTER,
    UL,
    OL,
    LI,
    BLOCKQUOTE,
    HR,
    TABLE,
    FORM,
  ];

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      td.appendChild(document.createTextNode(child));
    } else if (child instanceof Node && !prohibited.includes(child.nodeName)) {
      td.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return td;
}
