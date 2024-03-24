import { HTMLElementAttributes } from "../_definitions/attributes";
import appendChildren from "../_lib/append_children";

export default function H(
  level: number,
  children: string | Node | Node[],
  attributes: HTMLElementAttributes
): HTMLHeadingElement {
  if (level < 1 || level > 6) {
    throw new Error("Heading level must be between 1 and 6");
  }
  const h = document.createElement("h" + level);

  appendChildren(h, children);

  Object.entries(attributes).map(([key, value]) => {
    h.setAttribute(key, value);
  });

  return h as HTMLHeadingElement;
}
