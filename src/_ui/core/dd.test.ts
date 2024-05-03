/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/dd module
 */

import { expect, test } from "vitest";
import { GlobalAttributes } from "@/_definitions/attributes";
import NewDd from "./dd";
import { DD, SPAN } from "@/_lib/node_names";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = NewDd("foo", {});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(DD);
  expect(mock.textContent).toBe("foo");
});

test("construction with a child node", () => {
  const mockChild = document.createElement("span");
  mockChild.textContent = "foo";

  const mockParent = NewDd(mockChild, {});

  expect(mockParent.firstElementChild).not.toBeNull();
  expect(mockParent.firstElementChild?.tagName).toBe(SPAN);
  expect(mockParent.firstElementChild?.textContent).toEqual(
    mockChild.textContent
  );
});

test("construction with attributes", () => {
  const mock = NewDd("foo", {
    id: "bar",
    class: "foo bar baz",
  } as GlobalAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
