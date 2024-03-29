import { HTMLElementAttributes } from "@/_definitions/attributes";
import { isHeadingContent, isPhrasingContent } from "@/_lib/content";

/**
 * A constructor for the HTML <summary> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary)
 */
export default function Summary(
  children: string | Node | Array<string | Node>,
  attributes: HTMLElementAttributes
): HTMLElement {
  const summary = document.createElement("summary");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        summary.autofocus = value;
        return;
      case "inert":
        summary.inert = value;
        return;
      default:
        summary.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      summary.appendChild(document.createTextNode(child));
    } else if (
      child instanceof Node &&
      (isPhrasingContent(child) || isHeadingContent(child))
    ) {
      // TODO: can contain only one from the heading content category
      //
      //[MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary#technical_summary)
      summary.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return summary;
}
