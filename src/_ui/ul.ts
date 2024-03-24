import { HTMLElementAttributes } from "../_definitions/attributes";

export default function Ul(
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
    ul.setAttribute(key, value);
  });

  return ul;
}
