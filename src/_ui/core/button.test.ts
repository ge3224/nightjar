// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { ButtonAttributeType, FormAttributeEnctype, FormAttributeMethod, FormAttributesTarget, HTMLButtonElementAttributes, PopoverTargetAction } from "@/_definitions/attributes";
import Button from "./button";

test("basic construction", () => {
  const mock = Button("mock", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("BUTTON");
});

test("construct with children", () => {
  const children = [
    "foo",
    document.createElement("span"),
  ];
  const mock = Button(children, {});
  expect(mock.childNodes.length).toBe(children.length);
});

test("construction with attributes", () => {
  const mockAttributes: HTMLButtonElementAttributes = {
    autofocus: true,
    disabled: true,
    form: "mockFormID",
    formAction: "/mock_url",
    formEnctype: FormAttributeEnctype.multipart,
    formMethod: FormAttributeMethod.post,
    formNoValidate: true,
    formTarget: FormAttributesTarget.blank,
    name: "mock_name",
    popoverTarget: "mock-popover-target",
    popoverTargetAction: PopoverTargetAction.toggle,
    type: ButtonAttributeType.button,
    value: "mock-value",
  };

  const mock = Button("Mock", mockAttributes);

  Object.entries(mockAttributes).forEach(([key, value]) => {
    switch (key) {
      case "autofocus":
        expect(mock.autofocus).toBe(value);
        return;
      case "disabled":
        expect(mock.disabled).toBe(value);
        return;
      case "formNoValidate":
        expect(mock.formNoValidate).toBe(value);
        return;
      default:
        expect(mock.getAttribute(key)).toBe(
          typeof value === "number" ? value.toString() : value
        );
    }
  });
});

test("cannot append certain child nodes", () => {
  const unallowedChildren = [
    document.createElement("button"),
    document.createElement("input"),
    document.createElement("form"),
    document.createElement("select"),
    document.createElement("textarea"),
  ]

  unallowedChildren.map(child => {
    const mock = Button(["foo", child], {})
    expect(mock.childNodes.length).toBe(1);
  });
});
