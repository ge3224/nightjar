import { GlobalAttributes } from "@/_definitions/attributes";
// import appendChildren from "@/_lib/append_children";

export default function NewDiv(
  children: string | Node | (string | Node)[],
  attributes: GlobalAttributes
): HTMLDivElement {
  const div = document.createElement("div");
  // appendChildren(div, children);

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "autofocus":
        div.autofocus = value;
        return;
      case "inert":
        div.inert = value;
        return;
      default:
        div.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      div.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      div.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return div;
}
