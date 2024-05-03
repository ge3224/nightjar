import { GlobalAttributes } from "@/_definitions/attributes";
import { isFlowContent } from "@/_lib/content";

/**
 * A constructor for the HTML <main> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)
 */
export default function NewMain(
  children: string | Node | Array<string | Node>,
  attributes: GlobalAttributes
): HTMLElement {
  const main = document.createElement("main");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        main.autofocus = value;
        return;
      case "inert":
        main.inert = value;
        return;
      default:
        main.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      main.appendChild(document.createTextNode(child));
    } else if (child instanceof Node && isFlowContent(child)) {
      main.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return main;
}
