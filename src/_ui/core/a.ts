import { HTMLAnchorElementAttributes } from "@/_definitions/attributes";

/**
 * Constructor for an HTML <a> element.
 *
 * [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/a)
 */
export default function A(
  children: string | Node | Array<string | Node>,
  attributes: HTMLAnchorElementAttributes
): HTMLAnchorElement {
  const a = document.createElement("a");

  Object.entries(attributes).forEach(([key, value]) => {
    console.log(typeof key, typeof value);
    switch (key) {
      case "autofocus":
        a.autofocus = value;
        return;
      case "inert":
        a.inert = value;
        return;
      default:
        a.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
    a.setAttribute(key, value);
  });

  let _children: Array<string | Node> = [];

  if (!Array.isArray(children)) {
    _children.push(children);
  } else {
    _children = children.slice();
  }

  _children.forEach((child) => {
    if (typeof child === "string") {
      a.appendChild(document.createTextNode(child));
    } else {
      a.appendChild(child);
    }
  });

  return a;
}
