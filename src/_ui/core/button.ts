import appendChildren from "@/_lib/append_children";
import { HTMLButtonElementAttributes } from "@/_definitions/attributes";

export default function Button(
  children: string | Node | (string | Node)[],
  attributes: HTMLButtonElementAttributes
): HTMLButtonElement {
  const button = document.createElement("button");

  appendChildren(button, children, [
    "BUTTON",
    "INPUT",
    "FORM",
    "SELECT",
    "TEXTAREA",
  ]);

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "disabled":
        button.disabled = value;
        return;
      case "formNoValidate":
        button.formNoValidate = value;
        return;
      case "autofocus":
        button.autofocus = value;
        return;
      case "inert":
        button.inert = value;
        return;
      default:
        button.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return button;
}
