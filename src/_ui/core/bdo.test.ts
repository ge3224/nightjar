/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/bdo module
 */

import { expect, test } from "vitest";
import { GlobalAttributes } from "@/_definitions/attributes";
import NewBdo from "./bdo";
import { BDO } from "@/_lib/node_names";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = NewBdo("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(BDO);
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChildren = [
    document.createElement("strong"),
    document.createElement("em"),
    document.createElement("span"),
    document.createElement("style"), // not flow content
  ];

  const mockParent = NewBdo(mockChildren, {});

  expect(mockParent.childNodes.length).toBe(3);
});

test("construction with attributes", () => {
  const mock = NewBdo("foo", {
    id: "bar",
    class: "foo bar baz",
  } as GlobalAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
