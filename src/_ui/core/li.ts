import { GlobalAttributes } from "@/_definitions/attributes";

export default function NewLi(
  children: string | Node | (string | Node)[],
  attributes: GlobalAttributes
): HTMLLIElement {
  const li = document.createElement("li");

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

  const append = (child: string | Node) => {
    if (typeof child === "string") {
      li.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      li.appendChild(child);
    }
  };

  Array.isArray(children)
    ? children.forEach((child) => append(child))
    : append(children);

  return li;
}
