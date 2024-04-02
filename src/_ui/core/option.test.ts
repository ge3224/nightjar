import { expect, test } from "vitest";
import { HTMLOptionElementAttributes } from "@/_definitions/attributes";
import NewOption from "./option";
import { OPTION } from "@/_lib/node_names";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = NewOption("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(OPTION);
});

test("construct with attributes", () => {
  const mockAttributes: HTMLOptionElementAttributes = {
    disabled: true,
    value: "mock",
    selected: true,
    label: "mockLabel",
  };

  const mock = NewOption("bar", mockAttributes);

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
