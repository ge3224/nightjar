// @vitest-environment happy-dom

import { expect, test } from "vitest";
import {
  FormAttributeEnctype,
  FormAttributeMethod,
  FormAttributesAutocomplete,
  FormAttributesTarget,
  GlobalAutocapitalizeAttribute,
  HTMLFormElementAttributes,
} from "../_definitions/element_attributes";
import Form from "./form";

test("basic construction", () => {
  const mock = Form("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("FORM");
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChild = document.createElement("span");
  mockChild.textContent = "foo";

  const mockParent = Form(mockChild, {});

  expect(mockParent.firstElementChild).not.toBeNull();
  expect(mockParent.firstElementChild?.tagName).toBe("SPAN");
  expect(mockParent.firstElementChild?.textContent).toEqual(
    mockChild.textContent
  );
});

test("construction with attributes", () => {
  const mockAttributes: HTMLFormElementAttributes = {
    acceptCharset: "UTF-8",
    action: "/mock-submit-form",
    autocapitalize: GlobalAutocapitalizeAttribute.sentences,
    autocomplete: FormAttributesAutocomplete.off,
    class: "foo bar baz",
    enctype: FormAttributeEnctype.text,
    id: "bar",
    name: "mock-form",
    method: FormAttributeMethod.dialog,
    novalidate: true,
    rel: "alternate stylesheet",
    target: FormAttributesTarget.blank,
  };

  const mock = Form("foo", mockAttributes);

  Object.entries(mockAttributes).forEach(([key, value]) => {
    switch (key) {
      case "acceptCharset":
        expect(mock.getAttribute("accept-charset")).toBe(value);
        return;
      case "novalidate":
        expect(mock.noValidate).toBe(mockAttributes.novalidate);
        return;
      default:
        expect(mock.getAttribute(key)).toBe(value);
    }
  });
});
