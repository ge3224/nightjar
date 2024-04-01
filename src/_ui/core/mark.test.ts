/**
 * Project: Nightjar
 * Author: Jacob Benison
 * Copyright: (C) 2024 Jacob Benison
 * License: MIT
 *
 * Unit tests for the _ui/core/mark module
 */

import { test, assert } from "vitest";
import NewMark from "./mark";
import { MARK } from "@/_lib/node_names";

// @vitest-environment happy-dom

test("Basic construction test for NewMark", () => {
  // Test case: Testing basic construction with no children and no attributes
  const mark = NewMark()();
  assert.equal(mark.tagName, MARK);
  assert.equal(mark.childNodes.length, 0);
});

test("Construction with attributes test for NewMark", () => {
  // Test case: Testing construction with attributes only
  const attributes = { id: "mark1", class: "mark-class", autofocus: true };
  const mark = NewMark(undefined, attributes)();
  assert.equal(mark.tagName, MARK);
  assert.equal(mark.getAttribute("id"), "mark1");
  assert.equal(mark.getAttribute("class"), "mark-class");
  assert.equal(mark.autofocus, true);
  assert.equal(mark.childNodes.length, 0);
});

test("Construction with children test for NewMark", () => {
  // Test case: Testing construction with children only
  const child1 = document.createElement("SPAN");
  const child2 = "Some text content";
  const mark = NewMark([child1, child2])();
  assert.equal(mark.tagName, MARK);
  assert.equal(mark.childNodes.length, 2);
  assert.equal(mark.childNodes[0], child1);
  assert.equal(mark.childNodes[1].textContent, "Some text content");
});
