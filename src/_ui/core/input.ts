import { HTMLElementGlobalAttributes } from "@/_definitions/attributes";

export default function NewInput(
  attributes: HTMLElementGlobalAttributes
): HTMLInputElement {
  const input = document.createElement("input");

  Object.entries(attributes).map(([key, value]) => {
    switch (key) {
      case "checked":
        input.checked = value ? true : false;
        return;
      case "disabled":
        input.disabled = value ? true : false;
        return;
      case "formNoValidate":
        input.formNoValidate = value ? true : false;
        return;
      case "indeterminate":
        input.indeterminate = value ? true : false;
        return;
      case "multiple":
        input.multiple = value ? true : false;
        return;
      case "readOnly":
        input.readOnly = value ? true : false;
        return;
      case "required":
        input.required = value ? true : false;
        return;
      case "webkitDirectory":
        input.webkitdirectory = value ? true : false;
        return;
      case "autofocus":
        input.autofocus = value;
        return;
      case "inert":
        input.inert = value;
        return;
      default:
        input.setAttribute(
          key.toLowerCase(),
          typeof value === "number" ? value.toString() : value
        );
    }
  });

  return input;
}
