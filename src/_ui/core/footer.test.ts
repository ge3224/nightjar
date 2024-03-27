// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { HTMLElementAttributes } from "@/_definitions/attributes";
import Footer from "./footer";

test("basic construction", () => {
  const mock = Footer("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("FOOTER");
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChildren = [
    document.createElement("h1"),
    document.createElement("p"),
    document.createElement("span"),
    document.createElement("style"), // not flow content
    document.createElement("header"), // prohibited flow content
    document.createElement("footer"), // prohibited flow content
  ];

  const mockParent = Footer(mockChildren, {});

  expect(mockParent.childNodes.length).toBe(3);
});

test("construction with attributes", () => {
  const mock = Footer("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
