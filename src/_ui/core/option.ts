import { HTMLOptionElementAttributes } from "@/_definitions/attributes";

/**
 * A constructor for the <option> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
 */
export default function NewOption(
  content: string,
  attributes: HTMLOptionElementAttributes
): HTMLOptionElement {
  const option = document.createElement("option");

  option.textContent = content;

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "disabled":
        option.disabled = value;
        return;
      case "selected":
        option.selected = value;
        return;
      case "autofocus":
        option.autofocus = value;
        return;
      case "inert":
        option.inert = value;
        return;
      default:
        option.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return option;
}
