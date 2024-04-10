import { GlobalAttributes } from "@/_definitions/attributes";

/**
 * A constructor for the HTML <tfoot> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot)
 */
export default function NewTfoot(
  children: HTMLTableRowElement | Array<HTMLTableRowElement>,
  attributes: GlobalAttributes
): HTMLTableSectionElement {
  const tfoot = document.createElement("tfoot");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        tfoot.autofocus = value;
        return;
      case "inert":
        tfoot.inert = value;
        return;
      default:
        tfoot.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      tfoot.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      tfoot.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return tfoot;
}
