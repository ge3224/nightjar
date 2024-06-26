// @vitest-environment happy-dom

import { expect, test } from "vitest";
import NewTextarea from "./textarea";
import {
  HTMLTextAreaElementAttributes,
  TextAreaAttributeWrap,
} from "@/_definitions/attributes";
import { TEXTAREA } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewTextarea("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(TEXTAREA);
});

test("construction with attributes", () => {
  const mockAttributes: HTMLTextAreaElementAttributes = {
    name: "mock",
    rows: 4,
    cols: 50,
    disabled: true,
    form: "mock-form",
    maxlength: 100,
    minlength: 10,
    placeholder: "Mock placeholder text",
    readOnly: true,
    required: true,
    wrap: TextAreaAttributeWrap.soft,
  };

  const mock = NewTextarea("foo", mockAttributes);

  Object.entries(mockAttributes).forEach(([key, value]) => {
    switch (key) {
      case "disabled":
        expect(mock.disabled).toBe(value);
        return;
      case "readOnly":
        expect(mock.readOnly).toBe(value);
        return;
      case "required":
        expect(mock.required).toBe(value);
        return;
      default:
        expect(mock.getAttribute(key)).toBe(
          typeof value === "number" ? value.toString() : value
        );
    }
  });
});
