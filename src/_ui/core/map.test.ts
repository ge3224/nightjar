/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/map module
 */

import { expect, test } from "vitest";
import NewMap from "./map";
import { AREA, B, MAP } from "@/_lib/node_names";

// @vitest-environment happy-dom

test("basic construction", () => {
  const mock = NewMap()();

  expect(mock).not.toBeNull();

  expect(mock.tagName).toEqual(MAP);
});

test("construction with attributes", () => {
  const attributes = {
    id: "map1",
    class: "map-class",
    autofocus: true,
    name: "map",
  };

  const mock = NewMap(undefined, attributes)();

  expect(mock.getAttribute("id")).toBe(attributes.id);
  expect(mock.getAttribute("class")).toBe(attributes.class);
  expect(mock.getAttribute("name")).toBe(attributes.name);
  expect(mock.autofocus).toBe(attributes.autofocus);
});

test("construction with permitted children", () => {
  const content = (() => {
    const child1 = document.createElement(B);
    const child2 = "Some text content";
    const nonTransparentContent = document.createElement(AREA);

    return [child1, child2, nonTransparentContent];
  })();

  const mock = NewMap(content)();

  expect(mock.childNodes.length).toBe(2);
});
