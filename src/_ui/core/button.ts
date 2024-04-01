import { HTMLButtonElementAttributes } from "@/_definitions/attributes";
import { BUTTON, FORM, INPUT, SELECT, TEXTAREA } from "@/_lib/node_names";

export default function NewButton(
  children: string | Node | (string | Node)[],
  attributes: HTMLButtonElementAttributes
): HTMLButtonElement {
  const button = document.createElement("button");

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

  const prohibited = [BUTTON, INPUT, FORM, SELECT, TEXTAREA];

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      button.appendChild(document.createTextNode(child));
    } else if (child instanceof Node && !prohibited.includes(child.nodeName)) {
      button.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return button;
}
