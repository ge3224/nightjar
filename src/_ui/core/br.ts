import { HTMLElementAttributes } from "@/_definitions/attributes";

/**
 * A constructor for the HTML <br> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br)
 */
export default function NewBr(attributes: HTMLElementAttributes): HTMLElement {
  const br = document.createElement("br");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        br.autofocus = value;
        return;
      case "inert":
        br.inert = value;
        return;
      default:
        br.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return br;
}
