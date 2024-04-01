import { HTMLElementAttributes } from "@/_definitions/attributes";

export default function NewUl(
  children: HTMLLIElement | HTMLLIElement[],
  attributes: HTMLElementAttributes
): HTMLUListElement {
  const ul = document.createElement("ul");

  if (Array.isArray(children)) {
    children.forEach((child) => ul.appendChild(child));
  } else {
    ul.appendChild(children);
  }

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "autofocus":
        ul.autofocus = value;
        return;
      case "inert":
        ul.inert = value;
        return;
      default:
        ul.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return ul;
}
