import {
  HTMLFormElementAttributes,
} from "@/_definitions/attributes";
import { isFlowContent } from "@/_lib/content";

/**
 * A constructor for the HTML <form> element.
 *
 * Permitted content includes any "Flow Content" except for "form" elements.
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#technical_summary)
 */
export default function Form(
  children: string | Node | Array<string | Node>,
  attributes: HTMLFormElementAttributes
): HTMLFormElement {
  const form = document.createElement("form");

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "acceptCharset":
        form.setAttribute("accept-charset", value);
        return;
      case "noValidate":
        form.noValidate = value;
        return;
      case "autofocus":
        form.autofocus = value;
        return;
      case "inert":
        form.inert = value;
        return;
      default:
        form.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      form.appendChild(document.createTextNode(child));
    } else if (
      child instanceof Node &&
      isFlowContent(child) &&
      child.nodeName !== "FORM"
    ) {
      form.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return form;
}
