import { HTMLTextAreaElementAttributes } from "@/_definitions/attributes";

/**
 * Constructor for the HTML <textarea> element.
 */
export default function Textarea(
  content: string,
  attributes: HTMLTextAreaElementAttributes
): HTMLTextAreaElement {
  const textarea = document.createElement("textarea");

  textarea.textContent = content;

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "autofocus":
        textarea.autofocus = value;
        return;
      case "inert":
        textarea.inert = value;
        return;
      case "disabled":
        textarea.disabled = value ? true : false;
        return;
      case "readOnly":
        textarea.readOnly = value ? true : false;
        return;
      case "required":
        textarea.required = value ? true : false;
        return;
      default:
        textarea.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return textarea;
}
