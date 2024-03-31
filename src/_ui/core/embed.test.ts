/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/embed module
 */

import { expect, test } from "vitest";
import Embed from "./embed";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = Embed()();

  expect(mock).not.toBeNull();

  expect(mock.tagName).toEqual("EMBED");
});

test("construction with attributes", () => {
  const mockAttributes = {
    id: "foo",
    height: "100px",
    src: "https://foo.bar.baz",
    width: "100px",
    type: "application/pdf",
  };

  const mock = Embed(mockAttributes)();

  expect(mock.id).toBe(mockAttributes.id);
  expect(mock.getAttribute("height")).toBe(mockAttributes.height);
  expect(mock.getAttribute("src")).toBe(mockAttributes.src);
  expect(mock.getAttribute("width")).toBe(mockAttributes.width);
  expect(mock.getAttribute("type")).toBe(mockAttributes.type);
});
