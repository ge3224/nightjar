import { HTMLIFrameElementAttributes } from "@/_definitions/attributes/iframe";

/**
 * A constructor for the HTML <iframe> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
 */
export default function Iframe(
  attributes: HTMLIFrameElementAttributes
): HTMLIFrameElement {
  const iframe = document.createElement("iframe");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        iframe.autofocus = value;
        return;
      case "inert":
        iframe.inert = value;
        return;
      default:
        iframe.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });
  return iframe;
}
