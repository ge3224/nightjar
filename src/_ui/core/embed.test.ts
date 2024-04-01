/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/embed module
 */

import { expect, test } from "vitest";
import NewEmbed from "./embed";
import { EMBED } from "@/_lib/node_names";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = NewEmbed()();

  expect(mock).not.toBeNull();

  expect(mock.tagName).toEqual(EMBED);
});

test("construction with attributes", () => {
  const mockAttributes = {
    id: "foo",
    height: "100px",
    src: "https://foo.bar.baz",
    width: "100px",
    type: "application/pdf",
  };

  const mock = NewEmbed(mockAttributes)();

  expect(mock.id).toBe(mockAttributes.id);
  expect(mock.getAttribute("height")).toBe(mockAttributes.height);
  expect(mock.getAttribute("src")).toBe(mockAttributes.src);
  expect(mock.getAttribute("width")).toBe(mockAttributes.width);
  expect(mock.getAttribute("type")).toBe(mockAttributes.type);
});
