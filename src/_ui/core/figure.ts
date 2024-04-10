import { GlobalAttributes } from "@/_definitions/attributes";
import { isFlowContent } from "@/_lib/content";
import { FIGCAPTION } from "@/_lib/node_names";

/**
 * A constructor for the HTML <figure> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)
 */
export default function NewFigure(
  children: string | Node | Array<string | Node>,
  attributes: GlobalAttributes
): HTMLElement {
  const figure = document.createElement("figure");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        figure.autofocus = value;
        return;
      case "inert":
        figure.inert = value;
        return;
      default:
        figure.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      figure.appendChild(document.createTextNode(child));
    } else if (
      child instanceof Node &&
      (isFlowContent(child) || child.nodeName === FIGCAPTION)
    ) {
      // TODO: See permitted content
      // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure#technical_summary
      figure.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return figure;
}
