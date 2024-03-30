/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/bdo module
 */

import { expect, test } from "vitest";
import { HTMLElementAttributes } from "@/_definitions/attributes";
import Bdo from "./bdo";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = Bdo("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("BDO");
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChildren = [
    document.createElement("strong"),
    document.createElement("em"),
    document.createElement("span"),
    document.createElement("style"), // not flow content
  ];

  const mockParent = Bdo(mockChildren, {});

  expect(mockParent.childNodes.length).toBe(3);
});

test("construction with attributes", () => {
  const mock = Bdo("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
