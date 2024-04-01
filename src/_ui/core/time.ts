import { HTMLTimeElementAttributes } from "@/_definitions/attributes";
import { isPhrasingContent } from "@/_lib/content";

/**
 * A constructor for the HTML <time> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)
 */
export default function NewTime(
  children: string | Node | Array<string | Node>,
  attributes: HTMLTimeElementAttributes
): HTMLTimeElement {
  const time = document.createElement("time");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        time.autofocus = value;
        return;
      case "inert":
        time.inert = value;
        return;
      default:
        time.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      time.appendChild(document.createTextNode(child));
    } else if (child instanceof Node && isPhrasingContent(child)) {
      time.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return time;
}
