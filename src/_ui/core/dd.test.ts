/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/dd module
 */

import { expect, test } from "vitest";
import { HTMLElementAttributes } from "@/_definitions/attributes";
import Dd from "./dd";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = Dd("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("DD");
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChild = document.createElement("span");
  mockChild.textContent = "foo";

  const mockParent = Dd(mockChild, {});

  expect(mockParent.firstElementChild).not.toBeNull();
  expect(mockParent.firstElementChild?.tagName).toBe("SPAN");
  expect(mockParent.firstElementChild?.textContent).toEqual(
    mockChild.textContent
  );
});

test("construction with attributes", () => {
  const mock = Dd("foo", {
    id: "bar",
    class: "foo bar baz",
  } as HTMLElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
