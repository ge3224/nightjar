// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { HTMLElementGlobalAttributes } from "@/_definitions/attributes";
import NewTime from "./time";
import { TIME } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewTime("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(TIME);
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChildren = [
    document.createElement("abbr"),
    document.createElement("br"),
    document.createElement("span"),
    document.createElement("style"), // not flow content
  ];

  const mockParent = NewTime(mockChildren, {});

  expect(mockParent.childNodes.length).toBe(3);
});

test("construction with attributes", () => {
  const mock = NewTime("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementGlobalAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
