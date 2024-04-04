/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/b module
 */

import { expect, test } from "vitest";
import { HTMLElementGlobalAttributes } from "@/_definitions/attributes";
import NewB from "./b";
import { B } from "@/_lib/node_names";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = NewB()();

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(B);
});

test("construction with a child node", () => {
  const content = [
    document.createElement("em"),
    document.createElement("br"),
    document.createElement("abbr"),
    document.createElement("style"), // not flow content
  ];

  const mockParent = NewB(content)();

  expect(mockParent.childNodes.length).toBe(3);
});

test("construction with attributes", () => {
  const mock = NewB("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementGlobalAttributes)();

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
