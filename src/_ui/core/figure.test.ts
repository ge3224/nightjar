// @vitest-environment happy-dom

import { expect, test } from "vitest";
import { HTMLElementAttributes } from "@/_definitions/attributes";
import NewFigure from "./figure";
import { FIGURE } from "@/_lib/node_names";

test("basic construction", () => {
  const mock = NewFigure("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(FIGURE);
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

  const mockParent = NewFigure(mockChildren, {});

  expect(mockParent.childNodes.length).toBe(4);
});

test("construction with attributes", () => {
  const mock = NewFigure("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
