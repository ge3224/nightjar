import { HTMLElementAttributes } from "@/_definitions/attributes";
import appendChildren from "@/_lib/append_children";

export default function Strong(
  children: string | Node | (string | Node)[],
  attributes: HTMLElementAttributes
): HTMLElement {
  const strong = document.createElement("strong");
  appendChildren(strong, children);

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "autofocus":
        strong.autofocus = value;
        return;
      case "inert":
        strong.inert = value;
        return;
      default:
        strong.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return strong;
}
