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
import NewCol from "./col";
import { COL } from "@/_lib/node_names";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = NewCol({});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(COL);
});

test("construction with attributes", () => {
  const mock = NewCol({
    id: "bar",
    class: "foo bar baz",
    span: 150,
  } as HTMLCanvasElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
  expect(mock.getAttribute("span")).toBe("150");
});
