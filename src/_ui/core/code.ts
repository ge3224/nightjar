import { HTMLElementAttributes } from "@/_definitions/attributes";
import { isPhrasingContent } from "@/_lib/content";

/**
 * A constructor for the HTML <code> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code)
 */
export default function NewCode(
  children: string | Node | Array<string | Node>,
  attributes: HTMLElementAttributes
): HTMLElement {
  const code = document.createElement("code");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        code.autofocus = value;
        return;
      case "inert":
        code.inert = value;
        return;
      default:
        code.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      code.appendChild(document.createTextNode(child));
    } else if (child instanceof Node && isPhrasingContent(child)) {
      code.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return code;
}
