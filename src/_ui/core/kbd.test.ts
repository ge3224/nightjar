/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/kbd module
 */

import { expect, test } from "vitest";
import Kbd from "./kbd";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = Kbd()();

  expect(mock).not.toBeNull();

  expect(mock.tagName).toEqual("KBD");
});

test("construction with attributes", () => {
  const mock = Kbd(null, {
    id: "bar",
    class: "foo bar baz",
  })();

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});

test("construction with a child node", () => {
  const mockChildren = [
    document.createElement("em"),
    document.createElement("br"),
    document.createElement("abbr"),
    document.createElement("style"), // not phrasing content
  ];

  const mockParent = Kbd(mockChildren, {})();

  expect(mockParent.childNodes.length).toBe(3);
});
