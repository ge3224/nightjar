import { GlobalAttributes } from "@/_definitions/attributes";
import { isFlowContent } from "@/_lib/content";

/**
 * A constructor for the HTML <caption> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption)
 */
export default function NewCaption(
  children: string | Node | Array<string | Node>,
  attributes: GlobalAttributes
): HTMLTableCaptionElement {
  const caption = document.createElement("caption");

  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === "string") {
        caption.appendChild(document.createTextNode(child));
      } else {
        if (child instanceof Node && isFlowContent(child)) {
          caption.appendChild(child);
        }
      }
    });
  } else {
    const child = children;
    if (typeof child === "string") {
      caption.appendChild(document.createTextNode(child));
    } else if (child instanceof Node && isFlowContent(child)) {
      caption.appendChild(child);
    }
  }

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "autofocus":
        caption.autofocus = value;
        return;
      case "inert":
        caption.inert = value;
        return;
      default:
        caption.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return caption;
}
