import { GlobalAttributes } from "@/_definitions/attributes";

export default function NewEm(
  children: string | Node | (string | Node)[],
  attributes: GlobalAttributes
): HTMLElement {
  const em = document.createElement("em");

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

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      em.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      em.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return em;
}
