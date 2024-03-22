// @vitest-environment happy-dom

import { expect, test } from "vitest";
import appendChildren from "./append_children";

test("basic usage", () => {
  const mockParent = document.createElement("div");

  expect(mockParent.childNodes.length).toBe(0);

  appendChildren(mockParent, "foo");

  expect(mockParent.childNodes.length).toBe(1);
});

test("appending a non-text child node", () => {
  const mockParent = document.createElement("div");

  expect(mockParent.childNodes.length).toBe(0);

  appendChildren(mockParent, document.createElement("p"));

  expect(mockParent.childNodes.length).toBe(1);
});

test("appending a mix of child nodes", () => {
  const mockParent = document.createElement("div");

  expect(mockParent.childNodes.length).toBe(0);

  appendChildren(mockParent, [
    "foo",
    document.createElement("a"),
    "bar",
  ]);

  expect(mockParent.childNodes.length).toBe(3);
});
