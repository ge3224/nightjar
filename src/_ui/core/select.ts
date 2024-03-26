import { HTMLSelectElementAttributes } from "@/_definitions/attributes";
import appendChildren from "@/_lib/append_children";

/**
 * A constructor for the HTML <select> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
 */
export default function Select(
  children: HTMLOptionElement[],
  attributes: HTMLSelectElementAttributes
): HTMLSelectElement {
  const select = document.createElement("select");

  appendChildren(select, children);

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

  return select;
}
