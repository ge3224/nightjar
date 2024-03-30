/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/bdi module
 */

import { expect, test } from "vitest";
import { HTMLElementAttributes } from "@/_definitions/attributes";
import Bdi from "./bdi";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = Bdi("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("BDI");
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChildren = [
    document.createElement("strong"),
    document.createElement("em"),
    document.createElement("span"),
    document.createElement("style"), // not flow content
  ];

  const mockParent = Bdi(mockChildren, {});

  expect(mockParent.childNodes.length).toBe(3);
});

test("construction with attributes", () => {
  const mock = Bdi("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
