/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/base module
 */

import { expect, test } from "vitest";
import { HTMLAreaElementAttributes } from "@/_definitions/attributes/area";
import NewBase from "./base";
import { BASE } from "@/_lib/node_names";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = NewBase({});

  expect(mock).not.toBeNull();
  expect(mock.tagName).toEqual(BASE);
});

test("construction with attributes", () => {
  const mock = NewBase({
    id: "bar",
    class: "foo bar baz",
    href: "right.html",
    target: "_blank",
  } as HTMLAreaElementAttributes);

  expect(mock.getAttribute("id")).toBe("bar");
  expect(mock.getAttribute("class")).toBe("foo bar baz");
});
