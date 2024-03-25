// @vitest-environment happy-dom

import { expect, test } from "vitest";
import Option from "./option";
import { HTMLOptionElementAttributes } from "@/_definitions/attributes";

test("basic construction", () => {
  const mock = Option("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("OPTION");
});

test("construct with attributes", () => {
  const mockAttributes: HTMLOptionElementAttributes = {
    disabled: true,
    value: "mock",
    selected: true,
    label: "mockLabel",
  };

  const mock = Option("bar", mockAttributes);

  Object.entries(mockAttributes).forEach(([key, value]) => {
    switch (key) {
      case "disabled":
        expect(mock.disabled).toBe(value);
        return;
      case "selected":
        expect(mock.selected).toBe(value);
        return;
      default:
        expect(mock.getAttribute(key)).toBe(
          typeof value === "number" ? value.toString() : value
        );
    }
  });
});
