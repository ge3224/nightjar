import { HTMLQuoteElementAttributes } from "@/_definitions/attributes/blockquote";
import { isFlowContent } from "@/_lib/content";

/**
 * A constructor for the HTML <blockquote> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote)
 */
export default function Blockquote(
  children: string | Node | Array<string | Node>,
  attributes: HTMLQuoteElementAttributes
): HTMLElement {
  const blockquote = document.createElement("blockquote");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        blockquote.autofocus = value;
        return;
      case "inert":
        blockquote.inert = value;
        return;
      default:
        blockquote.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      blockquote.appendChild(document.createTextNode(child));
    } else if (child instanceof Node && isFlowContent(child)) {
      blockquote.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return blockquote;
}
