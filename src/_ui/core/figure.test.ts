// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { HTMLElementAttributes } from "@/_definitions/attributes";
import Figure from "./figure";

test("basic construction", () => {
  const mock = Figure("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("FIGURE");
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChildren = [
    document.createElement("h1"),
    document.createElement("p"),
    document.createElement("span"),
    document.createElement("style"), // not flow content
    document.createElement("figcaption"),
  ];

  const mockParent = Figure(mockChildren, {});

  expect(mockParent.childNodes.length).toBe(4);
});

test("construction with attributes", () => {
  const mock = Figure("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
