import { HTMLElementGlobalAttributes } from "@/_definitions/attributes";
import { isFlowContent } from "@/_lib/content";

/**
 * A constructor for the HTML <article> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)
 */
export default function NewArticle(
  children: string | Node | Array<string | Node>,
  attributes: HTMLElementGlobalAttributes
): HTMLElement {
  const article = document.createElement("article");

  Object.entries(attributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        article.autofocus = value;
        return;
      case "inert":
        article.inert = value;
        return;
      default:
        article.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      article.appendChild(document.createTextNode(child));
    } else if (child instanceof Node && isFlowContent(child)) {
      article.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return article;
}
