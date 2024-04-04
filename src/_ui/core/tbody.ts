import { HTMLElementGlobalAttributes } from "@/_definitions/attributes";

/**
 * A constructor for the HTML <tbody> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody)
 */
export default function NewTbody(
  children: HTMLTableRowElement | Array<HTMLTableRowElement>,
  attributes: HTMLElementGlobalAttributes
): HTMLTableSectionElement {
  const tbody = document.createElement("tbody");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        tbody.autofocus = value;
        return;
      case "inert":
        tbody.inert = value;
        return;
      default:
        tbody.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      tbody.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      tbody.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return tbody;
}
