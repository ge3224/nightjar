import { HTMLSelectElementAttributes } from "@/_definitions/attributes";

/**
 * A constructor for the HTML <select> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
 */
export default function NewSelect(
  children: HTMLOptionElement[],
  attributes: HTMLSelectElementAttributes
): HTMLSelectElement {
  const select = document.createElement("select");

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "autofocus":
        select.autofocus = value;
        return;
      case "inert":
        select.inert = value;
        return;
      case "disabled":
        select.disabled = value ? true : false;
        return;
      case "multiple":
        select.multiple = value ? true : false;
        return;
      case "required":
        select.required = value ? true : false;
        return;
      default:
        select.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      select.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      select.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return select;
}
