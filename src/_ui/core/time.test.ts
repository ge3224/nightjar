// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { HTMLElementAttributes } from "@/_definitions/attributes";
import Time from "./time";

test("basic construction", () => {
  const mock = Time("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("TIME");
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChildren = [
    document.createElement("abbr"),
    document.createElement("br"),
    document.createElement("span"),
    document.createElement("style"), // not flow content
  ];

  const mockParent = Time(mockChildren, {});

  expect(mockParent.childNodes.length).toBe(3);
});

test("construction with attributes", () => {
  const mock = Time("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
