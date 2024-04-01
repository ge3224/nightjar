// @vitest-environment happy-dom

import { expect, test } from "vitest";
import {
  FormAttributeEnctype,
  FormAttributeMethod,
  FormAttributesTarget,
  HTMLElementAttributeAutocapitalize,
  HTMLFormElementAttributes,
} from "@/_definitions/attributes";
import NewForm from "./form";
import { FORM, SPAN } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewForm("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(FORM);
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChild = document.createElement("span");
  mockChild.textContent = "foo";

  const mockParent = NewForm(mockChild, {});

  expect(mockParent.firstElementChild).not.toBeNull();
  expect(mockParent.firstElementChild?.tagName).toBe(SPAN);
  expect(mockParent.firstElementChild?.textContent).toEqual(
    mockChild.textContent
  );
});

test("construction with attributes", () => {
  const mockAttributes: HTMLFormElementAttributes = {
    acceptCharset: "UTF-8",
    action: "/mock-submit-form",
    autocapitalize: HTMLElementAttributeAutocapitalize.sentences,
    autocomplete: "off",
    class: "foo bar baz",
    enctype: FormAttributeEnctype.text,
    id: "bar",
    name: "mock-form",
    method: FormAttributeMethod.dialog,
    noValidate: true,
    rel: "alternate stylesheet",
    target: FormAttributesTarget.blank,
    inert: true,
  };

  const mock = NewForm("foo", mockAttributes);

  Object.entries(mockAttributes).forEach(([key, value]) => {
    switch (key) {
      case "acceptCharset":
        expect(mock.getAttribute("accept-charset")).toBe(value);
        return;
      case "noValidate":
        expect(mock.noValidate).toBe(mockAttributes.noValidate);
        return;
      case "inert":
        expect(mock.inert).toBe(mockAttributes.inert);
        return;
      default:
        expect(mock.getAttribute(key)).toBe(value);
    }
  });
});

test("cannot add <form> as a child", () => {
  const unallowedChild = document.createElement("form");
  const mock = NewForm(["foo", unallowedChild], {});
  expect(mock.childNodes.length).toBe(1);
});
