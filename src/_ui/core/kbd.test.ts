/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/kbd module
 */

import { expect, test } from "vitest";
import NewKbd from "./kbd";
import { KBD } from "@/_lib/node_names";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = NewKbd()();

  expect(mock).not.toBeNull();

  expect(mock.tagName).toEqual(KBD);
});

test("construction with attributes", () => {
  const mock = NewKbd(null, {
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

  const mockParent = NewKbd(mockChildren, {})();

  expect(mockParent.childNodes.length).toBe(3);
});
