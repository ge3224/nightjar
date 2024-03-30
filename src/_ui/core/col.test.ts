/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/col module
 */

import { expect, test } from "vitest";
import { HTMLCanvasElementAttributes } from "@/_definitions/attributes/canvas";
import Col from "./col";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = Col({});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual("COL");
});

test("construction with attributes", () => {
  const mock = Col({
    id: "bar",
    class: "foo bar baz",
    span: 150,
  } as HTMLCanvasElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
  expect(mock.getAttribute("span")).toBe("150");
});
