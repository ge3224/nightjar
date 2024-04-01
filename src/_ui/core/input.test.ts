// @vitest-environment happy-dom

import { expect, test } from "vitest";
import NewInput from "./input";
import {
  FormAttributeEnctype,
  FormAttributeMethod,
  FormAttributesTarget,
  HTMLInputElementAttributes,
  InputAttributeType,
  PopoverTargetAction,
} from "@/_definitions/attributes";
import { INPUT } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewInput({});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(INPUT);
});

test("construction with attributes", () => {
  const mockAttributes: HTMLInputElementAttributes = {
    accept: ".jpg, .jpeg, .png",
    alt: "mock input element",
    autocomplete: "username",
    capture: "camera",
    dirname: "rtl",
    disabled: true,
    formAction: "/mock-submit-url",
    formEnctype: FormAttributeEnctype.application,
    formMethod: FormAttributeMethod.post,
    formNoValidate: true,
    formTarget: FormAttributesTarget.blank,
    height: 256,
    list: "mock-data-list",
    max: "100",
    maxLength: 100,
    min: "0",
    minLength: 0,
    multiple: true,
    name: "mock-name",
    pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
    placeholder: "mock placeholder",
    popoverTarget: "mock-popover-target",
    popoverTargetAction: PopoverTargetAction.toggle,
    readOnly: true,
    required: true,
    size: 20,
    src: "/media/examples/mock-thumbnail.png",
    step: "1",
    type: InputAttributeType.text,
    value: "mock_value",
    webkitDirectory: true,
    width: 1920,
  };

  const mock = NewInput(mockAttributes);

  Object.entries(mockAttributes).forEach(([key, value]) => {
    switch (key) {
      case "disabled":
        expect(mock.disabled).toBe(value);
        return;
      case "formNoValidate":
        expect(mock.formNoValidate).toBe(value);
        return;
      case "incremental":
        expect(mock.getAttribute("incremental")).toBe(value);
        return;
      case "multiple":
        return;
      case "readOnly":
        expect(mock.readOnly).toBe(value);
        return;
      case "required":
        expect(mock.required).toBe(value);
        return;
      case "webkitDirectory":
        expect(mock.webkitdirectory).toBe(value);
        return;
      default:
        expect(mock.getAttribute(key)).toBe(
          typeof value === "number" ? value.toString() : value
        );
    }
  });
});
