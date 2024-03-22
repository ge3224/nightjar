import { HTMLFormElementAttributes } from "../_definitions/element_attributes";
import appendChildren from "../_lib/append_children";

export default function Form(
  children: string | Node | (string | Node)[],
  attributes: HTMLFormElementAttributes
): HTMLFormElement {
  const form = document.createElement("form");

  appendChildren(form, children);

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
