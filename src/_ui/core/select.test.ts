// @vitest-environment happy-dom

import { HTMLSelectElementAttributes } from "@/_definitions/attributes";
import { expect, test } from "vitest";
import Select from "./select";

test("basic construction", () => {
  const mock = Select([], {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("SELECT");
});

test("construct with children", () => {
  const mockChildren = [
    document.createElement("option"),
    document.createElement("option"),
  ];

  const mock = Select(mockChildren, {});
  expect(mock.childNodes.length).toBe(mockChildren.length);
});

test("construct with attributes", () => {
  const mockAttributes: HTMLSelectElementAttributes = {
    autocomplete: "username",
    disabled: true,
    form: "mock_form",
    multiple: true,
    name: "mock",
    required: true,
    size: 3,
  };

  const mock = Select([], mockAttributes);

  Object.entries(mockAttributes).forEach(([key, value]) => {
    switch (key) {
      case "disabled":
        expect(mock.disabled).toBe(value);
        return;
      case "multiple":
        expect(mock.multiple).toBe(value);
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
