import { GlobalAttributes } from "@/_definitions/attributes";

/**
 * A constructor for the HTML <thead> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead)
 */
export default function NewThead(
  children: HTMLTableRowElement | Array<HTMLTableRowElement>,
  attributes: GlobalAttributes
): HTMLTableSectionElement {
  const thead = document.createElement("thead");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        thead.autofocus = value;
        return;
      case "inert":
        thead.inert = value;
        return;
      default:
        thead.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      thead.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      thead.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return thead;
}
