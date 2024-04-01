import { HTMLDetailsElementAttributes } from "@/_definitions/attributes";
import { isFlowContent } from "@/_lib/content";
import { SUMMARY } from "@/_lib/node_names";

/**
 * A constructor for HTML <details> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)
 */
export default function NewDetails(
  children: string | Node | Array<string | Node>,
  attributes: HTMLDetailsElementAttributes
): HTMLDetailsElement {
  const details = document.createElement("details");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        details.autofocus = value;
        return;
      case "inert":
        details.inert = value;
        return;
      case "open":
        details.open = value;
        return;
      default:
        details.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      details.appendChild(document.createTextNode(child));
    } else if (
      child instanceof Node &&
      (isFlowContent(child) || child.nodeName === SUMMARY)
    ) {
      details.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => {
      // TODO: summary must be the first child
      append(child);
    })
    : append(children);

  return details;
}
