import { GlobalAttributes } from "@/_definitions/attributes";
import { isFlowContent } from "@/_lib/content";

/**
 * A constructor for the HTML <nav> constructor.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)
 */
export default function NewNav(
  children: string | Node | Array<string | Node>,
  attributes: GlobalAttributes
): HTMLElement {
  const nav = document.createElement("nav");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        nav.autofocus = value;
        return;
      case "inert":
        nav.inert = value;
        return;
      default:
        nav.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });
  const append = (child: string | Node) => {
    if (typeof child === "string") {
      nav.appendChild(document.createTextNode(child));
    } else if (child instanceof Node && isFlowContent(child)) {
      nav.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return nav;
}
