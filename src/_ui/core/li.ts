import { HTMLElementAttributes } from "@/_definitions/attributes";
import appendChildren from "@/_lib/append_children";

export default function Li(
  children: string | Node | (string | Node)[],
  attributes: HTMLElementAttributes
): HTMLLIElement {
  const li = document.createElement("li");
  appendChildren(li, children);

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "autofocus":
        li.autofocus = value;
        return;
      case "inert":
        li.inert = value;
        return;
      default:
        li.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });
  return li;
}
