import { HTMLElementAttributes } from "@/_definitions/attributes";
import appendChildren from "@/_lib/append_children";

export default function Em(
  children: string | Node | (string | Node)[],
  attributes: HTMLElementAttributes
): HTMLElement {
  const em = document.createElement("em");

  appendChildren(em, children);

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "autofocus":
        em.autofocus = value;
        return;
      case "inert":
        em.inert = value;
        return;
      default:
        em.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return em;
}
