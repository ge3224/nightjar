/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/b module
 */

import { expect, test } from "vitest";
import { HTMLElementAttributes } from "@/_definitions/attributes";
import B from "./b";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = B("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("B");
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChildren = [
    document.createElement("em"),
    document.createElement("br"),
    document.createElement("abbr"),
    document.createElement("style"), // not flow content
  ];

  const mockParent = B(mockChildren, {});

  expect(mockParent.childNodes.length).toBe(3);
});

test("construction with attributes", () => {
  const mock = B("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
