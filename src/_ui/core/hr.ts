import { HTMLElementAttributes } from "@/_definitions/attributes";

/**
 * A constructor for the HTML <hr> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr)
 */
export default function NewHr(attributes: HTMLElementAttributes): HTMLElement {
  const hr = document.createElement("hr");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        hr.autofocus = value;
        return;
      case "inert":
        hr.inert = value;
        return;
      default:
        hr.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return hr;
}
