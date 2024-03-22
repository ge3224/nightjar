import { HTMLFormElementAttributes } from "../_definitions/element_attributes";

export default function Form(
  children: string | Node | (string | Node)[],
  attributes: HTMLFormElementAttributes
): HTMLFormElement {
  const form = document.createElement("form");

  if (typeof children === "string") {
    form.appendChild(document.createTextNode(children));
  } else if (children instanceof Node) {
    if (children.nodeName !== "FORM") {
      form.appendChild(children);
    }
  } else if (Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === "string") {
        form.appendChild(document.createTextNode(child));
      } else {
        if (child.nodeName !== "FORM") {
          form.appendChild(child);
        }
      }
    });
  }

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "acceptCharset":
        form.setAttribute("accept-charset", value);
        return;
      case "novalidate":
        form.noValidate = value ? true : false;
        return;
      default:
        form.setAttribute(key, value);
    }
  });

  return form;
}
