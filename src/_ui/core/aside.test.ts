// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { HTMLElementAttributes } from "@/_definitions/attributes";
import Aside from "./aside";

test("basic construction", () => {
  const mock = Aside("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("ASIDE");
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChildren = [
    document.createElement("h1"),
    document.createElement("p"),
    document.createElement("span"),
    document.createElement("style"), // not flow content
  ];

  const mockParent = Aside(mockChildren, {});

  expect(mockParent.childNodes.length).toBe(3);
});

test("construction with attributes", () => {
  const mock = Aside("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
